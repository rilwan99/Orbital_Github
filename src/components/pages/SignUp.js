import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "../SignUpForm";
import { Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Footer from "../Footer";
import "../../App.css";

function SignUp() {
  return (
    <>
      <Navbar />
      <SignUpForm />
      <Footer />
    </>
  );
  //return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
}

export default SignUp;
