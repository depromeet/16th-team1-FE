import { SidebarListType } from '../types/sidebarInfoTypes';

/* 도메인 데이터를 AccordionMenu 포맷으로 변환하는 어댑터 함수 **/
export function adaptToAccordionFormat(sidebarList: SidebarListType) {
  return sidebarList.map(({ projectTitle, feedbackPages }) => ({
    menu: projectTitle,
    subMenus: feedbackPages,
  }));
}
