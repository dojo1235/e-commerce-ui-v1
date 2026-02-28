import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '@/src/ui';
import { Mail, Lock, UserPlus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle registration here
    console.log('Registration attempt:', { email, password });
    navigate('/login');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-zinc-50/50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl border border-zinc-100 shadow-sm p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Create Account</h1>
          <p className="text-zinc-500 text-sm">Join SwiftShop and start shopping today</p>
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
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Password</label>
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
            <p className="text-[10px] text-zinc-400 ml-1">Must be at least 8 characters long</p>
          </div>

          <Button type="submit" className="w-full h-12 text-base group">
            Create Account
            <UserPlus className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
          <p className="text-sm text-zinc-500">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-zinc-900 hover:underline">
              Sign in instead
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
