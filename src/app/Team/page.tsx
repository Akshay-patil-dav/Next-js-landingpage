"use client";
import React, { useState } from 'react';
import { Shield, FileText, Clock, AlertCircle, CheckCircle, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

function Team() {
  const [lastUpdated] = useState('January 15, 2025');
  const [effectiveDate] = useState('January 1, 2025');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header Section */}
      <section className="relative px-4 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium">
              <FileText className="w-4 h-4 mr-2" />
              Legal Document
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Terms of
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our platform. 
              By accessing our services, you agree to be bound by these terms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 bg-white/50 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { id: 'acceptance', title: 'Acceptance' },
              { id: 'services', title: 'Our Services' },
              { id: 'accounts', title: 'User Accounts' },
              { id: 'conduct', title: 'User Conduct' },
              { id: 'privacy', title: 'Privacy' },
              { id: 'intellectual', title: 'IP Rights' },
              { id: 'payments', title: 'Payments' },
              { id: 'termination', title: 'Termination' },
              { id: 'disclaimers', title: 'Disclaimers' },
              { id: 'limitation', title: 'Liability' },
              { id: 'governing', title: 'Governing Law' },
              { id: 'contact', title: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
                <p className="text-amber-700 leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and FuturePlatform. 
                  Please read them carefully and contact us if you have any questions before using our services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <div id="acceptance" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using FuturePlatform's services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update these terms at any time without prior notice. Your continued use of the service after any such changes 
                constitutes your acceptance of the new Terms of Service.
              </p>
            </div>
          </div>

          {/* Section 2: Description of Services */}
          <div id="services" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. Description of Services</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                FuturePlatform provides a comprehensive digital platform designed to help users build, collaborate, and innovate. 
                Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Cloud-based development and collaboration tools</li>
                <li>Real-time team collaboration features</li>
                <li>Secure data storage and management</li>
                <li>Analytics and reporting capabilities</li>
                <li>Customer support and technical assistance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, 
                with or without notice to users.
              </p>
            </div>
          </div>

          {/* Section 3: User Accounts */}
          <div id="accounts" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. User Accounts and Registration</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our service, you must register for an account. When you register, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for safeguarding your account credentials and for all activities that occur under your account.
              </p>
            </div>
          </div>

          {/* Section 4: User Conduct */}
          <div id="conduct" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. User Conduct</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit malicious code or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Harass, abuse, or harm other users</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to investigate and take appropriate action against users who violate these terms, 
                including suspension or termination of accounts.
              </p>
            </div>
          </div>

          {/* Section 5: Privacy and Data Protection */}
          <div id="privacy" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. Privacy and Data Protection</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information 
                when you use our services. By using our services, you agree to the collection and use of information in accordance 
                with our Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
            </div>
          </div>

          {/* Section 6: Intellectual Property */}
          <div id="intellectual" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">6. Intellectual Property Rights</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of 
                FuturePlatform and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You retain ownership of any content you create or upload to our platform, but you grant us a license to use, 
                modify, and distribute such content as necessary to provide our services.
              </p>
            </div>
          </div>

          {/* Section 7: Payments and Billing */}
          <div id="payments" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">7. Payments and Billing</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Some of our services may require payment. If you choose to use paid services, you agree to pay all applicable fees. 
                Payment terms include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Subscription fees are billed in advance</li>
                <li>We may change our pricing with 30 days notice</li>
                <li>You are responsible for all taxes and fees</li>
                <li>Failure to pay may result in service suspension</li>
              </ul>
            </div>
          </div>

          {/* Section 8: Termination */}
          <div id="termination" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">8. Termination</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to our services immediately, without prior notice, 
                for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may terminate your account at any time by contacting us. Upon termination, your right to use our services 
                will cease immediately, and we may delete your account and data.
              </p>
            </div>
          </div>

          {/* Section 9: Disclaimers */}
          <div id="disclaimers" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">9. Disclaimers</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. 
                We do not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>The service will be uninterrupted or error-free</li>
                <li>The service will meet your specific requirements</li>
                <li>Any errors in the service will be corrected</li>
                <li>The service will be secure or free from harmful components</li>
              </ul>
            </div>
          </div>

          {/* Section 10: Limitation of Liability */}
          <div id="limitation" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">10. Limitation of Liability</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall FuturePlatform be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for all claims arising from or relating to these terms or our services shall not exceed 
                the amount you paid us in the twelve months preceding the claim.
              </p>
            </div>
          </div>

          {/* Section 11: Governing Law */}
          <div id="governing" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">11. Governing Law</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance 
                with the rules of the American Arbitration Association.
              </p>
            </div>
          </div>

          {/* Section 12: Contact Information */}
          <div id="contact" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">12. Contact Information</h2>
            </div>
            <div className="space-y-4">
              <p className="text-indigo-100 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-indigo-200" />
                  <span className="text-indigo-100">legal@futureplatform.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-indigo-200" />
                  <span className="text-indigo-100">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-indigo-200" />
                  <span className="text-indigo-100">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Team;