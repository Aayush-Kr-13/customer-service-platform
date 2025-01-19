import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Intercom from '@intercom/messenger-js-sdk';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    const inquiries = [
        { id: 1, name: 'John Doe', message: 'I need help with my order', time: '5m ago' },
        { id: 2, name: 'Jane Smith', message: 'How do I reset my password?', time: '15m ago' },
        { id: 3, name: 'Bob Johnson', message: 'Where is my refund?', time: '1h ago' },
    ];

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const userData = JSON.parse(data);
        setUserInfo(userData);

        if (userData) {
            Intercom({
                app_id: 'ysd5wj1r',
                user_id: userData.id,
                name: userData.name,
                email: userData.email,
                created_at: Math.floor(new Date(userData.createdAt).getTime() / 1000),
            });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user-info');
        navigate('/login');
    };

    const handleServiceRequest = (category) => {
        navigate(`/service-request/${category}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                            TensorGo
                        </h1>
                        <div className="flex items-center space-x-4">
                            <img
                                src={userInfo?.image || '/api/placeholder/80/80'}
                                alt={userInfo?.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-teal-400"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">{userInfo?.name || 'Aayush Kumar'}</h2>
                                <button
                                    onClick={handleLogout}
                                    className="mt-2 bg-teal-600 px-4 py-1.5 rounded-md hover:bg-teal-500 transition-colors text-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Support Request Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 text-teal-300">Request Support</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { category: 'general-queries', label: 'General Queries' },
                                { category: 'product-features', label: 'Product Features' },
                                { category: 'product-pricing', label: 'Product Pricing' },
                                { category: 'feature-implementation', label: 'Feature Implementation' }
                            ].map((button) => (
                                <button
                                    key={button.category}
                                    onClick={() => handleServiceRequest(button.category)}
                                    className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform w-full"
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Customer Inquiries */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Customer Inquiries</h2>
                            <div className="space-y-4">
                                {inquiries.map((inquiry) => (
                                    <button
                                        key={inquiry.id}
                                        className="w-full bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 shadow-md transition-colors"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                                                <span>{inquiry.name[0]}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium truncate">{inquiry.name}</h3>
                                                <p className="text-gray-400 text-sm truncate">{inquiry.message}</p>
                                                <span className="text-gray-500 text-xs">{inquiry.time}</span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chat Section */}
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Chat Support</h2>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                                <p className="text-gray-300">
                                    Click the button below to chat with us for instant support.
                                </p>
                            </div>
                            <button
                                onClick={() => window.Intercom('show')}
                                className="bg-blue-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-500 transition-colors"
                                >
                                Open Chat Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
