import React, { useState } from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import { SignInContainer, ButtonsContainer, SignInTitle } from './sign-in.styles';

const SignIn  = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;

        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value })
    };

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <ButtonsContainer>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )


}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
