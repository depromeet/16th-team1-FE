// import grammarImage from '@/assets/images/grammar.png';
// import logicImage from '@/assets/images/logic.png';
// import readabilityImage from '@/assets/images/readability.png';
// import redundancyImage from '@/assets/images/redundancy.png';
// import translationImage from '@/assets/images/translation.png';

export const LOADING_TITLE = {
  total: {
    title: '내 포트폴리오에 대한<br/>전체 평가를 받아볼 수 있어요',
    color: '#AEE8FF',
  },
  project: {
    title: '포트폴리오에 있는<br/>프로젝트별 평가도 제공해드려요',
    color: '#D7ADFE',
  },
  page: {
    title: '페이지별로 개선 사항에 대한<br/>구체적인 피드백까지 받아볼 수 있어요',
    color: '#74737B',
  },
};

export const LOADING_BOTTOM = {
  strength: {
    title: '강점 분석',
    color: '#76BAD5',
    content: [
      '1. 데이터 기반의 디자인 사고',
      '2. 비즈니스 마인드',
      '3. 스토리텔링이 강한 포트폴리오',
      '4. 다양한 협업 경험',
    ],
  },
  fix: {
    title: '개선할 점 및 해결방안',
    color: '#D6AA59',
    content: [
      '1. UI/UX 디자인 과정을 시각적으로 추가하기',
      '2. 사용자 리서치 방법론 보완하기',
      '3. 프로젝트별 핵심 KPI를 강조하기',
    ],
  },
  smile: {
    title: '이런 부분이 좋아요',
    color: '#76BAD5',
    content: [
      '1. 데이터 기반의 문제 해결',
      '2. 그로스 전략 적용 (Growth Hacking)',
      '3. 심플한 UX로 높은 전환율 달성',
      '4. 시즈널리티(Seasonality) 활용',
    ],
  },
  sad: {
    title: '이런 부분이 아쉬워요',
    color: '#E97950',
    content: [
      '1. 문장이 너무 길고 가독성이 낮음',
      '2. 일부 실험의 논리적 연결 부족',
      '3. UI 변화의 시각적 비교 부족',
    ],
  },
};

export const EVALUATION_OPTIONS = [
  {
    key: 'translation',
    title: '번역체/어색한 표현',
    original: '사용자마다 동일하게 나타나는 불편을 발견했습니다.',
    revised: '모든 사용자에게 공통적으로 나타나는 불편을 발견했어요.',
    image: '/images/translation.png',
  },
  {
    key: 'readability',
    title: '가독성 개선',
    original: 'Fact 데이터는 중복된 표현이며, "취합"보다는 "분석"이 더 직관적임.',
    revised: '리서치 단계 2-1: 주문 과정에 대한 객관적 데이터 분석',
    image: '/images/readability.png',
  },
  {
    key: 'redundancy',
    title: '불필요한 반복 제거',
    original:
      '"평균 30분 이상"과 "평균 45분 이상"은 패턴이 동일하게 반복됨.<br/>"평균"을 생략해도 의미 전달 가능.',
    revised: '"업체 탐색에 30분 이상 소요됨" / "디자인 수정에 45분 이상 걸림"',
    image: '/images/redundancy.png',
  },
  {
    key: 'logic',
    title: '논리적 비약 보완',
    original:
      '"더 선호했습니다"라고 결론을 내렸지만, 선호 이유가 부족함. A안의 필터 사용률이 60%인데, 이 수치가 B안의 90%와 비교해 부족한 이유를 설명해야 함.',
    revised:
      '"A/B 테스트 결과, 70%의 사용자들이 B안의 단계별 필터링 방식을 더 편리하다고 느꼈는데, 단계별 필터링이 탐색 피로도를 낮추는 데 효과적이었기 때문이다" 라는 내용이 들어간다면 효과적일 것임.',
    image: '/images/logic.png',
  },
  {
    key: 'grammar',
    title: '맞춤법 수정',
    original: '비스니스 모델을 기반으로 서비스 멥을 작성하여',
    revised: '비즈니스 모델을 기반으로 서비스 맵을 작성하여',
    image: '/images/grammar.png',
  },
];
