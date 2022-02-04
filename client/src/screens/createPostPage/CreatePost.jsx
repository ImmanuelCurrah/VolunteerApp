import React from 'react';
import BusinessPostForm from '../../components/Forms/postForm/businessPost/BusinessPostForm';
import { Layout } from '../../components/Layout/Layout';
import './CreatePost.css';

export default function CreatePost() {
  return (
    <Layout>
      <div className="business-post-form">
        <h2>Post Your Event</h2>

        <BusinessPostForm />
      </div>
    </Layout>
  );
}
