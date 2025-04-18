// import improvement01 from '@assets/images/improvement-01.png';
// import improvement02 from '@assets/images/improvement-02.png';
// import improvement03 from '@assets/images/improvement-03.png';
// import improvement04 from '@assets/images/improvement-04.png';
// import improvement05 from '@assets/images/improvement-05.png';
// import project01 from '@assets/images/project-01.png';
// import project02 from '@assets/images/project-02.png';
// import project03 from '@assets/images/project-03.png';
// import project04 from '@assets/images/project-04.png';
// import stepCard01 from '@assets/images/step-card-01.png';
// import stepCard02 from '@assets/images/step-card-02.png';

export const faqData = [
  {
    question: '포트폴리오가 유출될 위험은 없나요?',
    answer:
      '업로드된 포트폴리오는 철저히 보안이 유지되며, 외부에 공개되지 않습니다. 모든 데이터는 AI 분석을 위한 용도로만 사용되며, 일정 기간이 지나면 자동 삭제됩니다. 또한, 원하시는 경우 언제든지 직접 데이터를 삭제할 수 있도록 설정되어 있으니 안심하고 이용하셔도 됩니다.',
  },
  {
    question: 'AI 피드백을 얼마나 신뢰할 수 있나요?',
    answer:
      'AI 피드백은 다양한 디자인 원칙과 사례를 기반으로 분석하여 제공됩니다. 하지만 최종적으로 중요한 것은 사용자의 판단입니다. AI의 의견을 참고하되, 자신의 디자인 방향과 맥락을 고려하여 피드백을 활용하는 것이 가장 좋습니다.',
  },
  {
    question: '평생 무료인가요? 유료 전환 가능성이 있나요?',
    answer:
      '현재 서비스는 일정 횟수 내에서 무료로 제공되며, 이용자분들이 편리하게 사용할 수 있도록 운영되고 있습니다. 하지만 내부적으로 지속적인 운영 및 유지보수에 따른 비용이 발생하고 있어, 향후 유료 전환이 예정되어 있습니다. 정확한 시점과 세부 사항은 추후 공지될 예정이니, 지속적으로 안내드리겠습니다.',
  },
  {
    question: '피드백 횟수에 제한이 있나요?',
    answer:
      '기본적으로 일정 횟수까지는 무료로 피드백을 받을 수 있으며, 추가적인 피드백이 필요하신 경우 일정 조건을 충족하면 무료 횟수가 충전됩니다. 향후 유료 플랜도 도입될 예정이며, 세부 사항은 추후 공지드리겠습니다.',
  },
  {
    question: '피드백 리포트를 다시 확인할 수 있나요?',
    answer: '네, 피드백 히스토리에서 이전에 받은 AI 리포트를 언제든지 다시 확인할 수 있습니다.',
  },
];

export const questionData = [
  {
    question: '포트폴리오 기반으로\n예상 면접 질문이 궁금해요',
    description: '면접을 앞두고 있는데,\n어떤 질문이 나올지 모르겠네요.\n예상 질문을 뽑고 싶어요.',
    author: '취업준비생 윤00님',
  },
  {
    question: '제 포트폴리오가\n직무와 핏한지 모르겠어요',
    description:
      '프로덕트 디자이너로 지원하는데,\n포트폴리오의 내용이 실제 업무와\n유사한지 판단하기 어려워요.',
    author: '취업준비생 서00님',
  },
  {
    question: '포트폴리오가 처음인데\n시작하는 게 너무 막막해요',
    description:
      '포트폴리오를 처음 만들고 있는데\n구성이나 레이아웃, 흐름 등\n모든 게 막막하고 어려워요.',
    author: '취업준비생 김00님',
  },
];

export const stepData = [
  {
    step: '01',
    text: '내 포트폴리오를\nPDF로 업로드하면,',
    image: 'step-card-01',
    aspectRatio: 704.0 / 299.53,
    width: 70.4,
  },
  {
    step: '02',
    text: 'AI가 세부 항목까지\n구체적으로 피드백해줘요',
    image: 'step-card-02',
    aspectRatio: 616.0 / 309.34,
    width: 61.6,
  },
];

export const detailImprovementData = [
  {
    title: '번역체 표현 수정',
    cardTitle: '번역체/어색한 표현',
    image: 'improvement-01',
    originalText: '문제에 예민하지 않은 경우가 많으며, 직접적인 불만을 표출하는 경우도 있음',
    revisedText: '문제에 크게 신경 쓰지 않는 경우도 있지만, 직접적으로 불만을 제기하는 손님도 있음',
  },
  {
    title: '가독성 개선',
    image: 'improvement-02',
    originalText: '쿠폰 적립 시간이 지연되자, 해삭 서비스에 대한 불만이 접수되기 시작',
    revisedText: '쿠폰 적립이 지연되면서 서비스 불만 접수가 증가',
  },
  {
    title: '불필요한 반복 제거',
    image: 'improvement-03',
    originalText: '회원 정보, 쿠폰 적립, 회원 삭제, 회원 정보 수정, 쿠폰 사용',
    revisedText: '회원 관리(등록, 수정, 삭제), 쿠폰 관리(적립, 사용)',
  },
  {
    title: '논리적 비약 보완',
    image: 'improvement-04',
    originalText:
      '기존 적립 과정과 유사한 디지털 쿠폰"이라는 표현은 디지털 환경에서 사용자가 오프라인 쿠폰과 동일한 경험을 하도록 설계했다는 의미로 보이지만, 디지털 시스템이 오프라인보다 효율적이어야 한다는 점을 고려하면 다소 모순적일 수 있음.',
    revisedText:
      '기존 적립 방식을 그대로 따르는 것이 아니라, 디지털 환경에서 어떻게 개선되었는지를 명확히 설명하는 것이 중요함.',
  },
  {
    title: '맞춤법 수정',
    image: 'improvement-05',
    originalText: "직원용 노트북 ‘화면서도' 사용할 수 있도록 ‘반은형' 웹을 고려해 제작했습니다",
    revisedText: '직원용 노트북 화면에서도 사용할 수 있도록 반응형 웹을 고려해 제작했습니다.',
  },
];

export const projectsData = [
  {
    image: 'project-01',
    feedbackType: '문제정의',
    process: 'SOSO',
    feedbackDescription:
      '문제 정의가 포함되어 있지만, 근거가 부족해요. 데이터를 활용해 설득력을 높일 필요가 있어요.',
  },
  {
    image: 'project-02',
    feedbackType: '가설',
    process: 'GOOD',
    feedbackDescription:
      '가설이 명확하고 설득력 있어요. 문제와 자연스럽게 연결돼서 이해하기 쉬워요.',
  },
  {
    image: 'project-03',
    feedbackType: '결과',
    process: 'GOOD',
    feedbackDescription:
      '데이터를 기반으로 기존 가설을 검증한 결과가 돋보여요. 실제 사용자 반응까지 포함돼 있어서 결과의 신뢰도가 높아요.',
  },
  {
    image: 'project-04',
    feedbackType: '회고',
    process: 'BAD',
    feedbackDescription:
      '프로젝트 마무리에 대한 정리가 아쉬워요. 프로젝트 과정에서 겪은 시행착오나 배운 점이 정리되면 좋겠어요.',
  },
];
