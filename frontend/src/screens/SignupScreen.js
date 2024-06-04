import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

const SignupScreen = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    // Simulate sending signup data to the server
    console.log('Signup data:', formData);

    // Simulate a successful signup
    setTimeout(() => {
      alert('Signup successful! Welcome email sent.');
      navigate.push('/posts');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default SignupScreen;
