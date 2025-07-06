import React from 'react'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, CheckCircle } from 'lucide-react';


export default function Footer() {
  return (
    <>
        {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                FuturePlatform
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering innovators to build the future with cutting-edge technology and intuitive design.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                  <span className="text-gray-400">hello@futureplatform.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-indigo-400 mr-3" />
                  <span className="text-gray-400">San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 FuturePlatform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
