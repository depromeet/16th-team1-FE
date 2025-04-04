import AuthProfileDropdownMenu from './auth-profile-dropdown-menu';
import FallbackBoundary from '../../fallback-boundary/fallback-boundary';

function AuthProfileMenu() {
  return (
    <FallbackBoundary>
      <AuthProfileDropdownMenu />
    </FallbackBoundary>
  );
}

export default AuthProfileMenu;
