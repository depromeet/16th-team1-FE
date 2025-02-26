export const sizeToken = {
  padding: {
    xs_1: '0.4rem',
    xs_2: '0.7rem',
    s_1: '0.8rem',
    s_2: '1.2rem',
    sm_1: '1.4rem',
    sm_2: '1.6rem',
    md_1: '2rem',
    md_2: '2.4rem',
    lg_1: '3.2rem',
  },
  fontSize: {
    xs_1: '1.4rem',
    s_1: '1.6rem',
  },
  borderRadius: {
    xs_1: '0.8rem',
  },
  lineHeight: {
    xs_1: '127%',
  },
  gap: {
    xs_1: '0.4rem',
  },
} as const;

export type SizeTypes = typeof sizeToken;
