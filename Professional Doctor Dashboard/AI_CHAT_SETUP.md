# 🤖 AI Chat API Setup Guide

## ✅ **Setup Complete!**

Your chat interface is now ready to connect to AI APIs. Here's what's been set up:

### 📁 **Files Created:**
- `src/api/chat.ts` - Main API configuration and functions
- `pages/api/chat.ts` - Next.js API route endpoint
- `.env.example` - Environment variables template

### 🔧 **Quick Setup Steps:**

#### 1. **Choose Your AI Provider:**

**Option A: OpenAI (Recommended)**
```bash
# Get API key from: https://platform.openai.com/api-keys
# Copy .env.example to .env.local
cp .env.example .env.local

# Add your OpenAI API key to .env.local
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-key-here
```

**Option B: Hugging Face (Free tier available)**
```bash
# Get API key from: https://huggingface.co/settings/tokens
# Add to .env.local
NEXT_PUBLIC_HUGGINGFACE_API_KEY=hf_your-key-here
```

**Option C: Local/Custom API**
```bash
# For your own AI server
NEXT_PUBLIC_LOCAL_API_URL=http://localhost:8000/api/chat
```

#### 2. **Install Dependencies:**
```bash
npm install @types/node
# If using OpenAI directly:
npm install openai
```

#### 3. **Test the Connection:**
- Start your development server: `npm run dev`
- Open the chat interface
- Send a test message
- Check browser console for any errors

### 🎯 **API Endpoint Details:**

**Request Format:**
```typescript
POST /api/chat
{
  "message": "What are the symptoms of diabetes?",
  "conversation_history": [...], // Previous messages
  "context": "medical",
  "user_id": "optional",
  "session_id": "optional"
}
```

**Response Format:**
```typescript
{
  "response": "Diabetes symptoms include...",
  "confidence": 0.95,
  "sources": ["medical_database"],
  "session_id": "abc123",
  "error": null
}
```

### 🔄 **Current Chat Flow:**
1. User types/speaks message
2. Frontend sends POST to `/api/chat`
3. API processes with chosen AI provider
4. Response appears in chat interface
5. Conversation history maintained

### ⚙️ **Configuration Options:**

Edit `src/api/chat.ts` to customize:
- **AI Model**: Change GPT model or use different providers
- **System Prompt**: Modify medical context and behavior
- **Response Length**: Adjust max_tokens
- **Temperature**: Control creativity (0.1 = factual, 0.9 = creative)

### 🩺 **Medical-Specific Features:**
- **Specialized System Prompt**: Designed for medical professionals
- **Context Awareness**: Maintains conversation history
- **Safety Guidelines**: Emphasizes professional medical judgment
- **Source Attribution**: Can provide evidence sources

### 🚀 **Ready to Use!**

Your chat interface will now:
- ✅ Send real messages to AI
- ✅ Get intelligent medical responses  
- ✅ Maintain conversation context
- ✅ Handle errors gracefully
- ✅ Work with speech-to-text

**Just add your API key and start chatting!** 🎉

### 🔍 **Troubleshooting:**
- Check browser console for errors
- Verify API key is correct
- Ensure .env.local file exists
- Check network requests in DevTools
- Test API endpoint directly with Postman

### 🔧 **Advanced Customization:**
- Modify system prompt for different specialties
- Add user authentication
- Implement rate limiting
- Add conversation storage
- Connect to medical databases
