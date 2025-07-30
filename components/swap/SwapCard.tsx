import { Token } from "@/types/Token.type";
import { View, StyleSheet, ViewProps } from "react-native";
import { Card } from "../ui/Card";
import { TokenItem } from "../TokenItem";
import { SwapInput } from "./SwapInput";
import { ThemedText } from "../ui/ThemedText";

interface SwapCardProps extends ViewProps {
  direction: "to" | "from";
  onPress: () => void;
  token: Token;
  onChangeAmount: (amount: string) => void;
  amount: string;
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    marginBottom: 8,
  },
});

export const SwapCard = ({
  style,
  direction,
  onPress,
  token,
  onChangeAmount,
  amount,
  ...props
}: SwapCardProps) => {
  const handleAmountChange = (amount: string) => {
    onChangeAmount(amount);
  };

  return (
    <Card style={[styles.wrapper, style]} {...props}>
      <View>
        <ThemedText style={styles.label} type="small" color="muted">
          {direction === "from" ? "You Pay:" : "You Receive:"}
        </ThemedText>
        <TokenItem onPress={onPress} token={token} />
      </View>
      <View style={{ marginTop: "auto" }}>
        <SwapInput value={amount} onChangeText={handleAmountChange} />
        <ThemedText style={{ marginLeft: "auto" }} type="small" color="muted">
          ${Number(amount) * token.priceUSD}
        </ThemedText>
      </View>
    </Card>
  );
};
