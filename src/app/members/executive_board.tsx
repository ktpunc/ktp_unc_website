import Link from 'next/link';

const executiveMembers = [
    {
        name: 'Sidney Ross',
        title: 'President',
        linkedin: 'https://www.linkedin.com/in/sidney-ross-950aa830a/',
        image: '/image/sidney.jpeg',
    },
    {
        name: 'Liliana Silva',
        title: 'Vice President',
        linkedin: 'https://www.linkedin.com/in/liliana-silva-713690286/',
        image: '/image/liliana.jpeg',
    },
    {
        name: 'Anish Voota',
        title: 'Treasurer',
        linkedin: 'https://www.linkedin.com/in/anishvoota/',
        image: '/image/anishv.jpeg',
    },
    {
        name: 'Kibby Hyacinth Pangilinan',
        title: 'Secretary',
        linkedin: 'https://www.linkedin.com/in/kpangilinan/',
        image: '/image/kibby.jpeg',
    },
    {
        name: 'Kabir Grewal',
        title: 'Director of Recruitment',
        linkedin: 'https://www.linkedin.com/in/kabir-grewal12/',
        image: '/image/harper.jpeg',
    },
    {
        name: 'Dylan Cialkowski',
        title: 'Director of Recruitment',
        linkedin: 'https://www.linkedin.com/in/dylan-cialkowski/',
        image: '/image/dylanc.jpeg',
    },
    {
        name: 'Harper Cunningham',
        title: 'Director of NME',
        linkedin: 'https://www.linkedin.com/in/harper-cunningham-60b364281/',
        image: '/image/harper.jpeg',
    },
    {
        name: 'Talia Spaulding',
        title: 'Director of NME',
        linkedin: 'https://www.linkedin.com/in/talia-spaulding/',
        image: '/image/talia.jpeg',
    },
    {
        name: 'Ross Guinan',
        title: 'Director of Social Engagement',
        linkedin: 'https://www.linkedin.com/in/ross-guinan-96268a255/',
        image: '/image/ross.jpg',
    },
    {
        name: 'Arame Thiam',
        title: 'Director of DEI',
        linkedin: 'https://www.linkedin.com/in/arame-thiam-59b84521b/',
        image: '/image/arame.jpeg',
    },
    {
        name: 'Nicholas Sanaie',
        title: 'Director of Professional Development',
        linkedin: 'https://www.linkedin.com/in/nsanaie/',
        image: '/image/nick.jpeg',
    },
    {
        name: 'Yewon Song',
        title: 'Director of Technical Enrichment',
        linkedin: 'https://www.linkedin.com/in/yewonsong/',
        image: '/image/yewon.jpeg',
    },
    {
        name: 'Asthav Sagar',
        title: 'Director of Community Service',
        linkedin: 'https://www.linkedin.com/in/asthav-sagar/',
        image: '/image/asthav.jpeg',
    },
    {
        name: 'Nina Dhillon',
        title: 'Director of Marketing',
        linkedin: 'https://www.linkedin.com/in/nina-dhillon-926595214/',
        image: '/image/nina.jpeg',
    },
    {
        name: 'Katie Brown',
        title: 'Director of Membership',
        linkedin: 'https://www.linkedin.com/in/kgbrown5/',
        image: '/image/katie.png',
    },
    {
        name: 'Abhiraam Aremanda',
        title: 'Director of Chapter Standards',
        linkedin: 'https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/',
        image: '/image/abhi.jpeg',
    },
];



const ExecutiveBoard = () => {
    return (
        <div className="w-full bg-ruddyBlue py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-white mb-8">Executive Board</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {executiveMembers.map((member) => (
                        <Link
                            key={member.name}
                            href={member.linkedin}
                            passHref
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-center bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <img
                                src={member.image}
                                alt={`Photo of ${member.name}`}
                                className="mx-auto rounded-full w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-transform duration-200 hover:scale-110"
                            />
                            {/* Name and Title */}
                            <h2 className="text-xl font-semibold text-black">{member.name}</h2>
                            <p className="text-black">{member.title}</p>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-opacity duration-300 flex items-center justify-center">
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExecutiveBoard;
