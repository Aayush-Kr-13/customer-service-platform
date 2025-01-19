import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { useNavigate } from 'react-router-dom';

const ProductFeatures = () => {
    const navigate = useNavigate();

    // Initialize Intercom Chat Support
    useEffect(() => {
        Intercom({
            app_id: 'ysd5wj1r',
        });
    }, []);

    const featuresList = [
        {
            title: 'Real-Time Analytics',
            description: 'Track your data in real-time with detailed visualizations and insights that empower your decisions.',
        },
        {
            title: 'AI-Powered Recommendations',
            description: 'Leverage AI to receive personalized recommendations and automate key workflows effortlessly.',
        },
        {
            title: 'Customizable Dashboards',
            description: 'Create dashboards that suit your needs, with drag-and-drop widgets and advanced filtering options.',
        },
        {
            title: 'Seamless Integrations',
            description: 'Integrate with popular tools like Slack, Zapier, and Google Workspace to enhance your productivity.',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold">Product Features</h1>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                    >
                        Back to Dashboard
                    </button>
                </div>

                {/* Features Section */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuresList.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-700 rounded-md shadow hover:bg-gray-600 transition-colors"
                            >
                                <h3 className="text-xl font-medium">{feature.title}</h3>
                                <p className="text-gray-300 mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Support Section */}
                <div className="mt-12 bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
                    <p className="text-gray-400 mb-4">
                        Have questions about our features? Click the button below to chat with our support team.
                    </p>
                    <button
                        onClick={() => window.Intercom('show')}
                        className="bg-blue-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-500 transition-colors"
                    >
                        Open Chat Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;
