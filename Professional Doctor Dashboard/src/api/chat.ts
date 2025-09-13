// API endpoint configuration for chat functionality
// This file sets up the structure for connecting to AI services

export interface ChatRequest {
  message: string;
  conversation_history?: Array<{
    id: number;
    text: string;
    sender: "user" | "ai";
    timestamp: Date;
  }>;
  context?: string;
  user_id?: string;
  session_id?: string;
}

export interface ChatResponse {
  response: string;
  confidence?: number;
  sources?: string[];
  session_id?: string;
  error?: string;
}

// API Configuration
const API_CONFIG = {
  // Choose your AI provider (uncomment the one you want to use)
  
  // Option 1: OpenAI GPT
  OPENAI_API_URL: 'https://api.openai.com/v1/chat/completions',
  OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
  
  // Option 2: Hugging Face Transformers
  HUGGINGFACE_API_URL: 'https://api-inference.huggingface.co/models/',
  HUGGINGFACE_API_KEY: process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || '',
  
  // Option 3: Local/Custom API
  LOCAL_API_URL: 'http://localhost:8000/api/chat',
  
  // Option 4: Azure OpenAI
  AZURE_API_URL: process.env.NEXT_PUBLIC_AZURE_API_URL || '',
  AZURE_API_KEY: process.env.NEXT_PUBLIC_AZURE_API_KEY || '',
};

// Medical-specific system prompt
const MEDICAL_SYSTEM_PROMPT = `You are a medical AI assistant designed to help healthcare professionals. 

Your capabilities include:
- Answering medical questions based on current medical literature
- Providing drug interaction information
- Suggesting treatment recommendations
- Offering diagnostic insights
- Explaining medical procedures and conditions

Important guidelines:
- Always provide evidence-based information
- Mention when recommendations should be verified with current protocols
- Emphasize that final medical decisions should always involve qualified healthcare professionals
- Be clear about limitations and when to seek specialist consultation
- Provide sources when possible

Respond in a professional, clear, and helpful manner appropriate for medical professionals.`;

// OpenAI API call function
export async function callOpenAI(request: ChatRequest): Promise<ChatResponse> {
  try {
    const messages = [
      { role: 'system', content: MEDICAL_SYSTEM_PROMPT },
      ...(request.conversation_history?.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })) || []),
      { role: 'user', content: request.message }
    ];

    const response = await fetch(API_CONFIG.OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo-preview', // or 'gpt-3.5-turbo' for faster/cheaper
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    return {
      response: data.choices[0].message.content,
      confidence: data.choices[0].finish_reason === 'stop' ? 1.0 : 0.8,
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to get response from OpenAI');
  }
}

// Hugging Face API call function
export async function callHuggingFace(request: ChatRequest): Promise<ChatResponse> {
  try {
    // Using a medical-focused model like BioBERT or similar
    const model = 'microsoft/DialoGPT-medium'; // Can be changed to medical-specific models
    
    const response = await fetch(`${API_CONFIG.HUGGINGFACE_API_URL}${model}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.HUGGINGFACE_API_KEY}`,
      },
      body: JSON.stringify({
        inputs: `Medical Query: ${request.message}`,
        options: {
          wait_for_model: true,
          use_cache: false,
        },
      }),
    });

    const data = await response.json();
    
    return {
      response: data[0]?.generated_text || "I couldn't process that request.",
      confidence: 0.8,
    };
  } catch (error) {
    console.error('Hugging Face API error:', error);
    throw new Error('Failed to get response from Hugging Face');
  }
}

// Local API call function (for custom endpoints)
export async function callLocalAPI(request: ChatRequest): Promise<ChatResponse> {
  try {
    const response = await fetch(API_CONFIG.LOCAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Local API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Local API error:', error);
    throw new Error('Failed to get response from local API');
  }
}

// Main chat API function - choose your provider here
export async function processChat(request: ChatRequest): Promise<ChatResponse> {
  try {
    // CHOOSE YOUR AI PROVIDER HERE:
    
    // Option 1: OpenAI (recommended for production)
    if (API_CONFIG.OPENAI_API_KEY) {
      return await callOpenAI(request);
    }
    
    // Option 2: Hugging Face (good for experimentation)
    // if (API_CONFIG.HUGGINGFACE_API_KEY) {
    //   return await callHuggingFace(request);
    // }
    
    // Option 3: Local API (for custom models)
    // return await callLocalAPI(request);
    
    // Fallback
    throw new Error('No AI API configured');
    
  } catch (error) {
    console.error('Chat processing error:', error);
    return {
      response: "I'm experiencing technical difficulties. Please try again later.",
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Utility function to format medical context
export function formatMedicalContext(messages: any[]): string {
  const recentMessages = messages.slice(-5); // Last 5 messages for context
  return recentMessages
    .map(msg => `${msg.sender}: ${msg.text}`)
    .join('\n');
}
