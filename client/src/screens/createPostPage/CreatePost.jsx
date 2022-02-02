import React from "react";
import BusinessPostForm from "../../components/Forms/postForm/businessPost/BusinessPostForm";
import { Layout } from "../../components/Layout/Layout";

export default function CreatePost() {
  return (
    <Layout>
      <h2>Post Your Event</h2>
      <BusinessPostForm />
    </Layout>
  );
}
