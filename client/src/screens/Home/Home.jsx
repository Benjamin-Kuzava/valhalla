import React, { useContext } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { UserContext } from "../../utilities/userContext";
import "./Home.css";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <div>{user}</div>
      </div>
    </Layout>
  );
};

export default Home;
