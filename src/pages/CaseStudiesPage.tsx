import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Asante Logistics: Digital Transformation',
    category: 'Logistics',
    description: 'How we helped a leading East African logistics company digitize their fleet management and reduce operational costs by 30%.',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Jollof Eats: Mobile App Launch',
    category: 'Food Tech',
    description: 'Launching a successful food delivery app across West Africa, achieving 100,000+ downloads in the first three months.',
    imageUrl: 'https://images.unsplash.com/photo-1586880244498-95a345902534?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Akiba Finance: Scaling with Cloud',
    category: 'Fintech',
    description: 'Migrating a major fintech platform to a scalable cloud architecture, improving performance and enabling rapid user growth.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Our Success Stories</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Discover how we've helped businesses like yours to achieve their goals through technology.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-1 lg:max-w-4xl lg:mx-auto">
        {caseStudies.map((study) => (
          <div key={study.title} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/3">
              <img className="h-48 w-full object-cover md:h-full" src={study.imageUrl} alt={study.title} />
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">{study.category}</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{study.description}</p>
              <div className="mt-4">
                <Link to="#" className="text-base font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500">
                  Read case study &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
