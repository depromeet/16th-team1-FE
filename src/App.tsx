import { KakaoAuthButton } from './common/components/kakaoauthbutton';
import { BaseButton } from './common/components/systembutton';

function App() {
  return (
    <div>
      <BaseButton>Default</BaseButton>

      {/* 디자인 시스템 테마 주입 */}
      <BaseButton variant="destructive" size="sm">
        Small + Destructive
      </BaseButton>

      {/* asChild에 따른 Slot 사용 */}
      <BaseButton variant="link" asChild>
        <a href="https://example.com" target="_blank" rel="noreferrer">
          External Link
        </a>
      </BaseButton>

      {/* 내부적으로 고정된 버튼 스타일 및 이벤트 사용 */}
      <KakaoAuthButton>카카오 로그인</KakaoAuthButton>
    </div>
  );
}

export default App;
