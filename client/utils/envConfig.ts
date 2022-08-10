const envConfig = {
  MAINNET: process.env.NEXT_PUBLIC_MAINNET === 'true' ? true : false,
  CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
  MINT_OVER: process.env.NEXT_PUBLIC_MINT_OVER === 'true' ? true : false,
  CONTRACT_DEPLOYED:
    process.env.NEXT_PUBLIC_CONTRACT_DEPLOYED === 'true' ? true : false,
  INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID || '',
  CONTRACT_NAME: process.env.NEXT_PUBLIC_CONTRACT_NAME || '',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  HOME_URL: process.env.NEXT_PUBLIC_HOME_URL || '',
  ALCHEMY_ID: process.env.NEXT_PUBLIC_ALCHEMY_ID || '',
}

export default envConfig
