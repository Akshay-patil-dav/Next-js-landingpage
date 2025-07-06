import React from 'react';
import { Users, Lightbulb, Target, Award, Globe, Zap, Heart, Rocket } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Who We Are
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            About
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Company
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We are a passionate team dedicated to creating innovative solutions that empower businesses and individuals to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to deliver cutting-edge technology solutions that simplify complex challenges, enhance productivity, and foster growth for our clients worldwide. We strive to build lasting relationships based on trust, transparency, and mutual success.
            </p>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Aspiration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where technology seamlessly integrates into daily life, making it more efficient, connected, and enjoyable. We aim to be a global leader in innovation, continuously pushing boundaries and setting new standards in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            What Drives Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and continuously seek new ways to solve problems and improve.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and strong ethical principles in all our dealings.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <Globe className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and foster a supportive, inclusive environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering high-quality results and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Our People
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Our diverse team of experts is at the heart of everything we do. Each member brings unique skills and perspectives, united by a shared passion for innovation and client success.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="John Doe"
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-blue-600 text-sm mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Visionary leader with a passion for technology and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Jane Smith"
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-200"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-purple-600 text-sm mb-2">Lead Developer</p>
              <p className="text-gray-600 text-sm">
                Expert in full-stack development and scalable architectures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="David Lee"
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-pink-200"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900">David Lee</h3>
              <p className="text-pink-600 text-sm mb-2">Product Designer</p>
              <p className="text-gray-600 text-sm">
                Crafting intuitive and beautiful user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <p className="text-purple-100">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
              <p className="text-pink-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <p className="text-blue-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life and achieve your business goals.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get In Touch
            <Users className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

    </div>
  );
}

export default About;