import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import image from "../../img/background-img.jpg";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  return (
    <div
      className="main-component"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form className="login-wrapper">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
          />
        </FormGroup>
        <Button className="btn btn-danger mt-4" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
