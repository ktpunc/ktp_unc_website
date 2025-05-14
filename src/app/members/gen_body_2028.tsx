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
            image: '/image/anton.jpeg',
            class: 'Eta'
        },
];

const ExecutiveBoard = () => {
    return (
        <div className="w-full bg-ruddyBlue py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-white mb-8">Class of 2028</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {class_2028.map((member) => (
                        <Link
                            key={member.name}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-center bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={member.image}
                                alt={`Photo of ${member.name}`}
                                className="mx-auto rounded-full w-24 h-24 sm:w-32 sm:h-32 mb-4"
                            />
                            <h2 className="text-xl font-semibold text-black">{member.name}</h2>
                            <p className="text-white">{member.class}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
  };
  
  export default ExecutiveBoard;