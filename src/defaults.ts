import { pick } from './runtime/utils';

export const defaultOptions = {
  prefix: 'Z',
};

export const getDefaultUiConfig = (colors?: string[]) => ({
  prefix: 'Z',
  fonts: true,
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
