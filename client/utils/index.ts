import { IToken } from "../graphql/Typings";

const RAY = 10 ** 27;
const SECONDS_PER_YEAR = 31536000;

export const calculateAAVE_APY_Percentage = (tokenData: IToken) => {
  const depositAPR = Number(tokenData.liquidityRate) / RAY;
  return ((1 + depositAPR / SECONDS_PER_YEAR) ^ SECONDS_PER_YEAR) - 1;
};

export const calculateAAVEReturnsGivenInput = (
  tokenData: IToken,
  UNDERLYING_TOKEN_DECIMALS: number,
  TOKEN_PRICE_ETH: number,
  REWARD_PRICE_ETH: number
) => {
  // Calculation example taken from https://docs.aave.com/developers/v/2.0/guides/apy-and-apr

  const depositAPR = Number(tokenData.liquidityRate) / RAY;
  const variableBorrowAPR = Number(tokenData.variableBorrowRate) / RAY;
  const stableBorrowAPR = Number(tokenData.variableBorrowRate) / RAY;

  const depositAPY =
    ((1 + depositAPR / SECONDS_PER_YEAR) ^ SECONDS_PER_YEAR) - 1;
  const variableBorrowAPY =
    ((1 + variableBorrowAPR / SECONDS_PER_YEAR) ^ SECONDS_PER_YEAR) - 1;
  const stableBorrowAPY =
    ((1 + stableBorrowAPR / SECONDS_PER_YEAR) ^ SECONDS_PER_YEAR) - 1;

  const aEmissionPerYear =
    Number(tokenData.aEmissionPerSecond) * SECONDS_PER_YEAR;
  const vEmissionPerYear =
    Number(tokenData.vEmissionPerSecond) * SECONDS_PER_YEAR;

  const WEI_DECIMALS = 10 ** 18;

  const incentiveDepositAPRPercent =
    (100 * (aEmissionPerYear * REWARD_PRICE_ETH * WEI_DECIMALS)) /
    (Number(tokenData.totalATokenSupply) *
      TOKEN_PRICE_ETH *
      UNDERLYING_TOKEN_DECIMALS);

  const incentiveBorrowAPRPercent =
    (100 * (vEmissionPerYear * REWARD_PRICE_ETH * WEI_DECIMALS)) /
    (Number(tokenData.totalCurrentVariableDebt) *
      TOKEN_PRICE_ETH *
      UNDERLYING_TOKEN_DECIMALS);

  return {
    incentiveDepositAPRPercent,
    incentiveBorrowAPRPercent,
  };
};
