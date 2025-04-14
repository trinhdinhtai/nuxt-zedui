import { pick } from './runtime/utils';

export const defaultOptions = {
  prefix: 'Z',
  fonts: true,
};

export const getDefaultUiConfig = (colors?: string[]) => ({
  colors: pick(
    {
      primary: 'green',
      secondary: 'blue',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate',
    },
    [...(colors || []), 'neutral' as any]
  ),
});
