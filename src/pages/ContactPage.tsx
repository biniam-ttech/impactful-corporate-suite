import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Phone, Mail, MapPin } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    toast.success('Message sent! We will get back to you soon.');
    reset();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          We'd love to hear from you! Whether you have a question about our services or want to start a project, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-16">
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Our Office</h3>
                <p className="text-gray-600 dark:text-gray-400">123 Ubuntu Avenue, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400">contact@ubuntutech.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400">+254 700 123 456</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input {...register('name')} id="name" type="text" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input {...register('email')} id="email" type="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea {...register('message')} id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
