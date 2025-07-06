"use client";
import React, { useState } from 'react';
import { Star, ArrowRight, Shield, Zap, Users, Mail, Phone, MapPin, Github, Twitter, Linkedin, CheckCircle } from 'lucide-react';

function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Launching Soon
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Build the Future
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into reality with our cutting-edge platform. 
              Join thousands of innovators who trust us to power their dreams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Started Free
                <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full border-2 border-white"></div>
              </div>
              <span>Trusted by 10,000+ users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built the most comprehensive solution to help you succeed in today's fast-paced world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bank-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is protected with enterprise-level encryption and security protocols that meet the highest industry standards.
              </p>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience blazing-fast performance with our optimized infrastructure that scales automatically with your needs.
              </p>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work seamlessly with your team using our real-time collaboration tools and intuitive sharing features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 px-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about their experience with our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "This platform has completely transformed how we work. The intuitive interface and powerful features make complex tasks simple."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, TechStart</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Outstanding support and incredible performance. Our productivity has increased by 300% since we started using this platform."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-500">CTO, InnovateLab</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The best investment we've made for our business. The ROI was immediate and the ongoing value continues to exceed expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Founder, GrowthCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Get the latest updates, tips, and exclusive content delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
                style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                required
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <CheckCircle className="w-6 h-6 mx-auto" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            
            {isSubmitted && (
              <p className="text-indigo-100 mt-4 animate-pulse">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            )}
          </div>
        </div>
      </section>

  
    </div>
  );
}

export default Home;