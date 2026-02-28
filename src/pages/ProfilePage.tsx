import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, MapPin, Phone, Calendar, Shield, Settings, ChevronRight } from 'lucide-react';
import { Button } from '@/src/ui';

export const ProfilePage = () => {
  const user = {
    name: "User Account",
    email: "divinebriggs19@gmail.com",
    phone: "+1 (555) 000-0000",
    location: "San Francisco, CA",
    joined: "February 2024",
    avatar: null
  };

  return (
    <main className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-zinc-900 h-32 relative">
            <div className="absolute -bottom-12 left-8">
              <div className="h-24 w-24 rounded-2xl bg-white p-1 shadow-md">
                <div className="h-full w-full rounded-xl bg-zinc-100 flex items-center justify-center">
                  <User className="h-12 w-12 text-zinc-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-zinc-900">{user.name}</h1>
                <p className="text-zinc-500">Member since {user.joined}</p>
              </div>
              <Button variant="outline" className="w-fit">
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-600">
                    <Mail className="h-5 w-5 text-zinc-400" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600">
                    <Phone className="h-5 w-5 text-zinc-400" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600">
                    <MapPin className="h-5 w-5 text-zinc-400" />
                    <span>{user.location}</span>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Account Settings</h2>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-zinc-400" />
                      <span className="text-zinc-700 font-medium">Security & Privacy</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5 text-zinc-400" />
                      <span className="text-zinc-700 font-medium">Preferences</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-zinc-400" />
                      <span className="text-zinc-700 font-medium">Order History</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
