import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';

import Projects from './projects';
import { projectsData } from '../../common/data';

import * as styles from './projects-wrapper.styles';

import type { Swiper as SwiperType } from 'swiper/types';

export default function ProjectsWrapper() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const swiperRef = useRef<SwiperType>();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const totalWidth = container.current?.offsetWidth || 0;

    gsap.to('#project-section-wrapper', {
      scrollTrigger: {
        trigger: '#project-section',
        pin: true,
        start: 'center center',
        scrub: 1,
        toggleActions: 'play pause reverse pause',
        end: () => '+=' + totalWidth * 4,
        onUpdate: (update) => {
          const progress = update.progress * 100;
          const swiper = swiperRef.current;

          // 첫 번째 슬라이더 영역일 때
          if (progress < 25) {
            // 첫 번째 슬라이더가 아닌 다른 슬라이더라면
            // slideTo 중복 호출 방지를 위한 조건
            if (swiper?.realIndex !== 0) {
              swiper?.slideTo(0);
            }

            return;
          }
          if (25 <= progress && progress < 50) {
            if (swiper?.realIndex !== 1) {
              swiper?.slideTo(1);
            }

            return;
          }
          if (50 <= progress && progress < 75) {
            if (swiper?.realIndex !== 2) {
              swiper?.slideTo(2);
            }

            return;
          }
          if (progress >= 75) {
            if (swiper?.realIndex !== 3) {
              swiper?.slideTo(3);
            }

            return;
          }
        },
      },
    });
  });

  return (
    <div
      style={{
        width: '100%',
        height: 'fit-content',
      }}
    >
      <div ref={container} id="projects-container" css={styles.projectScrollContainer}>
        <FadeInWrapper
          additionalStyles={styles.projectContainer}
          intersectionOptions={{
            threshold: 0.3,
            triggerOnce: true,
          }}
        >
          <Swiper slidesPerView={1} onSwiper={(swiper) => (swiperRef.current = swiper)}>
            {projectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <Projects
                  imageUrl={project.image}
                  feedbackType={project.feedbackType}
                  feedbackDescription={project.feedbackDescription}
                  process={project.process}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInWrapper>
      </div>
    </div>
  );
}
