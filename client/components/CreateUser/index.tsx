import styles from "./index.module.scss";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER } from "../../graphql/Mutation";
import { IUserForm } from "../../graphql/Typings";

const initialData: IUserForm = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  ipAddress: "",
};

const CreateUser = () => {
  const [userData, setUserData] = useState<IUserForm>(initialData);
  const [createUser, { error }] = useMutation(CREATE_USER);

  const handleChange = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(userData);
    if (!userData) return;
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.gender ||
      !userData.ipAddress
    )
      return;

    createUser({
      variables: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        gender: userData.gender,
        ipAddress: userData.ipAddress,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.main}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={userData?.firstName}
          onChange={(e) => handleChange(e)}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={userData?.lastName}
          onChange={(e) => handleChange(e)}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userData?.email}
          onChange={(e) => handleChange(e)}
        />

        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={userData?.gender}
          onChange={(e) => handleChange(e)}
        />

        <label>IP Address</label>
        <input
          type="text"
          name="ipAddress"
          value={userData?.ipAddress}
          onChange={(e) => handleChange(e)}
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
