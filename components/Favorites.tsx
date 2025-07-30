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
    marginVertical: 8,
  },
  favoritesTitle: { marginBottom: 8 },
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
          renderItem={({ item, drag }) => (
            <TokenItem
              asFavorite
              token={item}
              onLongPress={drag}
              style={styles.favoritesItem}
            />
          )}
        />
      </Card>
    </Animated.View>
  );
};
