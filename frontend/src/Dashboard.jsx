import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [message, setMessage] = useState('');
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
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user-info');
        navigate('/login');
    };

    const handleServiceRequest = (category) => {
        navigate(`/service-request/${category}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending message:', message);
        setMessage('');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header Section with better spacing */}
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-bold">TensorGo</h1>
                        <div className="flex items-center space-x-4">
                            <img
                                src={userInfo?.image || '/api/placeholder/80/80'}
                                alt={userInfo?.name}
                                className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                                <h2 className="text-xl">{userInfo?.name || 'Aayush Kumar'}</h2>
                                <button
                                    onClick={handleLogout}
                                    className="mt-2 bg-gray-700 px-4 py-1.5 rounded-md hover:bg-gray-600 transition-colors text-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Support Request Section with consistent spacing */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Request Support</h2>
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
                                    className="bg-gray-700 px-6 py-3 rounded-md hover:bg-gray-600 transition-colors w-full"
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Grid with improved layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Customer Inquiries */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-semibold mb-6">Customer Inquiries</h2>
                            <div className="space-y-4">
                                {inquiries.map((inquiry) => (
                                    <button
                                        key={inquiry.id}
                                        className="w-full bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                            <h2 className="text-2xl font-semibold mb-6">Chat with John Doe</h2>
                            <div className="bg-gray-800 rounded-lg p-6 h-[600px] flex flex-col">
                                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                                    <div className="flex justify-end">
                                        <div className="bg-blue-600 rounded-lg p-3 max-w-md">
                                            <p>Hello! How can I help you today?</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-gray-700 rounded-lg p-3 max-w-md">
                                            <p>I need help with my recent order. It hasn't arrived yet.</p>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="flex gap-4">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;