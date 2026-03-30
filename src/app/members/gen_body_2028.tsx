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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {class_2028.map((member) => (
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
