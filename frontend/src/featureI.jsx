import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { useNavigate } from 'react-router-dom';

const FeatureImplementation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Intercom({
            app_id: 'ysd5wj1r',
        });

        window.Intercom('trackEvent', 'feature-implementation-requested', {
            category: 'Feature Implementation',
            description: 'User navigated to the Feature Implementation page to request support.',
        });
    }, []);

    const featureGuides = [
        {
            title: 'Integration with Third-party APIs',
            description: 'Learn how to integrate external APIs seamlessly into your application.',
            link: '#',
        },
        {
            title: 'Custom UI Components',
            description: 'Step-by-step guide to creating reusable custom UI components.',
            link: '#',
        },
        {
            title: 'Real-time Notifications',
            description: 'Add real-time notification functionality to your app using WebSockets.',
            link: '#',
        },
        {
            title: 'Database Optimization',
            description: 'Techniques to improve database query performance and scalability.',
            link: '#',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold">Feature Implementation</h1>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                    >
                        Back to Dashboard
                    </button>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Guides for Feature Implementation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featureGuides.map((guide, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-700 rounded-md shadow hover:bg-gray-600 transition-colors"
                            >
                                <h3 className="text-xl font-medium mb-2">{guide.title}</h3>
                                <p className="text-gray-300 mb-4">{guide.description}</p>
                                <a
                                    href={guide.link}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn More →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Need Help with Feature Implementation?</h2>
                    <p className="text-gray-400 mb-4">
                        Have questions or need guidance for implementing specific features? Click the button below to
                        chat with our support team.
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

export default FeatureImplementation;
