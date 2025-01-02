import Link from 'next/link';

const class_2025 = [
    {
        name: 'Anan Garg',
        linkedin: 'https://www.linkedin.com/in/ananyakgarg/',
        image: '/image/ananya.jpeg',
        class: 'Delta'
      },
      {
        name: 'Arya Rao',
        linkedin: 'https://www.linkedin.com/in/arya-rao/',
        image: '/image/arya.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Carmine Anderson-Falconi',
        linkedin: 'https://www.linkedin.com/in/carmine-anderson-falconi-561824204/',
        image: '/image/carmine.jpg',
        class: 'Zeta'
      },{
        name: 'Haley Brosnahan',
        linkedin: 'https://www.linkedin.com/in/haley-brosnahan-69a500266/',
        image: '/image/haley.jpeg',
        class: 'Delta'
      },
      {
        name: 'Jake Rogers',
        linkedin: 'https://www.linkedin.com/in/jake-rogers-691908168/',
        image: '/image/jake.jpeg',
        class: 'Epsilon'
      },
      {
        name: 'Justin Rivera',
        linkedin: 'https://www.linkedin.com/in/justin-rivera-330448251/',
        image: '/image/justin.jpeg',
        class: 'Delta'
      },
      {
        name: 'Katherine Katsoudas',
        linkedin: 'https://www.linkedin.com/in/katherine-katsoudas-0026a520b/',
        image: '/image/katherine.jpeg',
        class: 'Delta'
      },
      {
        name: 'Mark Maio',
        linkedin: 'https://www.linkedin.com/in/markamaiojr/',
        image: '/image/markm.jpeg',
        class: 'Delta'
      },
      {
        name: 'Nikhil Abraham',
        linkedin: 'https://www.linkedin.com/in/nikhilabraham1/',
        image: '/image/nikhila.jpeg',
        class: 'Delta'
      },
      {
        name: 'Ryan Lutz',
        linkedin: 'https://www.linkedin.com/in/ryan-lutz000/',
        image: '/image/ryan.jpeg',
        class: 'Epsilon'
      },
      {
        name: 'Sana Goyal',
        linkedin: 'https://www.linkedin.com/in/sgoyal2/',
        image: '/image/sana.jpeg',
        class: 'Delta'
      },
      {
        name: 'Sarayu Yenumula',
        linkedin: 'https://www.linkedin.com/in/sarayuy/',
        image: '/image/sarayu.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Sai Kaza',
        linkedin: 'https://www.linkedin.com/in/saikaza/',
        image: '/image/sai.jpeg',
        class: 'Delta'
      },
      {
        name: 'Srinidhi Ekkurthi',
        linkedin: 'https://www.linkedin.com/in/srinidhi-ekkurthi/',
        image: '/image/srinidhi.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Tanvi Pulipaka',
        linkedin: 'https://www.linkedin.com/in/tanvipulipaka/',
        image: '/image/tanvi.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Tyler Roth',
        linkedin: 'https://www.linkedin.com/in/tylertroth/',
        image: '/image/tyler.jpeg',
        class: 'Delta'
      },
];

const ExecutiveBoard = () => {
  return (
      <div className="w-full bg-ruddyBlue py-12">
          <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center text-white mb-8">Class of 2025</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {class_2025.map((member) => (
                      <Link
                          key={member.name}
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative text-center bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                      >
                          <img
                              src={member.image}
                              alt={`Photo of ${member.name}`}
                              className="mx-auto rounded-full w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-transform duration-200 hover:scale-110"
                          />
                          <h2 className="text-xl font-semibold text-black">{member.name}</h2>
                          <p className="text-white">{member.class}</p>
                      </Link>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default ExecutiveBoard;