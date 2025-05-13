import Link from 'next/link';

const executiveMembers = [
    {
        name: 'Srikar Sannidhi',
        title: 'President',
        linkedin: 'https://www.linkedin.com/in/srikarsannidhi/',
        image: '/image/srikar.jpeg',
    },
    {
        name: 'Caroline Bryan',
        title: 'Vice President',
        linkedin: 'https://www.linkedin.com/in/caroline-bryan/',
        image: '/image/caroline.jpg',
    },
    {
        name: 'Abhiraam Aremanda',
        title: 'Treasurer',
        linkedin: 'https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/',
        image: '/image/abhi.jpeg',
    },
    {
        name: 'Ari Gomez',
        title: 'Secretary',
        linkedin: 'https://www.linkedin.com/in/aracely-gomez-a68b002ab/',
        image: '/image/ari.jpeg',
    },
    {
        name: 'Harper Cunningham',
        title: 'Director of Recruitment',
        linkedin: 'https://www.linkedin.com/in/harper-cunningham-60b364281/',
        image: '/image/harper.jpeg',
    },
    {
        name: 'Katie Brown',
        title: 'Director of Recruitment',
        linkedin: 'https://www.linkedin.com/in/kgbrown5/',
        image: '/image/katie.png',
    },
    {
        name: 'Jules Kim',
        title: 'Director of NME',
        linkedin: 'https://www.linkedin.com/in/juha-kim-b2b664279/',
        image: '/image/jules.jpeg',
    },
    {
        name: 'Carmine Anderson-Falconi',
        title: 'Director of NME',
        linkedin: 'https://www.linkedin.com/in/carmine-anderson-falconi-561824204/',
        image: '/image/carmine.jpg',
    },
    {
        name: 'Tracy Dang',
        title: 'Director of Social',
        linkedin: 'https://www.linkedin.com/in/tracy-dang-27116a244/',
        image: '/image/tracy.jpeg',
    },
    {
        name: 'Jordan Weinstein',
        title: 'Director of DEI',
        linkedin: 'https://www.linkedin.com/in/jordan-weinstein-aa50661ab/',
        image: '/image/jordan.jpeg',
    },
    {
        name: 'Akhil Motiramani',
        title: 'Director of Professional Development',
        linkedin: 'https://www.linkedin.com/in/akhilmotiramani/',
        image: '/image/akhil.jpeg',
    },
    {
        name: 'Megha Thumma',
        title: 'Director of Technical Enrichment',
        linkedin: 'https://www.linkedin.com/in/meghathumma/',
        image: '/image/megha.jpeg',
    },
    {
        name: 'Benny Rakower',
        title: 'Director of Community Service',
        linkedin: 'https://www.linkedin.com/in/benny-rakower/',
        image: '/image/benny.jpg',
    },
    {
        name: 'Angelina León',
        title: 'Director of Marketing',
        linkedin: 'https://www.linkedin.com/in/angelina-le%C3%B3n/',
        image: '/image/angelina.jpeg',
    },
    {
        name: 'Nithya Indlamuri',
        title: 'Director of Membership',
        linkedin: 'https://www.linkedin.com/in/nithya-indlamuri-486bb2296/',
        image: '/image/nithya.jpeg',
    },
    {
        name: 'Kibby Hyacinth Pangilinan',
        title: 'Director of Chapter Standards',
        linkedin: 'https://www.linkedin.com/in/kpangilinan/',
        image: '/image/kibby.jpeg',
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
