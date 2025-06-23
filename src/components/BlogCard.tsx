
import { Calendar, Camera } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, date, imageUrl, category, readTime }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Camera className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors duration-200 cursor-pointer">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {excerpt}
        </p>
        
        <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200 flex items-center space-x-1 group">
          <span>Read More</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
