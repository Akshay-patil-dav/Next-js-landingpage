"use client";
import { useState } from 'react';
import { Users, Target, Lightbulb, Award, Globe, Heart, ArrowRight, Star, CheckCircle, Zap, Shield, Rocket } from 'lucide-react';

function Feature() {
  const [activeTab, setActiveTab] = useState('mission');
//  const [count, setCount] = useState(0);

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in tech innovation and startup growth.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technical architect passionate about scalable solutions and emerging technologies.'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative director focused on user-centered design and digital experiences.'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Engineering leader building robust platforms that scale with growing businesses.'
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People Centered',
      description: 'Every decision we make prioritizes the needs and success of our users and team members.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Security',
      description: 'We build secure, reliable platforms that our users can depend on for their most important work.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our solutions are designed to make a positive difference in communities worldwide.'
    }
  ];

  const achievements = [
    { number: '500K+', label: 'Active Users' },
    { number: '150+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize digital collaboration'
    },
    {
      year: '2021',
      title: 'First 10K Users',
      description: 'Reached our first major user milestone and launched premium features'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Secured $15M in funding to accelerate product development'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries with localized support'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Launched AI-powered features to enhance user productivity'
    },
    {
      year: '2025',
      title: 'Market Leader',
      description: 'Became the leading platform in our category with 500K+ users'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative px-4 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Our Story
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Building the
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of innovators, designers, and engineers dedicated to creating 
              digital experiences that empower people and transform businesses worldwide.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles and vision that guide everything we do
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              {[
                { id: 'mission', label: 'Mission', icon: <Target className="w-5 h-5" /> },
                { id: 'vision', label: 'Vision', icon: <Rocket className="w-5 h-5" /> },
                { id: 'values', label: 'Values', icon: <Heart className="w-5 h-5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {activeTab === 'mission' && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  To democratize innovation by providing powerful, intuitive tools that enable individuals and teams 
                  to build, collaborate, and create without limits. We believe that great ideas can come from anywhere, 
                  and our platform ensures that technical barriers never stand in the way of bringing those ideas to life.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  A world where every person has the tools and opportunity to turn their ideas into reality. 
                  We envision a future where creativity and innovation are not limited by technical complexity, 
                  where collaboration transcends geographical boundaries, and where the next breakthrough 
                  can come from anyone, anywhere.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Values</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a simple idea to a global platform trusted by hundreds of thousands
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-white border-4 border-indigo-500 rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind our mission to transform digital collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-indigo-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-12">
            We're building more than just a product – we're creating a culture of innovation, growth, and impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Innovation Culture',
                description: 'Work on cutting-edge projects that push the boundaries of what\'s possible'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Collaborative Environment',
                description: 'Join a diverse team of talented individuals who support each other\'s growth'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Impact',
                description: 'Your work directly affects hundreds of thousands of users worldwide'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-indigo-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors duration-200 inline-flex items-center">
              Join Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or just want to say hello, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}

export default Feature;