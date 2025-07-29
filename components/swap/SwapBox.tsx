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
} from "react-native";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useState } from "react";
import { TokenItem } from "../TokenItem";
import { SwapInput } from "./SwapInput";
import { ThemedText } from "../ui/ThemedText";
import { SwapCard } from "./SwapCard";

interface SwapBoxProps extends TouchableOpacityProps {
  tokens: Token[];
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
  swapIcon: {
    marginBottom: 8,
    alignSelf: "center",
  },
  label: {
    marginBottom: 8,
  },
  modalContainer: {
    backgroundColor: "#2e2e2e",
    marginTop: 48,
    paddingTop: 8,
  },
  tokenItem: { padding: 16 },
});

export const SwapBox = ({ style, tokens, ...props }: SwapBoxProps) => {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [fromAmount, setFromAmount] = useState(10);
  const [toAmount, setToAmount] = useState(0);
  const [showTokenModal, setShowTokenModal] = useState<"from" | "to" | null>(
    null
  );

  const selectToken = (type: "from" | "to") => {
    setShowTokenModal(type);
  };

  const handleSwap = () => {
    // Call your onSwap handler here
    console.log(`Swap ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`);
  };
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <SwapCard
        direction="from"
        onPress={() => selectToken("from")}
        token={fromToken}
      />
      <MaterialIcons
        style={styles.swapIcon}
        name="swap-vertical-circle"
        size={36}
        color="#2AF598"
      />
      <SwapCard
        direction="to"
        onPress={() => selectToken("to")}
        token={toToken}
      />
      <Card
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <ThemedText style={styles.label} type="small" color="muted">
            You Pay:{" "}
          </ThemedText>
          <TokenItem onPress={() => selectToken("from")} token={fromToken} />
        </View>
        <View style={{ marginTop: "auto" }}>
          <SwapInput value={fromAmount.toString()} />
          <ThemedText style={{ marginLeft: "auto" }} type="small" color="muted">
            $100
          </ThemedText>
        </View>
      </Card>

      <Card>
        <View>
          <ThemedText style={styles.label} type="small" color="muted">
            You Receive:{" "}
          </ThemedText>
          <TokenItem onPress={() => selectToken("to")} token={toToken} />
        </View>
        <View style={{ marginTop: "auto" }}>
          <SwapInput value={toAmount.toString()} />
          <ThemedText style={{ marginLeft: "auto" }} type="small" color="muted">
            $100
          </ThemedText>
        </View>
      </Card>
      <Button title={"Swap"} onPress={handleSwap} />

      <Modal
        visible={!!showTokenModal}
        animationType="slide"
        style={{ marginTop: 16 }}
      >
        <ScrollView style={styles.modalContainer}>
          {tokens.map((token) => (
            <TokenItem
              asListItem
              key={token.address}
              style={styles.tokenItem}
              onPress={() => {
                if (showTokenModal === "from") {
                  setFromToken(token);
                } else if (showTokenModal === "to") {
                  setToToken(token);
                }
                setShowTokenModal(null);
              }}
              token={token}
            />
          ))}
        </ScrollView>
      </Modal>
    </View>
  );
};
