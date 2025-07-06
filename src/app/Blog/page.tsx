"use client";
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Tag, Heart, MessageCircle, Share2, BookOpen, TrendingUp, Eye } from 'lucide-react';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = ['All', 'Technology', 'Design', 'Business', 'Lifestyle', 'Travel'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.",
      author: "Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 124,
      comments: 18,
      views: 2847,
      featured: true
    },
    {
      id: 2,
      title: "Mastering Modern UI/UX Design Principles",
      excerpt: "Learn the essential principles of modern interface design that create intuitive and engaging user experiences across all platforms.",
      author: "Michael Rodriguez",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 89,
      comments: 12,
      views: 1923,
      featured: false
    },
    {
      id: 3,
      title: "Building Scalable Business Strategies in the Digital Age",
      excerpt: "Discover how successful companies are adapting their business models to thrive in an increasingly digital marketplace.",
      author: "Emily Johnson",
      date: "2025-01-10",
      readTime: "10 min read",
      category: "Business",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 156,
      comments: 24,
      views: 3421,
      featured: true
    },
    {
      id: 4,
      title: "Minimalist Living: Finding Balance in a Complex World",
      excerpt: "Explore how minimalist principles can transform your daily life, reduce stress, and increase focus on what truly matters.",
      author: "David Park",
      date: "2025-01-08",
      readTime: "5 min read",
      category: "Lifestyle",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 73,
      comments: 9,
      views: 1654,
      featured: false
    },
    {
      id: 5,
      title: "Hidden Gems: Discovering Europe's Best Kept Secrets",
      excerpt: "Uncover breathtaking destinations across Europe that offer authentic experiences away from the typical tourist crowds.",
      author: "Lisa Thompson",
      date: "2025-01-05",
      readTime: "12 min read",
      category: "Travel",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 201,
      comments: 31,
      views: 4567,
      featured: false
    },
    {
      id: 6,
      title: "The Art of Remote Team Management",
      excerpt: "Master the skills needed to lead distributed teams effectively while maintaining productivity and team cohesion.",
      author: "Alex Kumar",
      date: "2025-01-03",
      readTime: "7 min read",
      category: "Business",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 92,
      comments: 15,
      views: 2134,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleReadMore = (postId: number) => {
    console.log(`Reading post ${postId}`);
    // In a real app, this would navigate to the full article
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative px-4 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Our
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover insights, trends, and stories that inspire innovation and drive success in the digital world.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                style={{backgroundColor:"white" , color:"black"}}/>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter */}
            <div className="text-center text-gray-600 mb-4">
              {filteredPosts.length === 0 ? (
                <p>No articles found matching your criteria.</p>
              ) : (
                <p>
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <TrendingUp className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.date)}
                            <Clock className="w-4 h-4 ml-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center hover:text-red-500 transition-colors cursor-pointer">
                          <Heart className="w-4 h-4 mr-1" />
                          {formatNumber(post.likes)}
                        </div>
                        <div className="flex items-center hover:text-blue-500 transition-colors cursor-pointer">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {formatNumber(post.views)}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleReadMore(post.id)}
                        className="group/btn flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      {regularPosts.length > 0 && (
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.date)}
                          <Clock className="w-3 h-3 ml-2 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center hover:text-red-500 transition-colors cursor-pointer">
                          <Heart className="w-3 h-3 mr-1" />
                          {formatNumber(post.likes)}
                        </div>
                        <div className="flex items-center hover:text-blue-500 transition-colors cursor-pointer">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {post.comments}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {formatNumber(post.views)}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleReadMore(post.id)}
                        className="group/btn flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors"
                      >
                        Read
                        <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest articles, insights, and exclusive content delivered to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center text-white mb-2">
                  <BookOpen className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Thank you for subscribing!</span>
                </div>
                <p className="text-indigo-100 text-sm">
                  You'll receive our latest updates in your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300"
                  style={{backgroundColor:"white"}}
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

   
    </div>
  );
}

export default Blog;