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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {class_2027.map((member) => (
        <a
          key={member.name}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass glass-hover rounded-2xl p-6 text-center group block"
        >
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 ring-2 ring-white/10 group-hover:ring-blue-500/40 transition-all duration-300">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-white font-semibold text-sm leading-tight mb-1">{member.name}</h3>
          <p className="text-blue-400 text-xs">{member.class} class</p>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-slate-500 text-xs flex items-center justify-center gap-1">
              <i className="fa-brands fa-linkedin text-xs" /> View Profile
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
