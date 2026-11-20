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
    "name": "Aarna Upadhyaya",
    "linkedin": "https://www.linkedin.com/in/aarnaupadhyaya/",
    "image": "/image/aarnaupadhyaya.jpg",
    "imagePosition": "center 85%",
    "class": "Kappa"
  },
  {
    "name": "Agastya Maheshwari",
    "linkedin": "https://www.linkedin.com/in/agastyamaheshwari22",
    "image": "/image/agastyamaheshwari.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Amogh Belur",
    "linkedin": "https://www.linkedin.com/in/amoghbelur/",
    "image": "/image/amoghbelur.jpg",
    "imagePosition": "center 75%",
    "class": "Kappa"
  },
  {
    "name": "Anika Moolan",
    "linkedin": "https://www.linkedin.com/in/anika-noby-moolan-13b715320/",
    "image": "/image/anikamoolan.jpg",
    "imagePosition": "center 70%",
    "class": "Iota"
  },
  {
    "name": "Arjun Bhonsle",
    "linkedin": "https://www.linkedin.com/in/arjun-bhonsle/",
    "image": "/image/arjunbhonsle.jpg",
    "imagePosition": "center 85%",
    "class": "Kappa"
  },
  {
    "name": "Avneesh Tamhankar",
    "linkedin": "https://www.linkedin.com/in/avneesh-tamhankar/",
    "image": "/image/avneeshtamhankar.jpg",
    "imagePosition": "center 35%",
    "class": "Iota"
  },
  {
    "name": "Ayush Sagar",
    "linkedin": "https://www.linkedin.com/in/ayush-sagar/",
    "image": "/image/ayushsagar.jpg",
    "imagePosition": "center 80%",
    "class": "Kappa"
  },
  {
    "name": "Dao Bui",
    "linkedin": "https://www.linkedin.com/in/daotbui/",
    "image": "/image/daobui.jpg",
    "imagePosition": "center 85%",
    "class": "Kappa"
  },
  {
    "name": "Eshaan Raj",
    "linkedin": "https://www.linkedin.com/in/eshaan-raj-0ab402256/",
    "image": "/image/eshaanraj.jpg",
    "imagePosition": "center 85%",
    "class": "Kappa"
  },
  {
    "name": "Fernando Sanchez",
    "linkedin": "https://www.linkedin.com/in/fernando-sanchez-1b899232a/",
    "image": "/image/fernandosanchez.jpg",
    "imagePosition": "center 75%",
    "class": "Kappa"
  },
  {
    "name": "Harsha Thayyil",
    "linkedin": "https://www.linkedin.com/in/harsha-thayyil-8a42112a3/",
    "image": "/image/harshathayyil.jpg",
    "imagePosition": "center 40%",
    "class": "Iota"
  },
  {
    "name": "Hriday Muthukrishnan",
    "linkedin": "https://www.linkedin.com/in/hriday-m/",
    "image": "/image/hridaymuthukrishnan.jpg",
    "imagePosition": "center 75%",
    "class": "Kappa"
  },
  {
    "name": "Katie Shang",
    "linkedin": "https://www.linkedin.com/in/katieshang/",
    "image": "/image/katieshang.png",
    "imagePosition": "center top",
    "class": "Kappa"
  },
  {
    "name": "Milena Chiavegatto",
    "linkedin": "https://www.linkedin.com/in/milena-chiavegatto/",
    "image": "/image/milenachiavegatto.jpg",
    "imagePosition": "center 70%",
    "class": "Kappa"
  },
  {
    "name": "Molly Yang",
    "linkedin": "https://www.linkedin.com/in/molly-yang-/",
    "image": "/image/mollyyang.jpg",
    "imagePosition": "center 45%",
    "class": "Iota"
  },
  {
    "name": "Rhythanyaa Nagaraja",
    "linkedin": "https://www.linkedin.com/in/rhythanyaa-nagaraja/",
    "image": "/image/rhythanyaanagaraja.jpg",
    "imagePosition": "center 80%",
    "class": "Kappa"
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
    "imagePosition": "center 70%",
    "class": "Iota"
  },
  {
    "name": "Sravya Chebrolu",
    "linkedin": "https://www.linkedin.com/in/sravya-chebrolu/",
    "image": "/image/sravyachebrolu.jpg",
    "imagePosition": "center 85%",
    "class": "Kappa"
  },
  {
    "name": "Sriraam Kumar",
    "linkedin": "https://www.linkedin.com/in/sskumar6/",
    "image": "/image/srikumar.jpg",
    "imagePosition": "center 40%",
    "class": "Iota"
  },
  {
    "name": "Tanish Dongre",
    "linkedin": "https://www.linkedin.com/in/tanish-dongre/",
    "image": "/image/tanishdongre.jpg",
    "imagePosition": "center 80%",
    "class": "Kappa"
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
    "name": "Yuxuan Li",
    "linkedin": "https://www.linkedin.com/in/yuxuan-li-math/",
    "image": "/image/yuxuanli.jpg",
    "imagePosition": "center 75%",
    "class": "Kappa"
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
