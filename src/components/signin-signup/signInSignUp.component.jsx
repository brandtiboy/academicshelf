import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import GoogleButton from "../google-button/google-button.component";
import icon from "./icon.svg";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signInSignUp.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Log in</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <CustomButton type='submit'>Log In</CustomButton>
          <p>eller login med</p>

          <GoogleButton onClick={signInWithGoogle}>
            <img src={icon} alt='Google' className='google-icon' />
            Login med Google
          </GoogleButton>
          <p>
            Har du ikke en bruger?{" "}
            <a href='/'>
              <span>Tilmeld dig gratis!</span>
            </a>
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
