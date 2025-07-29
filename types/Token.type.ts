interface TokenExtensions {
  coingeckoId?: string;
  coinmarketcap?: string;
  serumV3Usdt?: string;
  serumV3Usdc?: string;
  discord?: string;
  telegram?: string;
  blog?: string;
  website?: string;
  facebook?: string;
  twitter?: string;
  address?: string;
  assetContract?: string;
  bridgeContract?: string;
}

export interface Token {
  chainId: number;
  address: string;
  symbol: string;
  name: string;
  priceUSD: number;
  decimals: number;
  logoURI: string;
  tags: string[];
  extensions: TokenExtensions;
}