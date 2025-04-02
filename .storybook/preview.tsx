import React from 'react'; // React import 추가

import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { StoryFn } from '@storybook/react';

import { theme } from '../src/assets/styles/theme';
import SelectedPageContext from '../src/features/total-evaluation/components/context/selected-page/selected-page-provider';
import SidebarProvider from '../src/features/total-evaluation/components/context/sidebar/sidebar-provider';

const withSidebarContext = (Story: StoryFn) => {
  return (
    <SidebarProvider>
      <SelectedPageContext>
        <Story />
      </SelectedPageContext>
    </SidebarProvider>
  );
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
  }),
  withSidebarContext,
];
