'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

interface SignInSignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'email' | 'signup' | 'otp';
const SignInSignUp: React.FC<SignInSignUpProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    // Reset state on close
    setStep('email');
    setEmail('');
    setName('');
    setMobile('');
    setOtp('');
    setError('');
    setMessage('');
    setIsLoading(false);
    onClose();
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('Sending OTP...');

    // We use signIn to trigger the 'send-otp' action in the authorize function
    const result = await signIn('credentials', {
      redirect: false,
      email,
      action: 'send-otp',
    });

    setIsLoading(false);
    if (result?.error === 'OTP_SENT') {
      setMessage('An OTP has been sent to your email.');
      setStep('otp');
    } else if (result?.error) {
      setError(result.error);
      setMessage('');
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('Sending OTP...');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      name,
      mobile,
      action: 'send-otp',
    });

    setIsLoading(false);
    if (result?.error === 'OTP_SENT') {
      setMessage('An OTP has been sent to your email.');
      setStep('otp');
    } else if (result?.error) {
      setError(result.error);
      setMessage('');
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('Verifying...');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      otp,
      action: 'verify-otp',
    });

    setIsLoading(false);
    if (result?.ok) {
      setMessage('Login successful!');
      setTimeout(handleClose, 1000);
    } else {
      setError(result?.error || 'An unknown error occurred.');
      setMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center" onClick={handleClose}>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-white" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {step === 'signup' ? 'Complete Sign Up' : 'Sign In / Sign Up'}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}

        {step === 'email' && (
          <form onSubmit={handleEmailSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 mb-4" disabled={isLoading} />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md transition-colors disabled:bg-gray-500" disabled={isLoading}>{isLoading ? 'Processing...' : 'Continue'}</button>
            <p className="text-center text-sm text-gray-400 mt-4">
              New user?{' '}
              <button
                type="button"
                onClick={() => {
                  setStep('signup');
                  // Clear any previous errors when switching forms
                  setError('');
                }}
                className="font-semibold text-blue-400 hover:underline focus:outline-none"
              >
                Create an account
              </button>
            </p>
          </form>
        )}

        {step === 'signup' && (
          <form onSubmit={handleSignUpSubmit}>
            <p className="text-center mb-4">Looks like you're new here! Complete your profile.</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 mb-4" disabled={isLoading} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 mb-4" disabled={isLoading} />
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number" required className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 mb-4" disabled={isLoading} />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md transition-colors disabled:bg-gray-500" disabled={isLoading}>{isLoading ? 'Sending OTP...' : 'Send OTP'}</button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={handleOtpSubmit}>
            <p className="text-center mb-4">An OTP has been sent to {email}.</p>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter 6-digit OTP" required maxLength={6} className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 mb-4" disabled={isLoading} />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md transition-colors disabled:bg-gray-500" disabled={isLoading}>{isLoading ? 'Verifying...' : 'Verify & Login'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignInSignUp;