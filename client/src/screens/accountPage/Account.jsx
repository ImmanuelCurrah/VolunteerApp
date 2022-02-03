import React from "react";
import { Layout } from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";

export default function Account() {
  return (
    <Layout>
      <div className="login-page">
        <h2>Account Overview</h2>
        <Card />
      </div>
    </Layout>
  );
}
