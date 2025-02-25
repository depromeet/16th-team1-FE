// TODO: 색상값 colors.ts에서 가져오기
// TODO: 폰트 사이즈 수정하기

export const sizes = {
  normal: {
    small: {
      padding: '0.7rem 1.6rem',
      fontSize: '1.4rem',
      borderRadius: '0.8rem',
    },
    medium: {
      padding: '1.2rem 2.4rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
    },
    large: {
      padding: '1.6rem 3.2rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
    },
  },
  iconOnly: {
    small: {
      padding: '0.8rem',
      borderRadius: '0.8rem',
    },
    medium: {
      padding: '1.2rem',
      borderRadius: '0.8rem',
    },
    large: {
      padding: '1.4rem',
      borderRadius: '0.8rem',
    },
  },
};

export const variants = {
  purlple: {
    default: {
      background: '#D7ADFE',
      color: '#2C2C36',
    },
    hover: {
      background: '#E3C6FF',
      color: '#2C2C36',
    },
    pressed: {
      background: '#E3C6FF',
      color: '#2C2C36',
    },
    disabled: {
      background: '#C194EA',
      color: '#62626D',
    },
  },
  sora: {
    default: {
      background: '#AEE8FF',
      color: '#2C2C36',
    },
    hover: {
      background: '#C8EFFF',
      color: '#2C2C36',
    },
    pressed: {
      background: '#76BAD5',
      color: '#2C2C36',
    },
    disabled: {
      background: '#76BAD5',
      color: '#62626D',
    },
  },
};

// 각 카테고리별 사이즈 키
export type Usage = keyof typeof sizes;
export type Size = keyof (typeof sizes)['normal'];
export type ButtonVariant = keyof typeof variants;
