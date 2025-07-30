import { Card } from "./ui/Card";
import DraggableFlatList from "react-native-draggable-flatlist";
import { TokenItem } from "./TokenItem";
import { Token } from "@/types/Token.type";
import Animated, { FadeInDown } from "react-native-reanimated";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./ui/ThemedText";

interface FavoritesProps {
  tokensData: Token[];
  setTokensData: (tokensData: Token[]) => void;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  favoritesItem: {
    marginVertical: 12,
  },
  favoritesTitle: { marginBottom: 8 },
  activeItem: {
    opacity: 0.5,
    backgroundColor: "#2e2e2e",
  },
});

export const Favorites = ({
  tokensData,
  setTokensData,
  style,
}: FavoritesProps) => {
  return (
    <Animated.View style={[style]} entering={FadeInDown}>
      <ThemedText type="subtitle" style={styles.favoritesTitle}>
        Favorite tokens:
      </ThemedText>
      <Card>
        <DraggableFlatList
          data={tokensData}
          onDragEnd={({ data }) => setTokensData(data)}
          keyExtractor={(item: Token) => item.address}
          renderItem={({ item, drag, isActive }) => (
            <TokenItem
              asFavorite
              token={item}
              onLongPress={drag}
              style={[styles.favoritesItem, isActive && styles.activeItem]}
            />
          )}
        />
      </Card>
    </Animated.View>
  );
};
