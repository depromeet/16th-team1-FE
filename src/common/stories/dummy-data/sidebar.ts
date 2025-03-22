import { ProjectEvaluationType } from '@/features/feedback/services/use-get-portfolio-feedback';

export const dummyEvaluationData: ProjectEvaluationType[] = [
  {
    projectName: '프로젝트 A',
    projectSummary:
      '프로젝트 A는 UI/UX 개선을 주 목적으로 진행되었고, 트래픽이 약 20% 상승하는 효과를 얻었습니다.',
    imageUrl: 'https://i.ibb.co/78i51C4/25.png',
    negativeFeedback: [
      {
        title: '디자인 개선 필요',
        content: [
          '메인 컬러가 가독성을 떨어뜨린다는 의견이 있었습니다.',
          '피드백을 반영해 재디자인이 필요합니다.',
        ],
      },
      {
        title: '로딩 속도 지연',
        content: ['이미지 최적화가 필요합니다.', 'SSR 또는 SSG 도입을 검토하세요.'],
      },
    ],
    positiveFeedback: [
      {
        title: '네비게이션 구조 개선',
        content: [
          '사용자가 원하는 메뉴에 쉽게 접근할 수 있도록 설계되었습니다.',
          '피드백 반영이 잘 되었습니다.',
        ],
      },
      {
        title: '반응형 레이아웃',
        content: [
          '모바일, 태블릿, PC에서 모두 동일한 UX를 제공했습니다.',
          '코드 유지보수가 용이했습니다.',
        ],
      },
    ],
    process: ['GOOD', 'BAD', 'GOOD'],
    processReview: '전반적으로 진행이 원활했지만, 일부 일정 지연이 발생했습니다.',
    feedbackPerPage: [
      {
        pageNumber: '1',
        contents: [
          {
            type: 'TRANSLATION_OR_AWKWARD',
            title: '메인 배너 텍스트 수정',
            feedbackContentDetailList: [
              {
                beforeEdit: '메인 배너 텍스트 (기존)',
                afterEdit: '메인 배너 텍스트 (수정)',
              },
            ],
          },
        ],
        imageUrl: 'https://i.ibb.co/78i51C4/25.png',
      },
      {
        pageNumber: '2',
        contents: [
          {
            type: 'TRANSLATION_OR_AWKWARD',
            title: '카드 레이아웃 수정',
            feedbackContentDetailList: [
              {
                beforeEdit: '카드 레이아웃 (기존)',
                afterEdit: '카드 레이아웃 (수정)',
              },
            ],
          },
        ],
        imageUrl: 'https://i.ibb.co/78i51C4/25.png',
      },
    ],
  },
  {
    projectName: '프로젝트 B',
    projectSummary:
      '프로젝트 B는 검색 기능 고도화와 필터링 시스템을 도입하여 사용자 편의성을 높였습니다.',
    imageUrl: 'https://i.ibb.co/78i51C4/25.png',
    negativeFeedback: [
      {
        title: '검색 속도 개선 필요',
        content: ['검색 알고리즘 최적화가 필요합니다.', '인덱스 추가나 캐싱 전략을 고려해 보세요.'],
      },
    ],
    positiveFeedback: [
      {
        title: '필터링 UI',
        content: ['다양한 조건으로 빠르게 필터링할 수 있어 사용자 만족도가 높습니다.'],
      },
    ],
    process: ['SOSO', 'GOOD', 'BAD', 'GOOD'],
    processReview: '초기 기획 변경이 있었지만, 결과적으로 유연하게 대응했습니다.',
    feedbackPerPage: [
      {
        pageNumber: '3',
        contents: [
          {
            type: 'TRANSLATION_OR_AWKWARD',
            title: '검색창 플레이스홀더 수정',
            feedbackContentDetailList: [
              {
                beforeEdit: '검색창 플레이스홀더 (기존)',
                afterEdit: '검색창 플레이스홀더 (개선)',
              },
            ],
          },
        ],
        imageUrl: 'https://i.ibb.co/78i51C4/25.png',
      },
      {
        pageNumber: '4',
        contents: [
          {
            type: 'LENGTH_OR_READABILITY',
            title: '필터 옵션 설명 간결화',
            feedbackContentDetailList: [
              {
                beforeEdit: '긴 문장으로 된 필터 옵션 설명',
                afterEdit: '간결한 문장으로 된 필터 옵션 설명',
              },
            ],
          },
        ],
        imageUrl: 'https://i.ibb.co/78i51C4/25.png',
      },
    ],
  },
  {
    projectName: '프로젝트 C',
    projectSummary:
      '프로젝트 C는 신규 런칭 서비스로 사용자 피드백 기반의 MVP를 빠르게 제작하였습니다.',
    imageUrl: 'https://i.ibb.co/78i51C4/25.png',
    negativeFeedback: [
      {
        title: '도큐멘테이션 부족',
        content: [
          '개발자 간 공유 문서가 미흡합니다.',
          'Wiki나 Notion을 적극적으로 활용해야 합니다.',
        ],
      },
    ],
    positiveFeedback: [
      {
        title: '신속한 MVP 구현',
        content: [
          '짧은 기간에 주요 기능을 빠르게 출시했습니다.',
          '사용자 피드백을 실시간으로 반영했습니다.',
        ],
      },
      {
        title: '확장성 고려',
        content: ['코드 구조가 모듈화되어 추후 기능 추가가 용이합니다.'],
      },
    ],
    process: ['GOOD', 'GOOD'],
    processReview: '팀원 간 커뮤니케이션이 활발했고, 데일리 미팅으로 리스크를 조기에 파악했습니다.',
    feedbackPerPage: [
      {
        pageNumber: '5',
        contents: [
          {
            type: 'REDUNDANCY_OR_CLARITY',
            title: '중복된 코드 블록 제거',
            feedbackContentDetailList: [
              {
                beforeEdit: '중복된 코드 블록',
                afterEdit: '공통 컴포넌트 추출로 중복 제거',
              },
            ],
          },
        ],
        imageUrl: 'https://i.ibb.co/78i51C4/25.png',
      },
      {
        pageNumber: '6',
        contents: [
          {
            type: 'LOGICAL_LEAP',
            title: 'API 호출 시 에러 핸들링 추가',
            feedbackContentDetailList: [
              {
                beforeEdit: '기능 설명 없이 API 호출',
                afterEdit: 'API 호출 전후의 에러 핸들링 추가',
              },
            ],
          },
        ],
        imageUrl: 'https://i.ibb.co/78i51C4/25.png',
      },
    ],
  },
];
