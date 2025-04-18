import { useState, useEffect } from 'react';

type DeviceState = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export default function useDeviceType() {
  const [deviceState, setDeviceState] = useState<DeviceState>(() => {
    const width = window.innerWidth;
    return {
      isMobile: width <= 767,
      isTablet: width > 767 && width <= 1009,
      isDesktop: width > 1009,
    };
  });

  const handleResize = () => {
    const isMobile = window.innerWidth <= 767;
    const isTablet = window.innerWidth > 767 && window.innerWidth <= 1009;
    const isDesktop = window.innerWidth > 1009;

    setDeviceState({ isMobile, isTablet, isDesktop });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceState;
}
