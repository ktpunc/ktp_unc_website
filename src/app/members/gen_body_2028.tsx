import Link from 'next/link';

const class_2028 = [
    {
        name: 'Anish Patel',
        linkedin: 'https://www.linkedin.com/in/anish-patel-254a18264/',
        image: '/image/anishp.jpeg',
        class: 'Eta'
      },
    {
        name: 'Anish Voota',
        linkedin: 'https://www.linkedin.com/in/anishvoota/',
        image: '/image/anishv.jpeg',
        class: 'Eta'
      },
    {
        name: 'Asthav Sagar',
        linkedin: 'https://www.linkedin.com/in/asthav-sagar/',
        image: '/image/asthav.jpeg',
        class: 'Eta'
      },
      {
        name: 'Ben Yang',
        linkedin: 'https://www.linkedin.com/in/ben-yang-03b268235/',
        image: '/image/ben.jpeg',
        class: 'Eta'
      },
        {
            name: 'Duncan Moore',
            linkedin: 'https://www.linkedin.com/in/duncan-moore-425602287/',
            image: '/image/duncan.jpeg',
            class: 'Eta'
        },
        {
            name: 'Dylan Cialkowski',
            linkedin: 'https://www.linkedin.com/in/dylan-cialkowski/',
            image: '/image/dylanc.jpeg',
            class: 'Eta'
        },
        {
            name: 'John Harmon',
            linkedin: 'https://www.linkedin.com/in/john-harmon-8709025jwh/',
            image: '/image/john.jpeg',
            class: 'Eta'
        },
        {
            name: 'Rucha Padhye',
            linkedin: 'https://www.linkedin.com/in/rucha-padhye/',
            image: '/image/rucha.jpeg',
            class: 'Eta'
        },
        {
            name: 'Yewon Song',
            linkedin: 'https://www.linkedin.com/in/yewonsong/',
            image: '/image/yewon.jpeg',
            class: 'Eta'
        },
];


export default function Class_2028() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {class_2028.map((member) => (
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
