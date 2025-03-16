export const deviceWidth = {
  tabelt: '768px',
  desktop: '1100px',
} as const;

export const mediaQueries = {
  mobile: `@media (width < ${deviceWidth.tabelt})`,
  tablet: `@media (width >= ${deviceWidth.tabelt}) and (width < ${deviceWidth.desktop})`,
  mobileAndTablet: `@media (width < ${deviceWidth.desktop})`,
  tabletAndDesktop: `@media (width >= ${deviceWidth.tabelt})`,
  desktop: `@media (width >= ${deviceWidth.desktop})`,
};

export type DeviceWidthTypes = typeof deviceWidth;
