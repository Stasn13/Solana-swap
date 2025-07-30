import { Token } from "@/types/Token.type";
import {
  type TouchableOpacityProps,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Button } from "../ui/Button";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useCallback, useState } from "react";
import { TokenItem } from "../TokenItem";
import { SwapCard } from "./SwapCard";

interface SwapBoxProps extends TouchableOpacityProps {
  tokens: Token[];
}

const styles = StyleSheet.create({
  wrapper: {},
  swapIcon: {
    marginVertical: -12,
    alignSelf: "center",
    zIndex: 1,
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

const CONVERSION_RATE = 150;

export const SwapBox = ({ style, tokens, ...props }: SwapBoxProps) => {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [showTokenModal, setShowTokenModal] = useState<"from" | "to" | null>(
    null
  );

  const selectToken = (type: "from" | "to") => {
    setShowTokenModal(type);
  };

  const handleSwap = () => {
    console.log(`Swap ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`);
  };

  const onPress = useCallback(
    (token: Token) => {
      if (showTokenModal === "from") {
        setFromToken(token);
      } else if (showTokenModal === "to") {
        setToToken(token);
      }
      setShowTokenModal(null);
    },
    [showTokenModal]
  );

  const handleFromAmountChange = useCallback((amount: string) => {
    setFromAmount(amount);
    if (amount) {
      setToAmount(String(Number(amount) * CONVERSION_RATE));
    } else {
      setToAmount("");
    }
  }, []);

  const handleToAmountChange = useCallback((amount: string) => {
    setToAmount(amount);
    if (amount) {
      setFromAmount(String((Number(amount) / CONVERSION_RATE).toFixed(6)));
    } else {
      setFromAmount("");
    }
  }, []);

  return (
    <Animated.View
      style={[styles.wrapper, style]}
      entering={FadeInUp}
      {...props}
    >
      <SwapCard
        direction="from"
        onPress={() => selectToken("from")}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
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
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
        token={toToken}
      />

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
              onPress={() => onPress(token)}
              token={token}
            />
          ))}
        </ScrollView>
      </Modal>
    </Animated.View>
  );
};
