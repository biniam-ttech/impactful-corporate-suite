import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'The Rise of Mobile Money in Africa',
    author: 'Amina Diallo',
    date: 'Oct 10, 2023',
    excerpt: 'Exploring the technological and social factors behind the explosion of mobile money platforms across the continent.',
    imageUrl: 'https://images.unsplash.com/photo-1593526496435-2dc0543555d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Building for the Next Billion Users: A Developer\'s Guide',
    author: 'Bayo Adekunle',
    date: 'Sep 22, 2023',
    excerpt: 'Key considerations for developing applications that are lightweight, data-efficient, and accessible for emerging markets.',
    imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
   {
    title: 'UI vs UX: A Guide for African Startups',
    author: 'Fatima Zahra',
    date: 'Aug 15, 2023',
    excerpt: 'Why understanding the difference between User Interface and User Experience is critical for the success of your digital product.',
    imageUrl: 'https://images.unsplash.com/photo-1559028006-44a36b17a16b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Our Insights</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Stay updated with the latest trends in technology, design, and African innovation.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <div className="relative">
          <input
            type="search"
            placeholder="Search articles..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.title} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{post.title}</h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400 flex-grow">{post.excerpt}</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              </div>
              <div className="mt-6">
                <Link to="#" className="text-base font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500">
                  Read full story &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
