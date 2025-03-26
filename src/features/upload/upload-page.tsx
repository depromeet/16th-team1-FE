import { useFeedbackStore } from '@/store/feedback';

import FeedbackLoading from './components/feedback-loading/feedback-loading';
import Upload from './components/upload/upload';

export default function UploadPage() {
  const { state } = useFeedbackStore();

  if (state === 'PENDING' || state === 'IN_PROGRESS') {
    return <FeedbackLoading />;
  }

  return <Upload />;
}
