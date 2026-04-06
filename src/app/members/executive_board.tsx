import { MemberGrid } from "@/components";

const executiveMembers = [
  { name: "Sidney Ross",               title: "President",                      chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/sidney-ross-950aa830a/",       image: "/image/sidney.jpeg" },
  { name: "Liliana Silva",             title: "Vice President",                 chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/liliana-silva-713690286/",      image: "/image/liliana.jpeg" },
  { name: "Anish Voota",               title: "Treasurer",                      chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/anishvoota/",                   image: "/image/anishv.jpeg" },
  { name: "Kibby Hyacinth Pangilinan", title: "Secretary",                      chapterClass: "Zeta",    linkedin: "https://www.linkedin.com/in/kpangilinan/",                  image: "/image/kibby.jpeg" },
  { name: "Kabir Grewal",              title: "Director of Recruitment",        chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/kabir-grewal12/",               image: "/image/tanveer.jpeg" },
  { name: "Dylan Cialkowski",          title: "Director of Recruitment",        chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/dylan-cialkowski/",             image: "/image/dylanc.jpeg" },
  { name: "Harper Cunningham",         title: "Director of NME",                chapterClass: "Zeta",    linkedin: "https://www.linkedin.com/in/harper-cunningham-60b364281/",  image: "/image/harper.jpeg" },
  { name: "Talia Spaulding",           title: "Director of NME",                chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/talia-spaulding/",              image: "/image/talia.jpeg" },
  { name: "Ross Guinan",               title: "Director of Social Engagement",  chapterClass: "Zeta",    linkedin: "https://www.linkedin.com/in/ross-guinan-96268a255/",        image: "/image/ross.jpg" },
  { name: "Arame Thiam",               title: "Director of DEI",                chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/arame-thiam-59b84521b/",        image: "/image/arame.jpeg" },
  { name: "Nicholas Sanaie",           title: "Director of Professional Dev.",  chapterClass: "Delta",   linkedin: "https://www.linkedin.com/in/nsanaie/",                      image: "/image/nick.jpeg" },
  { name: "Yewon Song",                title: "Director of Technical Enrichment",chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/yewonsong/",                    image: "/image/yewon.jpeg" },
  { name: "Asthav Sagar",              title: "Director of Community Service",  chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/asthav-sagar/",                 image: "/image/asthav.jpeg" },
  { name: "Nina Dhillon",              title: "Director of Marketing",          chapterClass: "Eta",     linkedin: "https://www.linkedin.com/in/nina-dhillon-926595214/",       image: "/image/nina.jpeg" },
  { name: "Katie Brown",               title: "Director of Membership",         chapterClass: "Zeta",    linkedin: "https://www.linkedin.com/in/kgbrown5/",                     image: "/image/katie.png" },
  { name: "Abhiraam Aremanda",         title: "Director of Chapter Standards",  chapterClass: "Zeta",    linkedin: "https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/",  image: "/image/abhi.jpeg" },
];

export default function ExecutiveBoard() {
  const members = executiveMembers.map((member) => ({
    ...member,
    subtitle: member.title,
    tag: member.chapterClass,
    subtitleClassName: "text-base font-semibold text-slate-700",
  }));

  return <MemberGrid members={members} />;
}
