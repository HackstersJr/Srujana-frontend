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
  const [isOpen, setIsOpen] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Initialize speech recognition on component mount
  useEffect(() => {
    // Set language for medical context (can be changed based on user preference)
    speechToText.setLanguage('en-US');
    
    // Cleanup timeout on unmount
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

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");

    try {
      // Use LangGraph agent for all queries - it will internally decide how to handle them
      const agentType = 'langgraph';

      // Call CareCloud AI Agent API endpoint
      const response = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: currentInput,
          agent_type: agentType // Use toolbox for database queries, langchain for medical
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      const aiResponse: Message = {
        id: messages.length + 2,
        text: data.response || "I apologize, but I couldn't process your request at the moment. Please try again.",
        sender: "ai",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error('Error calling AI API:', error);
      
      // Fallback error message
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm experiencing some technical difficulties. Please check your connection and try again.",
        sender: "ai",
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
      // Stop listening
      speechToText.stop();
      setIsListening(false);
      setIsRecording(false);
      setCurrentTranscript("");
    } else {
      // Start listening
      setIsRecording(true);
      setCurrentTranscript("");
      speechToText.start(
        (transcript: string) => {
          // Handle final speech recognition result
          setInputValue(transcript);
          setCurrentTranscript("");
          setIsListening(false);
          setIsRecording(false);
        },
        (listening: boolean) => {
          // Handle listening state changes
          setIsListening(listening);
          if (!listening) {
            setIsRecording(false);
            setCurrentTranscript("");
          }
        },
        (interimTranscript: string) => {
          // Handle real-time transcript updates
          setCurrentTranscript(interimTranscript);
        }
      );
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors"
        size="icon"
      >
        <MessageCircle className="h-5 w-5 text-white" />
      </Button>
    );
  }

  return (
    <div 
      className="fixed bottom-8 right-8 w-80 h-[480px] rounded-2xl flex flex-col overflow-hidden" 
      style={{ 
        zIndex: 9999,
        background: 'rgba(32, 33, 35, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(86, 88, 105, 0.3)'
      }}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 text-white rounded-t-2xl"
        style={{ 
          backgroundColor: 'rgba(22, 22, 22, 0.95)',
          borderBottom: '1px solid rgba(86, 88, 105, 0.2)'
        }}
      >
        <span className="text-base font-medium">Medical AI</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-gray-300 hover:text-white hover:bg-white/10 rounded-lg h-8 w-8 transition-colors"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages area */}
      <ScrollArea 
        className="flex-1 p-4 overflow-y-auto relative"
        style={{
          backdropFilter: 'blur(8px) saturate(180%)',
          WebkitBackdropFilter: 'blur(8px) saturate(180%)',
          background: 'rgba(255, 255, 255, 0.46)'
        }}
      >
        {/* Orb Background - Show larger and more prominent when listening */}
        <div 
          className={`absolute inset-0 pointer-events-none flex items-center justify-center transition-all duration-500 ${
            isListening ? 'opacity-80 z-10' : 'opacity-15 z-0'
          }`}
        >
          <div className={`transition-all duration-500 ${isListening ? 'w-48 h-48' : 'w-32 h-32'}`}>
            <Orb
              hoverIntensity={isListening ? 0.6 : (isTyping ? 0.4 : 0.2)}
              rotateOnHover={true}
              hue={isListening ? 250 : 310} // Red when listening, cyan when normal
              forceHoverState={isListening || isTyping}
            />
          </div>
        </div>
        
        {/* Messages Content - Hide when listening */}
        <div 
          className={`flex flex-col space-y-3 relative transition-all duration-300 ${
            isListening ? 'opacity-0 invisible' : 'opacity-100 visible z-1'
          }`}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                message.sender === 'user' 
                  ? 'ml-4' // User messages slightly indented from left
                  : 'mr-4' // AI messages slightly indented from right
              }`}
              style={{
                background: message.sender === 'user' 
                  ? 'rgba(255, 255, 255, 0.16)' 
                  : 'rgba(255, 255, 255, 0.16)',
                border: message.sender === 'user'
                  ? '1px solid rgba(73, 100, 254, 0.4)' 
                  : '1px solid rgba(138, 43, 226, 0.4)', 
                boxShadow: message.sender === 'user'
                  ? "0 0 12px 2px rgba(73, 100, 254, 0.25), 0 0 0 2px rgba(201, 100, 255, 0.10)"
                  : "0 0 12px 2px rgba(138, 43, 226, 0.22), 0 0 0 2px rgba(73, 100, 254, 0.10)"
              }}
            >
              <p className="whitespace-pre-wrap text-white leading-relaxed text-sm">
                {message.text}
              </p>
              <div className="text-xs text-gray-400 mt-2 opacity-60">
                {message.sender === 'user' ? 'You' : 'Medical AI'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>

        {/* Listening State Overlay */}
        {isListening && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="text-white text-xl font-medium mb-2 animate-pulse">
              Listening...
            </div>
            <div style={{ color: '#f5f5f5' }} className="text-sm text-center px-4 mb-4">
              Speak your medical question clearly
            </div>
          </div>
        )}
      </ScrollArea>

      {/* Input area */}
      <div 
        className="p-4 text-white rounded-b-2xl"
        style={{ 
          backgroundColor: 'rgba(22, 22, 22, 0.95)',
          borderTop: '1px solid rgba(86, 88, 105, 0.2)'
        }}
      >
        <div className="flex items-center space-x-2">
          {/* Input field with mic button inside */}
          <div className="flex-1 relative">
            <Input
              placeholder={isListening ? "Speak now..." : "Ask about medical topics..."}
              value={isListening && currentTranscript ? currentTranscript : inputValue}
              onChange={(e) => {
                if (!isListening) {
                  setInputValue(e.target.value);
                  
                  // Clear existing timeout
                  if (typingTimeout) {
                    clearTimeout(typingTimeout);
                  }
                  
                  // Activate typing animation immediately when user starts typing
                  setIsTyping(true);
                  
                  // Turn off typing animation after 2 seconds of no typing
                  const deactivateTimeout = setTimeout(() => {
                    setIsTyping(false);
                  }, 2000);
                  
                  setTypingTimeout(deactivateTimeout);
                }
              }}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="w-full text-white placeholder-gray-400 rounded-xl border-none focus:ring-0 focus:outline-none pr-10 overflow-hidden text-ellipsis"
              style={{ 
                backgroundColor: 'rgba(64, 65, 79, 0.8)', 
                color: '#ffffff',
                border: '1px solid rgba(86, 88, 105, 0.3)',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}
              readOnly={isListening}
            />
            {/* Mic button inside input */}
            <Button
              onClick={handleMicClick}
              size="icon"
              className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-lg transition-all duration-300 ${
                isListening || isRecording
                  ? 'bg-red-500/30 hover:bg-red-500/40 text-red-300 shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
              style={{
                boxShadow: isListening || isRecording 
                  ? '0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3), 0 0 60px rgba(239, 68, 68, 0.2)' 
                  : 'none',
                animation: isListening ? 'pulse 2s infinite' : 'none'
              }}
            >
              <Mic className={`h-4 w-4 transition-transform duration-200 ${isListening ? 'scale-110' : ''}`} />
            </Button>
          </div>
          
          {/* Send button - properly aligned */}
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="rounded-xl h-10 w-10 text-white transition-colors flex-shrink-0"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}