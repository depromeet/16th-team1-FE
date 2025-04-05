import { create } from 'zustand';

export type ProcessState = 'PENDING' | 'IN_PROGRESS' | 'ERROR' | 'COMPLETE' | 'IDLE';

interface FeedbackState {
  state: ProcessState;
  feedbackId?: string;
  changeState: (nextState: ProcessState, feedbackId?: string) => void;
}

export const useFeedbackStore = create<FeedbackState>((set) => ({
  state: 'IDLE',
  feedbackId: undefined,
  changeState: (nextState: ProcessState, feedbackId?: string) => {
    switch (nextState) {
      case 'COMPLETE':
        set((prev) => {
          if (prev.state !== 'COMPLETE') {
            return { state: 'COMPLETE', feedbackId: undefined };
          }
          return prev;
        });
        break;
      case 'IN_PROGRESS':
        set((prev) => {
          if (prev.state !== 'IN_PROGRESS') {
            return { state: 'IN_PROGRESS', feedbackId };
          }
          return prev;
        });
        break;
      case 'ERROR':
        set((prev) => {
          if (prev.state !== 'ERROR') {
            return { state: 'ERROR', feedbackId };
          }
          return prev;
        });
        break;
      case 'PENDING':
        set((prev) => {
          if (prev.state !== 'PENDING') {
            return { state: 'PENDING', feedbackId };
          }
          return prev;
        });
        break;
      default:
        set({ state: 'IDLE', feedbackId: undefined });
        break;
    }
  },
}));
