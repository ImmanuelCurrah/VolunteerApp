import React from "react";
import ContactForm from "../../components/Forms/contactForm/ContactForm";
import { Layout } from "../../components/Layout/Layout";
export default function Contact() {
  return (
    <Layout>
      <div className="user-login-page">
        <h2>Contact Us!</h2>
        <ContactForm />
      </div>
    </Layout>
  );
}
