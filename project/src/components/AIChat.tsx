import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Mic } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import Orb from "./ui/Orb";
import { speechToText } from "../utils/speechToText";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false); // Changed to false so button shows by default
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Debug log to verify component is mounting
  useEffect(() => {
    console.log('AIChat component mounted successfully - isOpen:', isOpen);
  }, []);

  // Initialize speech recognition on component mount
  useEffect(() => {
    speechToText.setLanguage('en-US');
    
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");

    try {
      console.log('📤 Sending request to webhook with query:', currentInput);

      const response = await fetch('https://n8n.pipfactor.com/webhook-test/hacksters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: currentInput,
          timestamp: new Date().toISOString(),
          sender: 'medical-ai-chat'
        }),
      });

      console.log('📥 Response status:', response.status, response.statusText);

      if (!response.ok) {
        console.error('❌ Request failed with status:', response.status);
        throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Request successful! Response data:', data);
      
      // Extract the most relevant text part from the JSON response
      let text = '';
      if (typeof data === 'string') {
        text = data;
      } else if (data.output) {
        // Handle the case where response is wrapped in "output" field
        text = data.output;
      } else if (data["task.summary"]) {
        text = data["task.summary"];
      } else if (data.reason) {
        text = data.reason;
      } else if (data.response) {
        text = data.response;
      } else if (data.message) {
        text = data.message;
      } else {
        text = JSON.stringify(data);
      }

      const aiResponse: Message = {
        id: messages.length + 2,
        text,
        sender: "ai",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error('❌ N8N webhook failed, falling back to local API:', error);
      // Fallback to local CareCloud AI Agent API
      try {
        console.log('📤 Sending request to local API fallback with query:', currentInput);
        const fallbackResponse = await fetch('http://localhost:8000/query', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: currentInput, agent_type: 'langgraph' }),
        });
        console.log('📥 Fallback response status:', fallbackResponse.status, fallbackResponse.statusText);
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          const fallbackText = fallbackData.response || "I apologize, but I couldn't process your request at the moment. Please try again.";
          const aiResponse: Message = {
            id: messages.length + 2,
            text: fallbackText,
            sender: 'ai',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, aiResponse]);
          return;
        } else {
          console.error('❌ Fallback API failed with status:', fallbackResponse.status, fallbackResponse.statusText);
        }
      } catch (fallbackError) {
        console.error('❌ Error sending request to fallback API:', fallbackError);
      }
      // Final fallback error message
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm experiencing some technical difficulties. Please try again later.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleMicClick = () => {
    if (!speechToText.isSupported()) {
      alert('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      speechToText.stop();
      setIsListening(false);
      setIsRecording(false);
      setCurrentTranscript("");
    } else {
      setIsRecording(true);
      setCurrentTranscript("");
      speechToText.start(
        (transcript: string) => {
          setInputValue(transcript);
          setCurrentTranscript("");
          setIsListening(false);
          setIsRecording(false);
        },
        (listening: boolean) => {
          setIsListening(listening);
          if (!listening) {
            setIsRecording(false);
            setCurrentTranscript("");
          }
        },
        (interimTranscript: string) => {
          setCurrentTranscript(interimTranscript);
        }
      );
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="aichat-button fixed bottom-4 right-4 md:bottom-8 md:right-8 h-12 w-12 md:h-14 md:w-14 rounded-full shadow-xl"
        size="icon"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 999999
        }}
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </Button>
    );
  }

  return (
    <div 
      className="aichat-window fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[calc(100vw-2rem)] max-w-80 md:w-80 h-[70vh] md:h-[480px] rounded-2xl flex flex-col overflow-hidden shadow-2xl" 
      style={{ 
        zIndex: 999999,
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(100, 116, 139, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(100, 116, 139, 0.2)'
      }}
    >
      {/* FIXED ORB - Absolutely positioned to chat window center */}
      <div 
        className={`absolute pointer-events-none transition-opacity duration-500 ${
          isListening ? 'opacity-80' : 'opacity-20'
        }`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000000,
          width: '160px',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div 
          className="w-52 h-52 md:w-64 md:h-64"
          style={{
            transform: `scale(${isListening ? 1 : 0.75})`,
            transition: 'transform 500ms ease-in-out'
          }}
        >
          <Orb
            hoverIntensity={isListening ? 0.6 : (isTyping ? 0.4 : 0.2)}
            rotateOnHover={true}
            hue={isListening ? 250 : 310}
            forceHoverState={isListening || isTyping}
          />
        </div>
      </div>

      {/* Header */}
      <div 
        className="flex items-center justify-between p-3 md:p-4 text-white rounded-t-2xl"
        style={{ 
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(100, 116, 139, 0.3)'
        }}
      >
        <span className="text-sm md:text-base font-medium">Medical AI</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-gray-200 hover:text-white hover:bg-white/10 rounded-lg h-7 w-7 md:h-8 md:w-8 transition-colors"
        >
          <X className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </div>

      {/* Messages area */}
      <ScrollArea 
        className="flex-1 p-3 md:p-4 overflow-y-auto"
        style={{
          background: 'rgba(15, 23, 42, 0.2)',
          backdropFilter: 'blur(15px) saturate(150%)',
          WebkitBackdropFilter: 'blur(15px) saturate(150%)'
        }}
      >
        {/* Messages Content */}
        <div 
          className={`flex flex-col space-y-3 transition-all duration-300 ${
            isListening ? 'opacity-0 invisible' : 'opacity-100 visible'
          }`}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-2 md:p-3 rounded-lg transition-all duration-300 ${
                message.sender === 'user' 
                  ? 'ml-2 md:ml-4' 
                  : 'mr-2 md:mr-4'
              }`}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: message.sender === 'user'
                  ? '1px solid rgba(59, 130, 246, 0.5)' 
                  : '1px solid rgba(147, 51, 234, 0.5)', 
                boxShadow: message.sender === 'user'
                  ? "0 4px 15px rgba(59, 130, 246, 0.1)"
                  : "0 4px 15px rgba(147, 51, 234, 0.1)"
              }}
            >
              <p className="whitespace-pre-wrap text-white leading-relaxed text-xs md:text-sm">
                {message.text}
              </p>
              <div className="text-xs text-slate-300 mt-1 md:mt-2 opacity-80">
                {message.sender === 'user' ? 'You' : 'Medical AI'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>

        {/* Listening State Overlay */}
        {isListening && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="text-white text-lg md:text-xl font-medium mb-2 animate-pulse">
              Listening...
            </div>
            <div className="text-white/90 text-xs md:text-sm text-center px-4 mb-4">
              Speak your medical question clearly
            </div>
          </div>
        )}
      </ScrollArea>

      {/* Input area */}
      <div 
        className="p-3 md:p-4 text-white rounded-b-2xl"
        style={{ 
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(100, 116, 139, 0.3)'
        }}
      >
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              placeholder={isListening ? "Speak now..." : "Ask about medical topics..."}
              value={isListening && currentTranscript ? currentTranscript : inputValue}
              onChange={(e) => {
                if (!isListening) {
                  setInputValue(e.target.value);
                  
                  if (typingTimeout) {
                    clearTimeout(typingTimeout);
                  }
                  
                  setIsTyping(true);
                  
                  const deactivateTimeout = setTimeout(() => {
                    setIsTyping(false);
                  }, 2000);
                  
                  setTypingTimeout(deactivateTimeout);
                }
              }}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="w-full text-white placeholder-slate-400 rounded-xl border-none focus:ring-0 focus:outline-none pr-10 text-sm md:text-base"
              style={{ 
                background: 'rgba(15, 23, 42, 0.4)', 
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: '#ffffff',
                border: '1px solid rgba(100, 116, 139, 0.4)'
              }}
              readOnly={isListening}
            />
            <Button
              onClick={handleMicClick}
              size="icon"
              className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 md:h-8 md:w-8 rounded-lg transition-all duration-300 ${
                isListening || isRecording
                  ? 'bg-red-500/40 hover:bg-red-500/50 text-red-200 shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-gray-200'
              }`}
              style={{
                boxShadow: isListening || isRecording 
                  ? '0 0 20px rgba(239, 68, 68, 0.5)' 
                  : 'none',
                animation: isListening ? 'pulse 2s infinite' : 'none'
              }}
            >
              <Mic className={`h-3 w-3 md:h-4 md:w-4 transition-transform duration-200 ${isListening ? 'scale-110' : ''}`} />
            </Button>
          </div>
          
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="rounded-xl h-8 w-8 md:h-10 md:w-10 text-white transition-colors flex-shrink-0"
            style={{
              background: 'rgba(100, 116, 139, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 116, 139, 0.5)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(100, 116, 139, 0.6)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(100, 116, 139, 0.4)'}
          >
            <Send className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </div>
    );
}