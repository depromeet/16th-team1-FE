export const deviceWidth = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1100px',
} as const;

export const mediaQueries = {
  mobile: `@media (width <= ${deviceWidth.mobile})`,
  tablet: `@media (width > ${deviceWidth.mobile}) and (width <= ${deviceWidth.tablet})`,
  mobileAndTablet: `@media (width <= ${deviceWidth.tablet})`,
  desktop: `@media (width > ${deviceWidth.tablet})`,
};

export type DeviceWidthTypes = typeof deviceWidth;
