import { View, type ViewProps, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2e2e2e",
    borderRadius: 12,
    padding: 16,
  },
});

export const Card = ({ style, ...props }: ViewProps) => {
  return <View style={[styles.card, style]} {...props} />;
};
