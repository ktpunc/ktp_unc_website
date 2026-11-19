import { MemberGrid } from "@/components";

const class_2028 = [
  {
    "name": "Adithi Srikrishna",
    "linkedin": "https://www.linkedin.com/in/adithi-srikrishna-a28b802aa/",
    "image": "/image/adithisrikrishna.jpg",
    "imagePosition": "center 35%",
    "class": "Theta"
  },
  {
    "name": "Ally Organo",
    "linkedin": "https://www.linkedin.com/in/miralyssaorgano/",
    "image": "/image/ally.jpg",
    "imagePosition": "center 40%",
    "class": "Theta"
  },
  {
    "name": "Anirudh Dhawan",
    "linkedin": "https://www.linkedin.com/in/anirudh-k-dhawan/",
    "image": "/image/anirudh.jpg",
    "imagePosition": "center 45%",
    "class": "Theta"
  },
  {
    "name": "Anish Patel",
    "linkedin": "https://www.linkedin.com/in/anish-patel-254a18264/",
    "image": "/image/anishp.jpeg",
    "class": "Eta"
  },
  {
    "name": "Anish Voota",
    "linkedin": "https://www.linkedin.com/in/anishvoota/",
    "image": "/image/anishv.jpeg",
    "class": "Eta"
  },
  {
    "name": "Anna Pham",
    "linkedin": "https://www.linkedin.com/in/anna-pham-76b624283/",
    "image": "/image/annapham.jpg",
    "imagePosition": "center 25%",
    "class": "Theta"
  },
  {
    "name": "Annalyn Crumpton",
    "linkedin": "https://www.linkedin.com/in/annalyn-crumpton/",
    "image": "/image/annalyncrumpton.jpg",
    "imagePosition": "center 40%",
    "imageScale": 1.35,
    "class": "Iota"
  },
  {
    "name": "Anthony Wang",
    "linkedin": "https://www.linkedin.com/in/anwang132",
    "image": "/image/anthonywang.jpg",
    "imagePosition": "center 30%",
    "class": "Iota"
  },
  {
    "name": "Asthav Sagar",
    "linkedin": "https://www.linkedin.com/in/asthav-sagar/",
    "image": "/image/asthav.jpeg",
    "class": "Eta"
  },
  {
    "name": "Ben Yang",
    "linkedin": "https://www.linkedin.com/in/ben-yang-03b268235/",
    "image": "/image/ben.jpeg",
    "class": "Eta"
  },
  {
    "name": "Brandon Ge",
    "linkedin": "https://www.linkedin.com/in/brandonyge/",
    "image": "/image/brandonge.jpg",
    "imagePosition": "center 45%",
    "class": "Theta"
  },
  {
    "name": "Chet Allen",
    "linkedin": "https://www.linkedin.com/in/chet-allen-v/",
    "image": "/image/chet_headshot.jpg",
    "imagePosition": "center 50%",
    "class": "Theta"
  },
  {
    "name": "Douglas Parker",
    "linkedin": "https://www.linkedin.com/in/douglas-samuel-parker/",
    "image": "/image/douglasparker.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Dylan Cialkowski",
    "linkedin": "https://www.linkedin.com/in/dylan-cialkowski/",
    "image": "/image/dylanc.jpeg",
    "class": "Eta"
  },
  {
    "name": "Jack Panning",
    "linkedin": "https://www.linkedin.com/in/jack-panning/",
    "image": "/image/jackpanning.jpg",
    "imagePosition": "center 30%",
    "class": "Theta"
  },
  {
    "name": "Jason Charwin",
    "linkedin": "https://www.linkedin.com/in/jasoncharwin",
    "image": "/image/jasoncharwin.jpg",
    "imagePosition": "center 30%",
    "class": "Theta"
  },
  {
    "name": "John Harmon",
    "linkedin": "https://www.linkedin.com/in/john-harmon-8709025jwh/",
    "image": "/image/john.jpeg",
    "class": "Eta"
  },
  {
    "name": "Neelasha Panda",
    "linkedin": "https://www.linkedin.com/in/neelasha-panda/",
    "image": "/image/neelashapanda.jpg",
    "imagePosition": "center 30%",
    "class": "Theta"
  },
  {
    "name": "Rucha Padhye",
    "linkedin": "https://www.linkedin.com/in/rucha-padhye/",
    "image": "/image/rucha.jpeg",
    "class": "Eta"
  },
  {
    "name": "Shruthi Ramireddy",
    "linkedin": "https://www.linkedin.com/in/shruthi-ramireddy",
    "image": "/image/shruthiramireddy.jpg",
    "imagePosition": "center 30%",
    "class": "Theta"
  },
  {
    "name": "Sid Arneja",
    "linkedin": "https://www.linkedin.com/in/sidarneja/",
    "image": "/image/sidarneja.jpg",
    "imagePosition": "center 40%",
    "class": "Theta"
  },
  {
    "name": "Vihan Patil",
    "linkedin": "https://www.linkedin.com/vihanp",
    "image": "/image/vihanpatil.jpg",
    "imagePosition": "center 30%",
    "class": "Iota"
  },
  {
    "name": "Yewon Song",
    "linkedin": "https://www.linkedin.com/in/yewonsong/",
    "image": "/image/yewon.jpeg",
    "class": "Eta"
  }
];


export default function Class_2028() {
  const members = [...class_2028].sort((a, b) => a.name.localeCompare(b.name)).map((member) => ({
    ...member,
    subtitle: "",
    tag: member.class,
  }));

  return <MemberGrid members={members} />;
}
