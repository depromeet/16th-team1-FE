import { Global } from '@emotion/react';

import { Button } from './common/components/button';
import { KakaoAuthButton } from './common/components/kakaoauthbutton';
import { globalStyles } from './styles/globalStyles';

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      {/* 기본 디폴트 테마 사용 */}
      <Button>Default</Button>

      {/* 디자인 시스템 테마 주입 */}
      <Button variant="destructive" size="sm">
        Small + Destructive
      </Button>

      {/* 디자인 시스템 테마 & asChild에 따른 Slot 사용 */}
      <Button variant="link" asChild>
        <a href="https://example.com" target="_blank" rel="noreferrer">
          External Link
        </a>
      </Button>

      {/* 내부적으로 고정된 버튼 스타일 및 이벤트 사용 */}
      <KakaoAuthButton>카카오 로그인</KakaoAuthButton>
    </div>
  );
}

export default App;
