import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_APY_AAVE } from "../../graphql/Queries";
import { IToken, ITokenAPY } from "../../graphql/Typings";
import { calculateAAVE_APY_Percentage } from "../../utils";
import styles from "./index.module.scss";

const DisplayAPY = () => {
  const { error, loading, data } = useQuery(GET_APY_AAVE, {
    context: { clientName: "aave" },
  });
  const [tokens, setTokens] = useState<ITokenAPY[]>([]);

  useEffect(() => {
    if (data) {
      const calculatedTokensWithAPY: ITokenAPY[] = [];
      const _data: IToken[] = data.reserves;
      _data.map((token) => {
        calculatedTokensWithAPY.push({
          ...token,
          apy: calculateAAVE_APY_Percentage(token),
        });
      });
      setTokens(calculatedTokensWithAPY);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      {tokens.length > 1 ? (
        <ul className={styles.main}>
          {tokens.map((token) => (
            <li key={token.name}>
              <p>Token Name: {token.name}</p>
              <p>APY: {token.apy}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tokens found</p>
      )}
    </div>
  );
};

export default DisplayAPY;
