import React from "react";
import { Layout } from "../../../components/Layout/Layout";
import { findCurrentUserHandler } from "../../../services/apiConfigUser";

export default function Account() {
  return (
    <Layout>
      <div className="login-page">
        <h2>Account Overview</h2>
      </div>
    </Layout>
  );
}
