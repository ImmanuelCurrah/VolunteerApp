import React from "react";
import ContactForm from "../../components/Forms/contactForm/ContactForm";
import { Layout } from "../../components/Layout/Layout";
export default function Contact() {
  return (
    <Layout>
      <div className="page-contact">
        <h2 className="signup-title">Contact Us!</h2>
        <ContactForm />
      </div>
    </Layout>
  );
}
