import { TextInput, type TextInputProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

const styles = StyleSheet.create({
  input: {
    fontSize: 36,
    color: "#fff",
    backgroundColor: "#2e2e2e",
    borderRadius: 12,
    marginLeft: "auto",
    width: 180,
    textAlign: "right",
  },
});

export const SwapInput = ({ style, ...props }: TextInputProps) => {
  const caretColor = useThemeColor({}, "accent");
  return (
    <TextInput
      style={[styles.input, style]}
      keyboardType="number-pad"
      selectionColor={caretColor}
      {...props}
    />
  );
};
