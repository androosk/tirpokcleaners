"use client";
import { useState, useRef, useEffect } from "react";
import { Bot, User, Loader2, X, MessageCircle } from "lucide-react";
import AnimatedPrompts from "./AnimatedPrompts";
import ChatInput from "./ChatInput";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export default function GarmentCareChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm your dry cleaning assistant. I can help you with:\n\n• Stain removal and fabric care tips\n• Store hours and locations\n• Pricing and services\n• General garment care questions\n\nWhat would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const [dismissedPrompts, setDismissedPrompts] = useState<string[]>([]);
  const [isAnimatingOpen, setIsAnimatingOpen] = useState(false);
  const [isAnimatingClose, setIsAnimatingClose] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompts(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const prompts = [
    { id: "greeting", text: "Hello there!" },
    { id: "help", text: "How can we help you today?" },
  ];

  const dismissAllPrompts = () => {
    setDismissedPrompts(prompts.map(p => p.id));
  };

  const handleOpenChat = () => {
    setIsAnimatingOpen(true);
    setIsOpen(true);
    setTimeout(() => {
      setIsAnimatingOpen(false);
    }, 300);
  };

  const handleCloseChat = () => {
    setIsAnimatingClose(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimatingClose(false);
      setShowPrompts(true);
      setDismissedPrompts([]);
    }, 200);
  };

  const handlePromptClick = (promptText: string) => {
    setInput(promptText);
    dismissAllPrompts();
    handleOpenChat();
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input.trim(),
          conversationHistory: messages.slice(-10), // Keep last 10 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Sorry, I'm having trouble responding right now. Please try again in a moment.",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <>
        {/* Animated Prompts */}
        <AnimatedPrompts
          prompts={prompts}
          showPrompts={showPrompts}
          dismissedPrompts={dismissedPrompts}
          onPromptClick={handlePromptClick}
          onDismissAll={dismissAllPrompts}
        />

        {/* Animated Chat Button */}
        <div
          className="fixed bottom-6 right-6 z-50 cursor-pointer"
          onClick={handleOpenChat}
        >
          <div className="relative">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 relative animate-bounce-subtle"
              aria-label="Open garment care chat"
            >
              <MessageCircle size={24} />
            </button>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 sm:w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ${
        isAnimatingOpen
          ? "animate-in slide-in-from-bottom-4 fade-in zoom-in-95"
          : isAnimatingClose
            ? "animate-out slide-out-to-bottom-4 fade-out zoom-out-95"
            : ""
      }`}
      style={{
        transformOrigin: "bottom right",
      }}
    >
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot size={18} className="sm:w-5 sm:h-5" />
          <h3 className="font-semibold text-sm sm:text-base">
            Tirpok Cleaners Assistant
          </h3>
        </div>
        <button
          onClick={handleCloseChat}
          className="hover:bg-blue-700 rounded p-1 transition-colors duration-200 hover:scale-110 transform"
          aria-label="Close chat"
        >
          <X size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "both",
            }}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 transition-all duration-200 hover:scale-105 transform ${
                message.role === "user"
                  ? "bg-blue-600 text-white shadow-md hover:shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-start gap-2">
                {message.role === "assistant" && (
                  <Bot size={16} className="mt-1 flex-shrink-0" />
                )}
                {message.role === "user" && (
                  <User size={16} className="mt-1 flex-shrink-0" />
                )}
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-in fade-in slide-in-from-left-2 duration-300">
            <div className="bg-gray-100 rounded-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2 shadow-sm">
              <Bot size={14} className="sm:w-4 sm:h-4" />
              <Loader2 size={14} className="animate-spin sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm text-gray-600">
                Thinking...
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <ChatInput
        input={input}
        isLoading={isLoading}
        onInputChange={setInput}
        onSendMessage={sendMessage}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
