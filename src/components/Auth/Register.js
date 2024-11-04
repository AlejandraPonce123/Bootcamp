import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { signup } = useAuth();
    const { register, handleSubmit } = useForm();

    const handleSignup = async ({ email, password }) => {
        await signup(email, password);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(handleSignup)}>
                <input type="email" {...register("email")} placeholder="Email" required />
                <input type="password" {...register("password")} placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
