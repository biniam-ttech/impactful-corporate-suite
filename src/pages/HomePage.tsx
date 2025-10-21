import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Database, Wind } from 'lucide-react';

const Hero = () => (
  <div className="bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Innovative Tech Solutions</span>
          <span className="block text-blue-600">for a Digital Africa</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We build robust, scalable, and user-centric web and mobile applications that drive growth for businesses across the continent.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link to="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
              Explore Services
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicesHighlight = () => (
  <div className="py-12 bg-white dark:bg-gray-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Expertise</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
          Solutions for Growth
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
              <Cloud />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">Cloud Solutions</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">Scalable cloud infrastructure and services to power your applications.</p>
          </div>
          <div className="text-center p-8 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
              <Database />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">Data Engineering</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">Robust data pipelines and analytics to unlock business insights.</p>
          </div>
          <div className="text-center p-8 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
              <Wind />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">Agile Development</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">Fast, iterative, and high-quality software development cycles.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-gray-50 dark:bg-gray-900 py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Trusted by Innovators</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-600 dark:text-gray-300">"Ubuntu Tech transformed our operations. Their expertise in cloud solutions is unmatched in the region."</p>
          <div className="mt-4 flex items-center">
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="" />
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">Juma Adebayo</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Asante Logistics</div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-600 dark:text-gray-300">"The mobile app they developed exceeded all our expectations. Our user engagement has skyrocketed!"</p>
          <div className="mt-4 flex items-center">
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="" />
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">Chidinma Okoro</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Founder, Jollof Eats</div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-600 dark:text-gray-300">"A truly professional and agile team. They delivered on time and on budget, which is a rarity."</p>
          <div className="mt-4 flex items-center">
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="" />
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">Kwame Mensah</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CTO, Akiba Finance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CtaSection = () => (
  <div className="bg-white dark:bg-gray-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to build your next big idea?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              Let's turn your vision into a reality. Contact us today for a free consultation.
            </p>
            <Link to="/contact" className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="App screenshot" />
        </div>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesHighlight />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default HomePage;
