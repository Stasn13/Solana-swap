import { TextInput, type TextInputProps, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    fontSize: 36,
    color: "#fff",
    backgroundColor: "#2e2e2e",
    borderRadius: 12,
    // padding: 16,
  },
});

export const SwapInput = ({ style, ...props }: TextInputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder="Amount"
      keyboardType="numeric"
      {...props}
    />
  );
};
