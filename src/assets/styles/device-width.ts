export const deviceWidth = {
  tablet: '768px',
  desktop: '1100px',
} as const;

export const mediaQueries = {
  mobile: `@media (width < ${deviceWidth.tablet})`,
  tablet: `@media (width >= ${deviceWidth.tablet}) and (width < ${deviceWidth.desktop})`,
  mobileAndTablet: `@media (width < ${deviceWidth.desktop})`,
  tabletAndDesktop: `@media (width >= ${deviceWidth.tablet})`,
  desktop: `@media (width >= ${deviceWidth.desktop})`,
};

export type DeviceWidthTypes = typeof deviceWidth;
