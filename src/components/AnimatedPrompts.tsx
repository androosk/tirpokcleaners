import { X } from "lucide-react";

interface Prompt {
  id: string;
  text: string;
}

interface AnimatedPromptsProps {
  prompts: Prompt[];
  showPrompts: boolean;
  dismissedPrompts: string[];
  onPromptClick: (promptText: string) => void;
  onDismissAll: () => void;
}

export default function AnimatedPrompts({
  prompts,
  showPrompts,
  dismissedPrompts,
  onPromptClick,
  onDismissAll,
}: AnimatedPromptsProps) {
  if (!showPrompts) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 hidden md:block">
      <div className="p-4 rounded-lg space-y-2">
        {prompts.map((prompt, index) =>
          !dismissedPrompts.includes(prompt.id) ? (
            <div
              key={prompt.id}
              className="animate-in slide-in-from-right-4 fade-in duration-500"
              style={{
                animationDelay: `${index * 400}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="relative group">
                <div
                  className="flex items-center justify-between bg-white p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transform"
                  onClick={() => onPromptClick(prompt.text)}
                >
                  <span className="text-sm text-gray-800 font-medium">
                    {prompt.text}
                  </span>
                </div>
                <button
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-red-500 rounded-full flex items-center justify-center cursor-pointer border-2 border-white shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 transform"
                  onClick={e => {
                    e.stopPropagation();
                    onDismissAll();
                  }}
                  aria-label="Dismiss prompts"
                >
                  <X size={12} className="text-white" />
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
