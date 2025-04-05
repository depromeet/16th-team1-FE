import ProfileDropdown from './profile-dropdown';
import FallbackBoundary from '../../fallback-boundary/fallback-boundary';

function ProfileMenu() {
  return (
    <FallbackBoundary>
      <ProfileDropdown />
    </FallbackBoundary>
  );
}

export default ProfileMenu;
