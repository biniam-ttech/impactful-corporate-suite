import { CheckCircle } from 'lucide-react';

const services = [
  { name: 'Web Development', description: 'Custom, responsive, and high-performance websites built with modern technologies like React and Node.js.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.', image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'UI/UX Design', description: 'User-centric design, from wireframes and prototypes to beautiful, intuitive interfaces that your users will love.', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Cloud & DevOps', description: 'End-to-end cloud solutions, including infrastructure setup, CI/CD pipelines, and automated deployments.', image: 'https://images.unsplash.com/photo-1546934887-05c312a8755a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const comparisonData = {
  headers: ['Feature', 'Standard', 'Premium', 'Enterprise'],
  rows: [
    ['Custom Components', true, true, true],
    ['Dedicated Project Manager', false, true, true],
    ['24/7 Support', false, false, true],
    ['Cloud Integration', 'Basic', 'Advanced', 'Custom'],
    ['Monthly Reports', '1', '4', 'Unlimited'],
  ],
};

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          We provide end-to-end digital solutions to help your business thrive in the new economy.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {services.map(service => (
          <div key={service.name} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg shadow-lg overflow-hidden">
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-12">
          Service Plan Comparison
        </h2>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                {comparisonData.headers.map(header => (
                  <th key={header} scope="col" className={`px-6 py-3 ${header !== 'Feature' ? 'text-center' : ''}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row[0]}</th>
                  {row.slice(1).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4 text-center">
                      {typeof cell === 'boolean' ? (
                        cell ? <CheckCircle className="mx-auto text-green-500" /> : <span className="text-red-500">-</span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;
