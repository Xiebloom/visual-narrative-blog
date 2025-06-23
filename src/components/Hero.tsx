
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Capturing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
            Moments
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Welcome to my visual journey. Explore stories told through the lens, 
          where every photograph captures the essence of life's fleeting beauty.
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Explore My Work
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
