const icons = import.meta.glob<{
  default: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}>('@assets/icons/*.svg', { query: '?react', eager: true });

export const iconMap = Object.fromEntries(
  Object.entries(icons).map(([path, { default: SvgComponent }]) => [
    path.split('/').pop()?.replace('.svg', ''),
    SvgComponent,
  ]),
) as Record<string, (props: React.SVGProps<SVGSVGElement>) => JSX.Element>;
