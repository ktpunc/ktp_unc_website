import Link from 'next/link';

const class_2027 = [
    {
        name: 'Abhiraam Aremanda',
        linkedin: 'https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/',
        image: '/image/abhi.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Andy Huoy',
        linkedin: 'https://www.linkedin.com/in/andyhuoy/',
        image: '/image/andy.jpeg',
        class: 'Eta'
    },
    {
        name: 'Anton Sun',
        linkedin: 'https://www.linkedin.com/in/antonsun/',
        image: '/image/anton.jpeg',
        class: 'Eta'
    },
    {
        name: 'Ari Gomez',
        linkedin: 'https://www.linkedin.com/in/aracely-gomez-a68b002ab/',
        image: '/image/ari.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Arsh Madhani',
        linkedin: 'https://www.linkedin.com/in/arsh-m/',
        image: '/image/arsh.jpeg',
        class: 'Eta'
    },
    {
        name: 'Caroline Bryan',
        linkedin: 'https://www.linkedin.com/in/caroline-bryan/',
        image: '/image/caroline.jpg',
        class: 'Zeta'
    },
    {
        name: 'Chris Zou',
        linkedin: 'https://www.linkedin.com/in/chris-zou/',
        image: '/image/chris.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Daniel Wang',
        linkedin: 'https://www.linkedin.com/in/daniel-wang23/',
        image: '/image/daniel.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Donn Rhys Mondano',
        linkedin: 'https://www.linkedin.com/in/donn-rhys-mondano-15abb0248/',
        image: '/image/rhys.jpg',
        class: 'Zeta'
    },
    {
        name: 'Kabir Grewal',
        linkedin: 'https://www.linkedin.com/in/kabir-grewal12/',
        image: '/image/anton.jpeg',
        class: 'Eta'
    },
    {
        name: 'Katie Brown',
        linkedin: 'https://www.linkedin.com/in/kgbrown5/',
        image: '/image/katie.png',
        class: 'Zeta'
    },
    {
        name: 'Liliana Silva',
        linkedin: 'https://www.linkedin.com/in/liliana-silva-713690286/',
        image: '/image/liliana.jpeg',
        class: 'Eta'
    },
    {
        name: 'Maeve Lee',
        linkedin: 'https://www.linkedin.com/in/maeve-lee-aa6a4b31b/',
        image: '/image/maeve.jpeg',
        class: 'Eta'
    },
    {
        name: 'Megha Thumma',
        linkedin: 'https://www.linkedin.com/in/meghathumma/',
        image: '/image/megha.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Nina Dhillon',
        linkedin: 'https://www.linkedin.com/in/nina-dhillon-926595214/',
        image: '/image/nina.jpeg',
        class: 'Eta'
    },
    {
        name: 'Nithya Indlamuri',
        linkedin: 'https://www.linkedin.com/in/nithya-indlamuri-486bb2296/',
        image: '/image/nithya.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Sidney Ross',
        linkedin: 'https://www.linkedin.com/in/sidney-ross-950aa830a/',
        image: '/image/sidney.jpeg',
        class: 'Eta'
    },
    {
        name: 'Talia Spaulding',
        linkedin: 'https://www.linkedin.com/in/talia-spaulding/',
        image: '/image/talia.jpeg',
        class: 'Eta'
    },
    {
        name: 'Tracy Dang',
        linkedin: 'https://www.linkedin.com/in/tracy-dang-27116a244/',
        image: '/image/tracy.jpeg',
        class: 'Zeta'
    },
];


export default function Class_2027() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {class_2027.map((member) => (
        <a
          key={member.name}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {/* Photo */}
          <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-3 shadow-card">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy/80 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs font-semibold tracking-widest uppercase border border-white/30 rounded-full px-3 py-1">
                Class of {member.class}
              </span>
              <span className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
                <i className="fa-brands fa-linkedin text-base" /> LinkedIn
              </span>
            </div>
          </div>
          <p className="text-navy font-semibold text-sm leading-snug group-hover:text-blue transition-colors duration-200">{member.name}</p>
          <p className="text-slate-400 text-xs mt-0.5">Class of {member.class}</p>
        </a>
      ))}
    </div>
  );
}
