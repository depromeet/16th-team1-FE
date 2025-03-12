import { ReactNode } from 'react';

export type ProjectTitle = string;
export type FeedbackPages = string[];

export type SidebarListType = {
  projectTitle: ProjectTitle;
  feedbackPages: FeedbackPages;
}[];

export type RenderAccordionTriggerButtonType = (accordionTrigger: string) => ReactNode;

export type LocationButtonType = 'overallEvaluation' | 'singlePage' | 'projectEvaluation';
export type RenderAccordionContentButtonType = (
  type: LocationButtonType,
  currentContent: string,
  buttonIndex: number,
) => ReactNode;
