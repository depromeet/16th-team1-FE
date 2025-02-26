import { ReactNode } from 'react';

export type ProjectTitle = string;
export type FeedbackPages = string[];

export type SidebarListType = {
  projectTitle: ProjectTitle;
  feedbackPages: FeedbackPages;
}[];

export type RenderTriggerType = (accordionTrigger: string) => ReactNode;
export type RenderContentType = (currentContent: string, buttonIndex: number) => ReactNode;
