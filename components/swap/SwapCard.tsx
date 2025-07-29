import { Token } from "@/types/Token.type";
import {
  TouchableOpacity,
  type TouchableOpacityProps,
  Image,
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  ViewProps,
} from "react-native";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useState } from "react";
import { TokenItem } from "../TokenItem";
import { SwapInput } from "./SwapInput";
import { ThemedText } from "../ui/ThemedText";

interface SwapCardProps extends ViewProps {
  direction: "to" | "from";
  onPress: () => void;
  token: Token;
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
  ...props
}: SwapCardProps) => {
  const [amount, setAmount] = useState("10");

  return (
    <Card style={[styles.wrapper, style]} {...props}>
      <View>
        <ThemedText style={styles.label} type="small" color="muted">
          {direction === "from" ? "You Pay:" : "You Receive:"}
        </ThemedText>
        <TokenItem onPress={onPress} token={token} />
      </View>
      <View style={{ marginTop: "auto" }}>
        <SwapInput value={amount} onChangeText={setAmount} />
        <ThemedText style={{ marginLeft: "auto" }} type="small" color="muted">
          ${Number(amount) * token.priceUSD}
        </ThemedText>
      </View>
    </Card>
  );
};
