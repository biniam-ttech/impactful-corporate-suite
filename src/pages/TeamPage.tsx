const teamMembers = [
  {
    name: 'Amina Diallo',
    role: 'Founder & CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    bio: 'A visionary leader with a passion for using technology to solve complex problems in Africa.'
  },
  {
    name: 'Bayo Adekunle',
    role: 'Chief Technology Officer',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    bio: 'A seasoned software architect with over 15 years of experience building scalable systems.'
  },
  {
    name: 'Fatima Zahra',
    role: 'Head of Design',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    bio: 'Believes in user-centric design that is both beautiful and functional, creating intuitive digital experiences.'
  },
  {
    name: 'Kwame Osei',
    role: 'Lead Frontend Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    bio: 'A React wizard who brings designs to life with pixel-perfect precision and fluid animations.'
  },
  {
    name: 'Nia Ekwueme',
    role: 'Lead Backend Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    bio: 'Expert in building robust and secure APIs, databases, and cloud infrastructure on a continental scale.'
  },
  {
    name: 'Samir Benali',
    role: 'Project Manager',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    bio: 'The organizational backbone of the team, ensuring projects are delivered on time and exceed expectations.'
  }
];

const TeamPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Meet Our Team</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            The passionate minds behind Ubuntu Tech, driving innovation across Africa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((person) => (
            <div key={person.name} className="text-center">
              <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={person.imageUrl} alt={`Portrait of ${person.name}`} />
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{person.name}</h3>
                <p className="text-base font-semibold text-blue-600 dark:text-blue-400">{person.role}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
