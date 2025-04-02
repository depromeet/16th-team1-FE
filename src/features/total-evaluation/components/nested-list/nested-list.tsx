import * as styles from './nested-list.style';

interface NestedListProps {
  gap?: number;
  listItems: NestedListItem[];
}

export interface NestedListItem {
  title: string;
  content?: string[];
}

export default function NestedList({ gap, listItems }: NestedListProps) {
  return (
    <div css={styles.nestedList}>
      <ol css={styles.orderedList(gap)}>
        {listItems?.map((item) => (
          <li key={item.title} css={styles.orderListText}>
            {item.title}
            {item.content && (
              <ul css={styles.unorderedList}>
                {item.content.map((desc, idx) => (
                  <li key={idx} css={styles.unorderListText}>
                    {desc}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
