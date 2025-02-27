import { css } from '@emotion/react';

import { iconMap } from './icon-map';
import iconPalette from './iconPalette.json';

type IconColor = keyof typeof iconPalette;

interface IconProps {
  name: string;
  width?: number;
  color?: IconColor;
  customStyle?: ReturnType<typeof css>;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export default function Icon({ name, width, color, customStyle, onClick }: IconProps) {
  const IconComponent = iconMap[name];

  // 만약 width : width 로 그냥 넣어주게 되면 width를 설정하지 않을 경우
  // undefined로 들어가서 기본으로 설정된 크기가 아닌 엄청 크게 보이는 문제가 발생해서
  // width가 있는 경우에만 prop으로 넣는 방식을 채택했습니다.
  // height같은 경우 viewBox 속성으로 인해 자동으로 비율이 조정되므로 undefined로 넣었습니다.
  return (
    <IconComponent
      {...(width ? { width: width, height: undefined } : {})}
      onClick={onClick}
      css={[
        css`
          cursor: ${onClick ? 'pointer' : 'default'};

          path {
            fill: ${color !== undefined && iconPalette[color]};
          }
        `,
        customStyle,
      ]}
    />
  );
}
