import { create } from 'zustand';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIStore {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Omit<Message, 'id'>) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
}

export const useAIStore = create<AIStore>((set, get) => ({
  messages: [
    { 
      id: 1, 
      text: "Hello! I'm your Eigur AI assistant. How can I help you today?", 
      sender: 'ai', 
      timestamp: new Date() 
    }
  ],
  isLoading: false,
  addMessage: (message) => 
    set((state) => ({
      messages: [
        ...state.messages, 
        { ...message, id: state.messages.length + 1 }
      ]
    })),
  setLoading: (loading) => set({ isLoading: loading }),
  clearMessages: () => 
    set({ 
      messages: [
        { 
          id: 1, 
          text: "Hello! I'm your Eigur AI assistant. How can I help you today?", 
          sender: 'ai', 
          timestamp: new Date() 
        }
      ] 
    })
}));