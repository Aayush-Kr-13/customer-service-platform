import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { useNavigate } from 'react-router-dom';

const ProductPricing = () => {
    const navigate = useNavigate();

    // Initialize Intercom Chat Support
    useEffect(() => {
        Intercom({
            app_id: 'ysd5wj1r',
        });
    }, []);

    const pricingPlans = [
        {
            title: 'Basic Plan',
            price: '$19/month',
            features: [
                'Access to core features',
                'Up to 3 projects',
                'Email support',
            ],
        },
        {
            title: 'Pro Plan',
            price: '$49/month',
            features: [
                'Everything in Basic',
                'Unlimited projects',
                'Priority support',
                'Advanced analytics',
            ],
        },
        {
            title: 'Enterprise Plan',
            price: 'Custom Pricing',
            features: [
                'Dedicated account manager',
                'Custom integrations',
                '24/7 support',
                'Enterprise-grade security',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold">Product Pricing</h1>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                    >
                        Back to Dashboard
                    </button>
                </div>

                {/* Pricing Section */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Choose the Right Plan for You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-700 rounded-md shadow hover:bg-gray-600 transition-colors"
                            >
                                <h3 className="text-xl font-medium mb-2">{plan.title}</h3>
                                <p className="text-2xl font-semibold mb-4">{plan.price}</p>
                                <ul className="text-gray-300 mb-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="mb-2">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="bg-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition-colors">
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Support Section */}
                <div className="mt-12 bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Need Help with Pricing?</h2>
                    <p className="text-gray-400 mb-4">
                        Have questions about our plans? Click the button below to chat with our support team.
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

export default ProductPricing;
