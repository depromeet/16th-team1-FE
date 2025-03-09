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
    const year = parseYear(item.date);
    const monthAndDay = parseMonthAndDay(item.date);

    if (!result[year]) {
      result[year] = [];
    }

    result[year].push({
      date: monthAndDay,
      title: item.title,
      feedbackId: item.feedbackId,
    });
  });

  return result;
};

const parseYear = (dateData: string): string => {
  const date = new Date(dateData);
  const year = date.getFullYear();
  return `${year}년`;
};

const parseMonthAndDay = (dateData: string): string => {
  const date = new Date(dateData);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${month}. ${day}.`;
};
