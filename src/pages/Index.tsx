
import Header from "../components/Header";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

const Index = () => {
  const featuredPosts = [
    {
      title: "The Art of Street Photography",
      excerpt: "Discover the techniques and mindset needed to capture authentic moments in urban environments. Learn how to blend into the crowd and find extraordinary stories in ordinary places.",
      date: "June 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Street",
      readTime: "5 min read"
    },
    {
      title: "Portrait Sessions: Behind the Lens",
      excerpt: "Take a peek behind the scenes of my latest portrait sessions. From lighting setups to connecting with subjects, explore the creative process that brings portraits to life.",
      date: "June 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Portrait",
      readTime: "7 min read"
    },
    {
      title: "Golden Hour Magic",
      excerpt: "Understanding natural light is crucial for photography. Dive deep into the magical qualities of golden hour and learn how to make the most of this photographer's favorite time of day.",
      date: "June 5, 2024",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Technique",
      readTime: "4 min read"
    },
    {
      title: "Travel Photography Essentials",
      excerpt: "Planning your next photography adventure? Here's my complete guide to travel photography, including gear recommendations, planning tips, and how to capture the essence of new places.",
      date: "May 28, 2024",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Travel",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Featured Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my recent adventures and photography insights through these featured blog posts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to get the latest photography tips, behind-the-scenes content, and new blog posts delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
