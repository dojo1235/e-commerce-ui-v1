import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '@/src/ui';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle authentication here
    console.log('Login attempt:', { email, password });
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-zinc-50/50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl border border-zinc-100 shadow-sm p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-zinc-500 text-sm">Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input 
                type="email" 
                placeholder="name@example.com" 
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Password</label>
              <button type="button" className="text-xs font-medium text-zinc-900 hover:underline">Forgot password?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base group">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
          <p className="text-sm text-zinc-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-zinc-900 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
