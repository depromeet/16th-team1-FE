export const deviceWidth = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1100px',
} as const;

export type DeviceWidthTypes = typeof deviceWidth;
