import * as styles from './nested-list.style';

interface NestedListProps {
  listItems: NestedListItem[];
}

interface NestedListItem {
  title: string;
  content?: string[];
}

export default function NestedList({ listItems }: NestedListProps) {
  return (
    <div css={styles.nestedList}>
      <ol css={styles.nestedListItem}>
        {listItems.map((item) => (
          <li key={item.title} css={styles.orderListText}>
            {item.title}
            {item.content && (
              <ul>
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
