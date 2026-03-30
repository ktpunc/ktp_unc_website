import Link from "next/link";

const executiveMembers = [
  { name: "Sidney Ross",               title: "President",                         linkedin: "https://www.linkedin.com/in/sidney-ross-950aa830a/",       image: "/image/sidney.jpeg" },
  { name: "Liliana Silva",             title: "Vice President",                    linkedin: "https://www.linkedin.com/in/liliana-silva-713690286/",      image: "/image/liliana.jpeg" },
  { name: "Anish Voota",               title: "Treasurer",                         linkedin: "https://www.linkedin.com/in/anishvoota/",                   image: "/image/anishv.jpeg" },
  { name: "Kibby Hyacinth Pangilinan", title: "Secretary",                         linkedin: "https://www.linkedin.com/in/kpangilinan/",                  image: "/image/kibby.jpeg" },
  { name: "Kabir Grewal",              title: "Director of Recruitment",           linkedin: "https://www.linkedin.com/in/kabir-grewal12/",               image: "/image/tanveer.jpeg" },
  { name: "Dylan Cialkowski",          title: "Director of Recruitment",           linkedin: "https://www.linkedin.com/in/dylan-cialkowski/",             image: "/image/dylanc.jpeg" },
  { name: "Harper Cunningham",         title: "Director of NME",                  linkedin: "https://www.linkedin.com/in/harper-cunningham-60b364281/",  image: "/image/harper.jpeg" },
  { name: "Talia Spaulding",           title: "Director of NME",                  linkedin: "https://www.linkedin.com/in/talia-spaulding/",              image: "/image/talia.jpeg" },
  { name: "Ross Guinan",               title: "Director of Social Engagement",    linkedin: "https://www.linkedin.com/in/ross-guinan-96268a255/",        image: "/image/ross.jpg" },
  { name: "Arame Thiam",               title: "Director of DEI",                  linkedin: "https://www.linkedin.com/in/arame-thiam-59b84521b/",        image: "/image/arame.jpeg" },
  { name: "Nicholas Sanaie",           title: "Director of Professional Dev.",    linkedin: "https://www.linkedin.com/in/nsanaie/",                      image: "/image/nick.jpeg" },
  { name: "Yewon Song",                title: "Director of Technical Enrichment", linkedin: "https://www.linkedin.com/in/yewonsong/",                    image: "/image/yewon.jpeg" },
  { name: "Asthav Sagar",              title: "Director of Community Service",    linkedin: "https://www.linkedin.com/in/asthav-sagar/",                 image: "/image/asthav.jpeg" },
  { name: "Nina Dhillon",              title: "Director of Marketing",            linkedin: "https://www.linkedin.com/in/nina-dhillon-926595214/",       image: "/image/nina.jpeg" },
  { name: "Katie Brown",               title: "Director of Membership",           linkedin: "https://www.linkedin.com/in/kgbrown5/",                     image: "/image/katie.png" },
  { name: "Abhiraam Aremanda",         title: "Director of Chapter Standards",    linkedin: "https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/",  image: "/image/abhi.jpeg" },
];

export default function ExecutiveBoard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {executiveMembers.map((member) => (
        <Link
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
                {member.title}
              </span>
              <span className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
                <i className="fa-brands fa-linkedin text-base" /> LinkedIn
              </span>
            </div>
          </div>
          {/* Name */}
          <p className="text-navy font-semibold text-sm leading-snug group-hover:text-blue transition-colors duration-200">{member.name}</p>
          <p className="text-slate-400 text-xs mt-0.5">{member.title}</p>
        </Link>
      ))}
    </div>
  );
}
