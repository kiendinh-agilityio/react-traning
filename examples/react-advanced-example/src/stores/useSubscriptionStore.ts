import { create } from 'zustand';

interface SubscriptionState {
  isSubscribed: boolean;
  toggleSubscription: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  isSubscribed: false,
  toggleSubscription: () =>
    set((state) => ({ isSubscribed: !state.isSubscribed })),
}));
