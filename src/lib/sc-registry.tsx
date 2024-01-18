'use client';
import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider
} from 'styled-components';
import { GlobalStyle } from '@/src/styles/global';
import { theme } from '@/src/styles/theme';
import Header from '../app/components/core/header';

export default function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined')
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeProvider>
    );

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
