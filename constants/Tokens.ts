import { Token } from "@/types/Token.type";

export const tokens: Token[] = [
  {
    chainId: 101,
    address: "So11111111111111111111111111111111111111111",
    symbol: "SOL",
    name: "Wrapped SOL",
    priceUSD: 150,
    decimals: 9,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    extensions: {
      coingeckoId: "solana",
    },
    tags: ["solana", "native"],
  },
  {
    chainId: 101,
    address: "3SghkPdBSrpF9bzdAy5LwR4nGgFbqNcC6ZSq8vtZdj91",
    symbol: "EV1",
    name: "EveryOne Coin",
    priceUSD: 0.0001,
    decimals: 9,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3SghkPdBSrpF9bzdAy5LwR4nGgFbqNcC6ZSq8vtZdj91/logo.png",
    tags: ["currency"],
    extensions: {
      facebook: "https://facebook.com/everyonecoin",
      twitter: "https://twitter.com/everyonecoin",
      website: "https://everyonecoin.com/",
    },
  },
  {
    chainId: 101,
    address: "NGK3iHqqQkyRZUj4uhJDQqEyKKcZ7mdawWpqwMffM3s",
    symbol: "YAKU",
    name: "Yaku",
    priceUSD: 0.003,
    decimals: 0,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EK58dp4mxsKwwuySWQW826i3fwcvUK69jPph22VUcd2H/logo.png",
    tags: ["utility-token"],
    extensions: {
      coingeckoId: "yaku",
    },
  },
  {
    chainId: 101,
    address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    symbol: "USDC",
    name: "USD Coin",
    priceUSD: 0.98,
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    tags: ["stablecoin"],
    extensions: {
      coingeckoId: "usd-coin",
      serumV3Usdt: "77quYg4MGneUdjgXCunt9GgM1usmrxKY31twEy3WHwcS",
      website: "https://www.centre.io/",
    },
  },
  {
    chainId: 101,
    address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    priceUSD: 0.98,
    logoURI:
      "https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Cryptocurrency-Tether-Usdt-Logo-BNW-Graphics-13393964-1-1-580x435.jpg",
    tags: ["stablecoin"],
    extensions: {
      coingeckoId: "tether",
      serumV3Usdc: "77quYg4MGneUdjgXCunt9GgM1usmrxKY31twEy3WHwcS",
      website: "https://tether.to/",
    },
  },
  {
    chainId: 101,
    address: "FVsXUnbhifqJ4LiXQEbpUtXVdB8T5ADLKqSs5t1oc54F",
    symbol: "wUSDC",
    name: "USD Coin",
    decimals: 6,
    priceUSD: 0.99,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FVsXUnbhifqJ4LiXQEbpUtXVdB8T5ADLKqSs5t1oc54F/logo.png",
    tags: ["wrapped", "wormhole"],
    extensions: {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      assetContract:
        "https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      bridgeContract:
        "https://etherscan.io/address/0xf92cD566Ea4864356C5491c177A430C222d7e678",
      coingeckoId: "usd-coin",
    },
  },
  {
    chainId: 101,
    address: "HCXXtXPasqcF4BVsrPQPfHMQPUofoCbDbjsTUANFSHDR",
    symbol: "MONKE",
    name: "MONKE TOKEN",
    decimals: 9,
    priceUSD: 0.0003,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HCXXtXPasqcF4BVsrPQPfHMQPUofoCbDbjsTUANFSHDR/logo.png",
    tags: ["community-token", "meme-token"],
    extensions: {
      website: "https://monketoken.xyz/",
    },
  },
  {
    chainId: 101,
    address: "7gfwZiMD3B6hJWxejr4E3PdsfyVndfuGuk97LfDhJNNh",
    symbol: "DIBU",
    name: "DickButt",
    decimals: 9,
    priceUSD: 0.072,
    logoURI: "https://cdn.jsdelivr.net/gh/xRoBBeRT/DickButtLogo/DickButt.png",
    tags: [
      "community-token",
      "meme-token"
    ],
    extensions: {
      discord: "https://discord.com/invite/solanadickbutt",
      twitter: "https://twitter.com/SolanaDickButt",
      website: "https://solanadickbutt.com"
    }
  },
  {
    chainId: 101,
    address: "6JdcMdhqgCtcP4U9tieRqmKLhPLxRMLC67QfmdXAJBvZ",
    symbol: "KITTY",
    name: "KITTY SOLANA",
    decimals: 6,
    priceUSD: 1.09,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6JdcMdhqgCtcP4U9tieRqmKLhPLxRMLC67QfmdXAJBvZ/logo.png",
    tags: ["meme-token"],
    extensions: {
      coingeckoId: "kitty-solana",
      coinmarketcap: "https://coinmarketcap.com/currencies/kitty-solana/",
      discord: "https://discord.gg/XaRfbtsscz",
      serumV3Usdc: "8bjQ8XvzrDxKxHhTccpLkqGLbBrCAAPuv6KHrgN95nDW",
      twitter: "https://twitter.com/kitty_solana",
      website: "https://kittysolana.com/"
    }
  },
  {
    chainId: 101,
    address: "HDiA4quoMibAGeJQzvxajp3Z9cvnkNng99oVrnuNj6px",
    symbol: "KSAMO",
    name: "KING SAMO",
    decimals: 6,
    priceUSD: 18.7,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HDiA4quoMibAGeJQzvxajp3Z9cvnkNng99oVrnuNj6px/logo.png",
    tags: [
      "meme-token"
    ],
    extensions: {
      discord: "https://discord.com/invite/R8QhkNHn",
      telegram: "https://t.me/TokenKingSamo",
      twitter: "https://twitter.com/kingsamocoin",
      website: "https://kingsamo.com"
    }
  },
  {
    chainId: 101,
    address: "73YQDsoPB3t5n5GqX53tKrwJK1n6HCZ935MEbo2gEYU5",
    symbol: "KAJAME",
    name: "Kajame",
    decimals: 4,
    priceUSD: 0.1,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/73YQDsoPB3t5n5GqX53tKrwJK1n6HCZ935MEbo2gEYU5/logo.png",
    tags: [
      "meme-token",
      "social-token",
      "community-token"
    ],
    extensions: {
      blog: "https://blog.me-idea.in.th",
      website: "https://kajame.xyz"
    }
  },
  {
    chainId: 101,
    address: "DJKX1cX2SPPaTdYBeuriUeQUUEpi2UGBGGPQthNMrgaa",
    symbol: "MONKE",
    name: "MONKE TOKEN",
    decimals: 9,
    priceUSD: 4.1,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DJKX1cX2SPPaTdYBeuriUeQUUEpi2UGBGGPQthNMrgaa/logo.png",
    tags: [
      "community-token",
      "meme-token"
    ],
    extensions: {
      website: "https://monketoken.xyz/"
    }
  },
];
