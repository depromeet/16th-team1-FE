/** id가 지정된 요소로 스크롤하는 유틸 함수 */
import gsap from 'gsap';

import { HEADER_PLACEHOLER_HEIGHT_REM } from '../components/layout/header-navigation/header-navigation-layout.styles';

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  if (id === 'help-section') {
    const projectsContainer = document.getElementById('projects-container');
    // 기존 scrollIntoView 메서드로는 중간 가로 스크롤 영역 때문에 제대로 동작하지 않음.
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: element.offsetTop + (projectsContainer?.clientWidth || 0) * 4,
      },
    });
  }
  if (id.startsWith('feedback-')) {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: {
        y: element.offsetTop - HEADER_PLACEHOLER_HEIGHT_REM * 10,
      },
    });
  } else {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
