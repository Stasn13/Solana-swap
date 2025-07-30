/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    accent: '#2AF598',
    text: '#fdf8f4',
    lightText: '#d3d3d3',
    muted: '#888888',
    background: '#0f0f0f',
    modalBackground: '#2e2e2e',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    accent: '#2AF598',
    text: '#b3b3b3',
    lightText: '#d3d3d3',
    muted: '#888888',
    background: '#0f0f0f',
    modalBackground: '#2e2e2e',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
