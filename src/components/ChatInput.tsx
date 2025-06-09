import { Send } from "lucide-react";

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export default function ChatInput({
  input,
  isLoading,
  onInputChange,
  onSendMessage,
  onKeyPress,
}: ChatInputProps) {
  return (
    <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={e => onInputChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask about stain removal, fabric care, or cleaning tips..."
          className="flex-1 resize-none border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 focus:shadow-md"
          rows={2}
          disabled={isLoading}
        />
        <button
          onClick={onSendMessage}
          disabled={!input.trim() || isLoading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-md px-3 py-2 transition-all duration-200 flex items-center justify-center hover:scale-105 transform hover:shadow-md active:scale-95"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
