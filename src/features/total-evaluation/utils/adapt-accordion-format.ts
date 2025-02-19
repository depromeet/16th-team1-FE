import { SidebarListType } from '../types/sidebar-Info-types';

/* 도메인 데이터를 AccordionMenu 포맷으로 변환하는 어댑터 함수 **/
export const adaptToAccordionFormat = (sidebarList: SidebarListType) => {
  return sidebarList.map(({ projectTitle, feedbackPages }) => ({
    accordionTrigger: projectTitle,
    accordionContents: feedbackPages,
  }));
};
