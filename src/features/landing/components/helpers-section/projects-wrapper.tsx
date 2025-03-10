import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Projects from './projects';
import { projectsData } from '../../common/data';

import * as styles from './projects-wrapper.styles';

import type { Swiper as SwiperType } from 'swiper/types';

export default function ProjectsWrapper() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const swiperRef = useRef<SwiperType>();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const totalWidth = container.current?.offsetWidth || 0;

      gsap.fromTo(
        container.current,
        { x: 0 },
        {
          scrollTrigger: {
            trigger: container.current,
            start: 'center center',
            pin: document.querySelector('#landing-container'),
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
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <div css={styles.projectContainer}>
      <div ref={container} className="test" css={styles.projectScrollContainer}>
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
      </div>
    </div>
  );
}
