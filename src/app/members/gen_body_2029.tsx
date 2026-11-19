import { MemberGrid } from "@/components";

type ClassMember = {
  name: string;
  linkedin?: string;
  image: string;
  imagePosition?: string;
  imageScale?: number;
  class: string;
};

const class_2029: ClassMember[] = [
  {
    "name": "Agastya Maheshwari",
    "linkedin": "https://www.linkedin.com/in/agastyamaheshwari22",
    "image": "/image/agastyamaheshwari.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Anika Moolan",
    "linkedin": "https://www.linkedin.com/in/anika-noby-moolan-13b715320/",
    "image": "/image/anikamoolan.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Avneesh Tamhankar",
    "linkedin": "https://www.linkedin.com/in/avneesh-tamhankar/",
    "image": "/image/avneeshtamhankar.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Harsha Thayyil",
    "linkedin": "https://www.linkedin.com/in/harsha-thayyil-8a42112a3/",
    "image": "/image/harshathayyil.jpg",
    "imagePosition": "center 40%",
    "class": "Iota"
  },
  {
    "name": "Molly Yang",
    "linkedin": "https://www.linkedin.com/in/molly-yang-/",
    "image": "/image/mollyyang.jpg",
    "imagePosition": "center 45%",
    "class": "Iota"
  },
  {
    "name": "Rithanya Venkatesh",
    "linkedin": "https://www.linkedin.com/in/rithanya-venkatesh",
    "image": "/image/rithanyavenkatesh.jpg",
    "imagePosition": "center 30%",
    "class": "Iota"
  },
  {
    "name": "Samuel Jiang",
    "linkedin": "https://www.linkedin.com/in/samj45/",
    "image": "/image/samueljiang.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Sonal Mahapatra",
    "linkedin": "https://www.linkedin.com/in/sonal-m-a73b8628b/",
    "image": "/image/sonalmahapatra.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Sriraam Kumar",
    "linkedin": "https://www.linkedin.com/in/sskumar6/",
    "image": "/image/srikumar.jpg",
    "imagePosition": "center 40%",
    "class": "Iota"
  },
  {
    "name": "Trisha Deepak",
    "linkedin": "https://www.linkedin.com/in/trisha-deepak/",
    "image": "/image/trishadeepak.jpg",
    "imagePosition": "center 45%",
    "class": "Iota"
  },
  {
    "name": "Vivek Indlamuri",
    "linkedin": "https://www.linkedin.com/in/vivek-indlamuri/",
    "image": "/image/vivekindlamuri.jpg",
    "imagePosition": "center 30%",
    "class": "Iota"
  },
  {
    "name": "Zoe Ray",
    "linkedin": "https://www.linkedin.com/in/zoe-ray-6b6000393/",
    "image": "/image/zoeray.jpg",
    "imagePosition": "center 45%",
    "class": "Iota"
  }
];

export default function Class_2029() {
  const members = [...class_2029]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((member) => ({ ...member, subtitle: "", tag: member.class }));

  if (members.length === 0) {
    return <p className="py-12 text-center text-slate-500">Class of 2029 members coming soon.</p>;
  }

  return <MemberGrid members={members} />;
}
