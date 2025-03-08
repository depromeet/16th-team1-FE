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
    const yearAndMonth = parseYearAndMonth(item.date);
    const day = parseDay(item.date);

    if (!result[yearAndMonth]) {
      result[yearAndMonth] = [];
    }

    result[yearAndMonth].push({
      date: day,
      title: item.title,
      feedbackId: item.feedbackId,
    });
  });

  return result;
};

const parseYearAndMonth = (dateData: string): string => {
  const date = new Date(dateData);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${year}.${month}`;
};

const parseDay = (dateData: string): string => {
  const date = new Date(dateData);
  return date.getDate().toString();
};
