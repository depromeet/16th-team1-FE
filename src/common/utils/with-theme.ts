import { css, Theme, useTheme } from '@emotion/react';

/**
 * theme을 자동으로 주입하는 유틸 함수
 *
 * Emotion의 css 리터럴 템플릿에서는 theme 타입 추론이 되지 않으므로,
 * 해당 함수를 통해 theme을 전달하여 타입을 올바르게 추론할 수 있도록 함.
 */
export const withTheme =
  <T extends unknown[]>(styleFn: (theme: Theme, ...args: T) => ReturnType<typeof css>) =>
  (...args: T) => {
    const theme = useTheme();
    return styleFn(theme, ...args);
  };

/**
 * 사용법
 *
 * ❕ 기본 사용
 * `withTheme`을 사용하여 스타일 함수에서 theme을 자동으로 사용할 수 있습니다.
 *
 * export const orderListText = withTheme((theme) => css`
 *   ${theme.fonts.BODY.BODY1_B};
 *   color: black;
 * `);
 *
 * <ol css={styles.orderListText}></ol>
 *
 * --------------------------------
 *
 * ❕ 매개변수 전달
 * 추가적인 스타일 값을 함께 전달할 수도 있습니다.
 *
 * export const orderListText = withTheme((theme, color: string) => css`
 *   ${theme.fonts.BODY.BODY1_B};
 *   color: ${color};
 * `);
 *
 * <ol css={styles.orderListText('#000')}></ol>
 *
 * --------------------------------
 *
 * ❕ 여러 개의 매개변수 전달
 * 여러 개의 값을 전달해야 할 경우, 추가 인자를 사용할 수 있습니다.
 *
 * export const customBox = withTheme((theme, bgColor: string, padding: string) => css`
 *   background-color: ${bgColor};
 *   padding: ${padding};
 *   border-radius: ${theme.borderRadius};
 * `);
 *
 * <div css={styles.customBox('blue', '1rem')}></div>
 */
