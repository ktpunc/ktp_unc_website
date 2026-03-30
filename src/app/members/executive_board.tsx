import Link from 'next/link';

const executiveMembers = [
  { name: 'Sidney Ross', title: 'President', linkedin: 'https://www.linkedin.com/in/sidney-ross-950aa830a/', image: '/image/sidney.jpeg' },
  { name: 'Liliana Silva', title: 'Vice President', linkedin: 'https://www.linkedin.com/in/liliana-silva-713690286/', image: '/image/liliana.jpeg' },
  { name: 'Anish Voota', title: 'Treasurer', linkedin: 'https://www.linkedin.com/in/anishvoota/', image: '/image/anishv.jpeg' },
  { name: 'Kibby Hyacinth Pangilinan', title: 'Secretary', linkedin: 'https://www.linkedin.com/in/kpangilinan/', image: '/image/kibby.jpeg' },
  { name: 'Kabir Grewal', title: 'Director of Recruitment', linkedin: 'https://www.linkedin.com/in/kabir-grewal12/', image: '/image/tanveer.jpeg' },
  { name: 'Dylan Cialkowski', title: 'Director of Recruitment', linkedin: 'https://www.linkedin.com/in/dylan-cialkowski/', image: '/image/dylanc.jpeg' },
  { name: 'Harper Cunningham', title: 'Director of NME', linkedin: 'https://www.linkedin.com/in/harper-cunningham-60b364281/', image: '/image/harper.jpeg' },
  { name: 'Talia Spaulding', title: 'Director of NME', linkedin: 'https://www.linkedin.com/in/talia-spaulding/', image: '/image/talia.jpeg' },
  { name: 'Ross Guinan', title: 'Director of Social Engagement', linkedin: 'https://www.linkedin.com/in/ross-guinan-96268a255/', image: '/image/ross.jpg' },
  { name: 'Arame Thiam', title: 'Director of DEI', linkedin: 'https://www.linkedin.com/in/arame-thiam-59b84521b/', image: '/image/arame.jpeg' },
  { name: 'Nicholas Sanaie', title: 'Director of Professional Development', linkedin: 'https://www.linkedin.com/in/nsanaie/', image: '/image/nick.jpeg' },
  { name: 'Yewon Song', title: 'Director of Technical Enrichment', linkedin: 'https://www.linkedin.com/in/yewonsong/', image: '/image/yewon.jpeg' },
  { name: 'Asthav Sagar', title: 'Director of Community Service', linkedin: 'https://www.linkedin.com/in/asthav-sagar/', image: '/image/asthav.jpeg' },
  { name: 'Nina Dhillon', title: 'Director of Marketing', linkedin: 'https://www.linkedin.com/in/nina-dhillon-926595214/', image: '/image/nina.jpeg' },
  { name: 'Katie Brown', title: 'Director of Membership', linkedin: 'https://www.linkedin.com/in/kgbrown5/', image: '/image/katie.png' },
  { name: 'Abhiraam Aremanda', title: 'Director of Chapter Standards', linkedin: 'https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/', image: '/image/abhi.jpeg' },
];

export default function ExecutiveBoard() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {executiveMembers.map((member) => (
          <Link
            key={member.name}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-2xl p-6 text-center group"
          >
            <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 ring-2 ring-white/10 group-hover:ring-blue-500/40 transition-all duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-white font-semibold text-sm leading-tight mb-1">{member.name}</h3>
            <p className="text-blue-400 text-xs">{member.title}</p>
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-slate-500 text-xs flex items-center justify-center gap-1">
                <i className="fa-brands fa-linkedin text-xs" /> View Profile
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
