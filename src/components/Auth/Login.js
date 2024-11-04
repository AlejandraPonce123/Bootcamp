import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { loginWithGoogle, login } = useAuth();
    const { register, handleSubmit } = useForm();

    const handleLogin = async ({ email, password }) => {
        await login(email, password);
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={loginWithGoogle}>Sign in with Google</button>
            <form onSubmit={handleSubmit(handleLogin)}>
                <input type="email" {...register("email")} placeholder="Email" required />
                <input type="password" {...register("password")} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
