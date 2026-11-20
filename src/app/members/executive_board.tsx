import { MemberGrid } from "@/components";

const executiveMembers = [
  { name: "Chet Allen",                title: "President",                      chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/chet-allen-v/",                image: "/image/chet_headshot.jpg", imagePosition: "center 50%" },
  { name: "Ally Organo",               title: "Vice President",                 chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/miralyssaorgano/",             image: "/image/allyorgano.jpg", imagePosition: "center 80%" },
  { name: "Zoe Ray",                   title: "Treasurer",                      chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/zoe-ray-6b6000393/",             image: "/image/zoeray.jpg", imagePosition: "center 45%" },
  { name: "Molly Yang",                title: "Secretary",                      chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/molly-yang-/",                   image: "/image/mollyyang.jpg", imagePosition: "center 45%" },
  { name: "Brandon Ge",                title: "Director of Recruitment",        chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/brandonyge/",                   image: "/image/brandonge.jpg", imagePosition: "center 45%" },
  { name: "Sid Arneja",                title: "Director of Recruitment",        chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/sidarneja/",                    image: "/image/sidarneja.jpg", imagePosition: "center 40%" },
  { name: "Anirudh Dhawan",            title: "Director of NME",                chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/anirudh-k-dhawan/",             image: "/image/anirudh.jpg", imagePosition: "center 45%" },
  { name: "Austin Xu",                 title: "Director of NME",                chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/austinxxu/",                     image: "/image/austinxu.jpg", imagePosition: "center 40%" },
  { name: "Trisha Deepak",             title: "Director of Social Engagement",  chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/trisha-deepak/",                image: "/image/trishadeepak.jpg", imagePosition: "center 45%" },
  { name: "Harsha Thayyil",            title: "Director of DEI",                chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/harsha-thayyil-8a42112a3/",      image: "/image/harshathayyil.jpg", imagePosition: "center 40%" },
  { name: "Andrew Wang",               title: "Director of Professional Dev.",  chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/anzwang/",                      image: "/image/andrewwang2.jpg", imagePosition: "center" },
  { name: "Sriraam Kumar",             title: "Director of Technical Enrichment",chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/sskumar6/",                     image: "/image/srikumar.jpg", imagePosition: "center 40%" },
  { name: "Ally Organo",               title: "Director of Community Service",  chapterClass: "Theta",   linkedin: "https://www.linkedin.com/in/miralyssaorgano/",             image: "/image/allyorgano.jpg", imagePosition: "center 80%" },
  { name: "Annalyn Crumpton",          title: "Director of Community Service",  chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/annalyn-crumpton/",             image: "/image/annalyncrumpton.jpg", imagePosition: "center 40%", imageScale: 1.35 },
  { name: "Anika Moolan",              title: "Director of Marketing",          chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/anika-noby-moolan-13b715320/",  image: "/image/anikamoolan.jpg", imagePosition: "center 70%" },
  { name: "Annalyn Crumpton",          title: "Director of Membership",         chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/annalyn-crumpton/",             image: "/image/annalyncrumpton.jpg", imagePosition: "center 40%", imageScale: 1.35 },
  { name: "Sonal Mahapatra",           title: "Director of Chapter Standards",  chapterClass: "Iota",    linkedin: "https://www.linkedin.com/in/sonal-m-a73b8628b/",             image: "/image/sonalmahapatra.jpg", imagePosition: "center 70%" },
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
