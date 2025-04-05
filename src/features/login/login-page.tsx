import useDeviceType from '@/common/hooks/use-device-type';

import DesktopView from './components/desktop-view';
import MobileView from './components/mobile-view';

function LoginPage() {
  const { isMobile } = useDeviceType();
  return isMobile ? <MobileView /> : <DesktopView />;
}

export default LoginPage;
