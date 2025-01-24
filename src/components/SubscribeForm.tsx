import React, { useState } from 'react';

const SubscribeForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEmail('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black px-4">
            <div className="bg-white text-center rounded-3xl p-6 max-w-xs md:max-w-lg lg:max-w-2xl w-full shadow-lg">
                <div className="mb-4">
                    <img
                        src="https://res.cloudinary.com/dcxa0ozit/image/upload/v1737749242/paper-plane_qwifcp.svg"
                        alt="Paper Plane Icon"
                        className="mx-auto w-12 h-12 md:w-16 md:h-16"
                    />
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-black mb-4">SUBSCRIBE</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 text-center mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-yellow-500 transition"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl text-center max-w-xs md:max-w-md w-full mx-4">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Email recibido</h2>
                        <button
                            onClick={closeModal}
                            className="bg-yellow-400 text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-yellow-500 transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscribeForm;
