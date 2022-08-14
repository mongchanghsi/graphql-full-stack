import type { NextPage } from "next";

import Meta from "../components/Meta";
import styles from "../styles/Main.module.scss";

import Navigation from "../components/Navigation";
import DisplayUsers from "../components/DisplayUsers";
import CreateUser from "../components/CreateUser";
import DisplayAPY from "../components/DisplayAPY";
import DisplayCountries from "../components/DisplayCountries";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta />
      <Navigation />
      <div className={styles.main}>
        {/* <DisplayUsers /> */}
        {/* <CreateUser /> */}
        {/* <DisplayAPY /> */}
        <DisplayCountries />
      </div>
    </div>
  );
};

export default Index;
