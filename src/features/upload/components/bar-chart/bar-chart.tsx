import * as styles from './bar-chart.styles';

interface BarChartProps {
  value: number;
}

export default function BarChart({ value }: BarChartProps) {
  return (
    <div css={styles.barChartStyle()}>
      <div css={styles.barChartBar(value)} />
    </div>
  );
}
