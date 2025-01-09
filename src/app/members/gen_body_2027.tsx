import Link from 'next/link';

const class_2027 = [
    {
        name: 'Abhiraam Aremanda',
        linkedin: 'https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/',
        image: '/image/abhi.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Ari Gomez',
        linkedin: 'https://www.linkedin.com/in/aracely-gomez-a68b002ab/',
        image: '/image/ari.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Caroline Bryan',
        linkedin: 'https://www.linkedin.com/in/caroline-bryan/',
        image: '/image/caroline.jpg',
        class: 'Zeta'
    },
    {
        name: 'Chris Zou',
        linkedin: 'https://www.linkedin.com/in/chris-zou/',
        image: '/image/chris.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Daniel Wang',
        linkedin: 'https://www.linkedin.com/in/daniel-wang23/',
        image: '/image/daniel.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Donn Rhys Mondano',
        linkedin: 'https://www.linkedin.com/in/donn-rhys-mondano-15abb0248/',
        image: '/image/rhys.jpg',
        class: 'Zeta'
    },
    {
        name: 'Katie Brown',
        linkedin: 'https://www.linkedin.com/in/kgbrown5/',
        image: '/image/katie.png',
        class: 'Zeta'
    },
    {
        name: 'Megha Thumma',
        linkedin: 'https://www.linkedin.com/in/meghathumma/',
        image: '/image/megha.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Nithya Indlamuri',
        linkedin: 'https://www.linkedin.com/in/nithya-indlamuri-486bb2296/',
        image: '/image/nithya.jpeg',
        class: 'Zeta'
    },
    {
        name: 'Tracy Dang',
        linkedin: 'https://www.linkedin.com/in/tracy-dang-27116a244/',
        image: '/image/tracy.jpeg',
        class: 'Zeta'
    },
];

const ExecutiveBoard = () => {
    return (
        <div className="w-full bg-ruddyBlue py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-white mb-8">Class of 2027</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {class_2027.map((member, index) => {
                        // Retain specific column positioning for certain members
                        let colStart = 'auto';
                        if (index === 8) colStart = 'lg:col-start-2';
                        if (index === 9) colStart = 'lg:col-start-3';

                        return (
                            <Link
                                key={member.name}
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative text-center bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${colStart}`}
                            >
                                <img
                                    src={member.image}
                                    alt={`Photo of ${member.name}`}
                                    className="mx-auto rounded-full w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-transform duration-200 hover:scale-110"
                                />
                                <h2 className="text-xl font-semibold text-black">{member.name}</h2>
                                <p className="text-white">{member.class}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExecutiveBoard;