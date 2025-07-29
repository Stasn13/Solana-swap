import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "small";
  color?: "primary" | "secondary" | "muted";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  color,
  ...rest
}: ThemedTextProps) {
  const colorMain = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  const colorLight = useThemeColor(
    { light: lightColor, dark: darkColor },
    "lightText"
  );
  const colorMuted = useThemeColor(
    { light: lightColor, dark: darkColor },
    "muted"
  );

  return (
    <Text
      style={[
        { color: colorMain },
        color === "primary" ? { color: colorMain } : undefined,
        color === "secondary" ? { color: colorLight } : undefined,
        color === "muted" ? { color: colorMuted } : undefined,
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "small" ? styles.small : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 20,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
