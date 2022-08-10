import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/Queries";
import { MoonLoader } from "react-spinners";
import { IUser } from "../../graphql/Typings";

const DisplayUsers = () => {
  const { error, loading, data } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <h2>
        This page displays the user queried from the backend. Please ensure that
        you are running the server of this project to be able to view the
        response.
      </h2>
      {loading ? (
        <div className={styles.loader}>
          <MoonLoader size={30} color="black" loading={loading} />
        </div>
      ) : (
        <>
          {error ? (
            <p className={styles.error}>
              Something went wrong. <br />
              Please ensure that you are running the backend server or refresh
              the page.
            </p>
          ) : (
            <div className={styles.content}>
              {users.map((val) => {
                return <h1 key={val.id}> {val.firstName}</h1>;
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayUsers;
