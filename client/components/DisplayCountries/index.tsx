import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_COUNTRIES } from "../../graphql/Queries";
import { ICountry } from "../../graphql/Typings";
import styles from "./index.module.scss";

const DisplayCountries = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES);
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      {countries.length > 1 ? (
        <ul className={styles.main}>
          {countries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      ) : (
        <p>No countries found</p>
      )}
    </div>
  );
};

export default DisplayCountries;
