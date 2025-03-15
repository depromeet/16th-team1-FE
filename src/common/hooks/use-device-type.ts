import { useState, useEffect } from 'react';

type DeviceState = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export default function useDeviceType() {
  const [deviceState, setDeviceState] = useState<DeviceState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const handleResize = () => {
    const isMobile = window.innerWidth <= 375;
    const isTablet = window.innerWidth > 375 && window.innerWidth <= 768;
    const isDesktop = window.innerWidth > 768;

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
