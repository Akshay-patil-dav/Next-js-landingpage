"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building, CheckCircle, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@company.com',
      subDetails: 'We reply within 24 hours',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri 9AM-6PM EST',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Ave',
      subDetails: 'New York, NY 10001',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM',
      subDetails: 'Weekend: By appointment',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Globe, href: '#', color: 'hover:text-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Contact
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Us Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                <p className="text-gray-500 text-sm">{info.subDetails}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                          style={{backgroundColor:"white", color:"black"}}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                          style={{backgroundColor:"white", color:"black"}}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                          style={{backgroundColor:"white",color:"black"}}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      style={{backgroundColor:"white" , color:"black"}}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="project">New Project</option>
                        <option value="support">Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                      style={{backgroundColor:"white" , color:"black"}}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We're here to help and answer any question you might have. We look forward to hearing from you and discussing how we can work together to achieve your goals.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600 text-sm">Experienced professionals dedicated to your success</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Response</h4>
                      <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                      <p className="text-gray-600 text-sm">Tailored approaches for your unique needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-gray-400 text-sm">123 Business Ave, New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly do you respond?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-600">Yes, we offer free initial consultations to discuss your project needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's your project timeline?</h3>
              <p className="text-gray-600">Project timelines vary based on scope and complexity. We'll provide estimates during consultation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you work remotely?</h3>
              <p className="text-gray-600">Yes, we work with clients globally and offer both remote and in-person collaboration.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;