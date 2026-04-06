import { MemberGrid } from "@/components";

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
  const members = class_2028.map((member) => ({
    ...member,
    subtitle: "",
    tag: member.class,
  }));

  return <MemberGrid members={members} />;
}
