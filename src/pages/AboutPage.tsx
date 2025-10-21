const TimelineItem = ({ year, title, description, last = false }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-blue-500 rounded-full">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      {!last && <div className="w-px h-full bg-gray-300 dark:bg-gray-700"></div>}
    </div>
    <div className="pb-8">
      <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{year} - {title}</p>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-12">
          About Ubuntu Tech
        </h1>

        <div className="prose dark:prose-invert lg:prose-xl mx-auto text-center">
          <p className="lead">
            Ubuntu Tech was founded on the principle of "I am because we are," applying the spirit of African community to the world of technology. We are a collective of passionate developers, designers, and strategists dedicated to building digital solutions that empower businesses and communities across Africa and beyond.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
            <div className="prose dark:prose-invert lg:prose-lg">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p>To craft high-quality, scalable, and impactful digital products that solve real-world problems, drive economic growth, and foster innovation on the African continent.</p>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p>To be the leading technology partner for African businesses, known for our commitment to excellence, integrity, and the success of our clients.</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Our team collaborating" className="rounded-lg shadow-xl"/>
            </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-12">
            Our Journey
          </h2>
          <div className="max-w-xl mx-auto">
            <TimelineItem 
              year="2018" 
              title="The Idea" 
              description="A group of friends, united by a passion for code and a belief in Africa's potential, sketch out the first plans for Ubuntu Tech in a Nairobi coffee shop."
            />
            <TimelineItem 
              year="2019" 
              title="First Project"
              description="Landed our first client, a local fintech startup, building a mobile payment gateway that is still in use today."
            />
            <TimelineItem 
              year="2021" 
              title="Team Expansion"
              description="Grew from 4 co-founders to a team of 15, bringing in diverse talent in UI/UX design and data science."
            />
            <TimelineItem 
              year="2023" 
              title="Pan-African Reach"
              description="Opened a new office in Lagos, Nigeria, and completed projects for clients in over 10 African countries."
              last={true}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
