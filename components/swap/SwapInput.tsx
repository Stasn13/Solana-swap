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

export const SwapInput = ({
  style,
  onChangeText,
  value,
  ...props
}: TextInputProps) => {
  const caretColor = useThemeColor({}, "accent");
  const placeholderColor = useThemeColor({}, "muted");

  /**
   * Current approach prevent user of using non-numeric characters on copy+paste amount
   */
  const handleTextChange = (text: string) => {
    // Allow only numbers and a single decimal point
    const regex = /^\d*\.?\d*$/;

    if (text === "" || regex.test(text)) {
      // Ensure we don't have multiple decimal points
      if ((text.match(/\./g) || []).length <= 1) {
        onChangeText?.(text);
      }
    }
  };

  return (
    <TextInput
      style={[styles.input, style]}
      keyboardType="numeric"
      placeholder="0.00"
      placeholderTextColor={placeholderColor}
      selectionColor={caretColor}
      onChangeText={handleTextChange}
      value={value}
      {...props}
    />
  );
};
