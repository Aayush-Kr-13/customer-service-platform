import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { useNavigate } from 'react-router-dom';

const GeneralQueries = () => {
    const navigate = useNavigate();

    // Intercom Chat Support Initialization
    useEffect(() => {
        Intercom({
            app_id: 'ysd5wj1r',
        });
    }, []);

    const faqList = [
        {
            question: 'How can I create an account?',
            answer: 'To create an account, click on the "Sign Up" button on the login page and fill in your details.',
        },
        {
            question: 'How do I reset my password?',
            answer: 'Click on "Forgot Password" on the login screen and follow the instructions sent to your email.',
        },
        {
            question: 'Where can I find my order history?',
            answer: 'Go to your profile and click on the "Order History" tab to view all your past orders.',
        },
        {
            question: 'What are the payment options available?',
            answer: 'We accept all major credit cards, debit cards, UPI, and PayPal for payments.',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold">General Queries</h1>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                    >
                        Back to Dashboard
                    </button>
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqList.map((faq, index) => (
                            <div key={index} className="p-4 bg-gray-700 rounded-md shadow hover:bg-gray-600 transition-colors">
                                <h3 className="font-medium">{faq.question}</h3>
                                <p className="text-gray-300 mt-2">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Support Section */}
                <div className="mt-12 bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
                    <p className="text-gray-400 mb-4">Click the chat button below to connect with our support team.</p>
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

export default GeneralQueries;
