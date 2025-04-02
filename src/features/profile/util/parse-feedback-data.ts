import { convertDateStringToObject } from '@/common/utils/date';

interface FeedbackItem {
  feedbackId: string;
  date: string;
  title: string;
}

interface GroupedFeedback {
  [key: string]: { date: string; title: string; feedbackId: string }[];
}

export const parseFeedbackData = (feedbackData: FeedbackItem[]): GroupedFeedback => {
  const result: GroupedFeedback = {};

  feedbackData.forEach((item) => {
    const { year, month, day } = convertDateStringToObject(item.date);

    const yearForKey = `${year}년`;
    const monthAndDay = `${month}. ${day}.`;

    if (!result[yearForKey]) {
      result[yearForKey] = [];
    }

    result[yearForKey].push({
      date: monthAndDay,
      title: item.title,
      feedbackId: item.feedbackId,
    });
  });

  return result;
};
