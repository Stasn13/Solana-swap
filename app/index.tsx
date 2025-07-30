import { StyleSheet, View } from "react-native";

import React, { useState } from "react";

import { tokens } from "@/constants/Tokens";
import { SwapBox } from "@/components/swap/SwapBox";
import { Favorites } from "@/components/Favorites";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0f0f0f",
    paddingTop: 24,
  },
  swapBox: { marginBottom: 24 },
  favorites: {
    marginTop: 8,
  },
});

export default function HomeScreen() {
  const [tokensData, setTokensData] = useState(tokens);

  return (
    <View style={styles.container}>
      <SwapBox tokens={tokensData} style={styles.swapBox} />
      <Favorites
        tokensData={tokensData}
        setTokensData={setTokensData}
        style={styles.favorites}
      />
    </View>
  );
}
