import Link from 'next/link';

const class_2026 = [
    {
        name: 'Akhil Motiramani',
        linkedin: 'https://www.linkedin.com/in/akhilmotiramani/',
        image: '/image/akhil.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Alex Gonzales',
        linkedin: 'https://www.linkedin.com/in/alexandragonzales/',
        image: '/image/alex.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Angelina León',
        linkedin: 'https://www.linkedin.com/in/angelina-le%C3%B3n/',
        image: '/image/angelina.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Arame Thiam',
        linkedin: 'https://www.linkedin.com/in/arame-thiam-59b84521b/',
        image: '/image/arame.jpeg',
        class: 'Eta'
    },
    {
        name: 'Benny Rakower',
        linkedin: 'https://www.linkedin.com/in/benny-rakower/',
        image: '/image/benny.jpg',
        class: 'Zeta'
    },
    {
        name: 'Carmine Anderson-Falconi',
        linkedin: 'https://www.linkedin.com/in/carmine-anderson-falconi-561824204/',
        image: '/image/carmine.jpg',
        class: 'Zeta'
    },
    {
        name: 'Colby Eagan',
        linkedin: 'https://www.linkedin.com/in/colbyeagan/',
        image: '/image/colby.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Diya Joshi',
        linkedin: 'https://www.linkedin.com/in/diya-joshi-09134a265/',
        image: '/image/diya.jpeg',
        class: 'Delta'
    },
    {
        name: 'Dylan Nicks',
        linkedin: 'https://www.linkedin.com/in/dylan-nicks/',
        image: '/image/dylan.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Ellie Kim',
        linkedin: 'https://www.linkedin.com/in/elliekim04/',
        image: '/image/ellie.jpeg',
        class: 'Delta'
    },
    {
        name: 'Francesca Fabiano-Grossi',
        linkedin: 'https://www.linkedin.com/in/francesca-fabiano-grossi/',
        image: '/image/francesca.jpeg',
        class: 'Eta'
    },
    {
        name: 'Harper Cunningham',
        linkedin: 'https://www.linkedin.com/in/harper-cunningham-60b364281/',
        image: '/image/harper.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Jordan Weinstein',
        linkedin: 'https://www.linkedin.com/in/jordan-weinstein-aa50661ab/',
        image: '/image/jordan.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Jules Kim',
        linkedin: 'https://www.linkedin.com/in/juha-kim-b2b664279/',
        image: '/image/jules.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Kibby Hyacinth Pangilinan',
        linkedin: 'https://www.linkedin.com/in/kpangilinan/',
        image: '/image/kibby.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Lauren Lascano',
        linkedin: 'https://www.linkedin.com/in/laurenlascano/',
        image: '/image/lauren.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Lily Moore',
        linkedin: 'https://www.linkedin.com/in/lily-moore-b89ba5265/',
        image: '/image/lily.jpeg',
        class: 'Delta'
    },
    {
        name: 'Mason Drabik',
        linkedin: 'https://www.linkedin.com/in/mason-drabik-20a986254/',
        image: '/image/mason.jpeg',
        class: 'Delta'
    },
    {
        name: 'Natalie Ammerman',
        linkedin: 'https://www.linkedin.com/in/natalie-ammerman/',
        image: '/image/natalie.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Neha Madhavapeddi',
        linkedin: 'https://www.linkedin.com/in/neha--m/',
        image: '/image/neha.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Nicholas Sanaie',
        linkedin: 'https://www.linkedin.com/in/nsanaie/',
        image: '/image/nick.jpeg',
        class: 'Delta'
    },
    {
        name: 'Ross Guinan',
        linkedin: 'https://www.linkedin.com/in/ross-guinan-96268a255/',
        image: '/image/ross.jpg',
        class: 'Zeta'
    },
    {
        name: 'Shriya Manchikatla',
        linkedin: 'https://www.linkedin.com/in/shriya-manchi/',
        image: '/image/shriya.jpeg',
        class: 'Delta'
    },
    {
        name: 'Srikar Sannidhi',
        linkedin: 'https://www.linkedin.com/in/srikarsannidhi/',
        image: '/image/srikar.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Sruthy Mammen',
        linkedin: 'https://www.linkedin.com/in/sruthymam/',
        image: '/image/sruthy.jpeg',
        class: 'Delta'
    },
    {
        name: 'Tanner Macpherson',
        linkedin: 'https://www.linkedin.com/in/tannermacpherson/',
        image: '/image/tanner.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Tanveer Thethi',
        linkedin: 'https://www.linkedin.com/in/tanveer-thethi/',
        image: '/image/tanveer.jpeg',
        class: 'Epsilon',
    },
    {
        name: 'Upasana Lamsal',
        linkedin: 'https://www.linkedin.com/in/upasana-lamsal/',
        image: '/image/upasana.jpeg',
        class: 'Delta'
    },
    {
        name: 'William Wang',
        linkedin: 'https://www.linkedin.com/in/wmwang52/',
        image: '/image/william.jpeg',
        class: 'Epsilon',
    },
];


export default function Class_2026() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {class_2026.map((member) => (
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
