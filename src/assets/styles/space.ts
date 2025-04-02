export const sizeToken = {
  padding: {
    xs_1: '0.4rem',
    xs_2: '0.6rem',
    xs_3: '0.7rem',
    s_1: '0.8rem',
    s_2: '1.2rem',
    sm_1: '1.4rem',
    sm_2: '1.6rem',
    md_1: '2rem',
    md_2: '2.2rem',
    md_3: '2.4rem',
    lg_1: '3rem',
    lg_2: '3.2rem',
  },
  fontSize: {
    xs_1: '1.4rem',
    s_1: '1.6rem',
    s_2: '1.8rem',
    sm_1: '2.0rem',
  },
  fontWeight: {
    xs_1: '600',
  },
  borderRadius: {
    xs_1: '0.6rem',
    xs_2: '0.8rem',
    s_1: '1rem',
    lg_1: '5rem',
  },
  lineHeight: {
    xs_1: '127%',
    xs_2: '140%',
    s_1: '160%',
  },
  gap: {
    xs_1: '0.4rem',
  },
} as const;

export type SizeTypes = typeof sizeToken;
