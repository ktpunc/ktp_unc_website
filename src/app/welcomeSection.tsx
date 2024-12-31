import React from 'react';

const WelcomeSection = () => {
    return (
        <div
            className="p-12"
            style={{
                background: 'linear-gradient(to bottom, #AED8F3, #4395CB, #FFFFFF)',
            }}
        >
            <div
                className="max-w-4xl mx-auto rounded-lg shadow-lg bg-white text-center p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                    Welcome to Our Community
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Together, we inspire, innovate, and create a lasting impact. Explore our values, connect with our story, and discover how we make a difference.
                </p>
                {/* Desktop and Tablet Layout */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg shadow-md bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Innovation</h3>
                        <p className="text-sm text-gray-500">
                            We push boundaries and embrace new ideas to build a better future.
                        </p>
                    </div>
                    <div className="p-4 rounded-lg shadow-md bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Collaboration</h3>
                        <p className="text-sm text-gray-500">
                            Working together to achieve greater success for everyone.
                        </p>
                    </div>
                    <div className="p-4 rounded-lg shadow-md bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Empowerment</h3>
                        <p className="text-sm text-gray-500">
                            Supporting individuals to grow, lead, and make an impact.
                        </p>
                    </div>
                </div>
                {/* Mobile Layout */}
                <div className="md:hidden space-y-6">
                    <div className="p-4 rounded-lg shadow-md bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Innovation</h3>
                        <p className="text-sm text-gray-500">
                            We push boundaries and embrace new ideas to build a better future.
                        </p>
                    </div>
                    <div className="p-4 rounded-lg shadow-md bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Collaboration</h3>
                        <p className="text-sm text-gray-500">
                            Working together to achieve greater success for everyone.
                        </p>
                    </div>
                    <div className="p-4 rounded-lg shadow-md bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Empowerment</h3>
                        <p className="text-sm text-gray-500">
                            Supporting individuals to grow, lead, and make an impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;