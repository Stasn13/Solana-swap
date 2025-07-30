import { Token } from "@/types/Token.type";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import {
  TouchableOpacity,
  type TouchableOpacityProps,
  Image,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { ThemedText } from "./ui/ThemedText";

interface TokenProps extends TouchableOpacityProps {
  token: Token;
  asListItem?: boolean;
  asFavorite?: boolean;
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 8,
  },
  tokenImage: {
    borderRadius: 12,
    width: 36,
    height: 36,
  },
  rightItem: {
    marginLeft: "auto",
  },
});

export const TokenItem = ({
  style,
  token,
  asListItem = false,
  asFavorite = false,
  ...props
}: TokenProps) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} {...props}>
      <Image
        source={{
          uri: token.logoURI,
        }}
        style={styles.tokenImage}
      />
      <View style={{ flexDirection: "column" }}>
        <ThemedText color="primary">{token.symbol}</ThemedText>
        <ThemedText type="small" color="secondary">
          {token.name}
        </ThemedText>
      </View>
      {asListItem && (
        <Text style={[styles.rightItem, { color: "#fff" }]}>
          ${token.priceUSD}
        </Text>
      )}
      {asFavorite && (
        <MaterialIcons
          name="favorite-border"
          size={24}
          color="#2AF598"
          style={styles.rightItem}
        />
      )}
    </TouchableOpacity>
  );
};
