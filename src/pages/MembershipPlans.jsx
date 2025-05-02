import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaShoppingCart, FaTimes, FaStar, FaGift, FaTruck, FaHeadset, FaUsers, FaBirthdayCake } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const MembershipPlans = () => {
  const { addToCart } = useCart();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const plans = {
    monthly: [
    {
      id: 'membership-basic',
      name: 'Basic',
      price: 9.99,
      duration: 'Monthly',
      features: [
        'Free standard shipping',
        'Early access to sales',
        '10% off first purchase',
        'Member-only newsletter'
      ],
      notIncluded: [
        'Priority customer service',
        'Member-exclusive products',
        'Free returns'
      ],
      color: 'from-blue-500 to-blue-700',
      popular: false
    },
    {
      id: 'membership-premium',
      name: 'Premium',
      price: 19.99,
      duration: 'Monthly',
      features: [
        'Free express shipping',
        'Early access to sales',
        '15% off first purchase',
        'Member-only newsletter',
        'Priority customer service',
        'Member-exclusive products'
      ],
      notIncluded: [
        'Free returns'
      ],
      color: 'from-primary to-purple-600',
      popular: true
    },
    {
      id: 'membership-ultimate',
      name: 'Ultimate',
      price: 29.99,
      duration: 'Monthly',
      features: [
        'Free express shipping',
        'Early access to sales',
        '20% off first purchase',
        'Member-only newsletter',
        'Priority customer service',
        'Member-exclusive products',
        'Free returns',
        'Personal shopper'
      ],
      notIncluded: [],
      color: 'from-yellow-500 to-amber-600',
      popular: false
    }
    ],
    yearly: [
      {
        id: 'membership-basic-yearly',
        name: 'Basic',
        price: 99.99,
        duration: 'Yearly',
        features: [
          'Free standard shipping',
          'Early access to sales',
          '10% off all purchases',
          'Member-only newsletter'
        ],
        notIncluded: [
          'Priority customer service',
          'Member-exclusive products',
          'Free returns'
        ],
        color: 'from-blue-500 to-blue-700',
        popular: false
      },
      {
        id: 'membership-premium-yearly',
        name: 'Premium',
        price: 199.99,
        duration: 'Yearly',
        features: [
          'Free express shipping',
          'Early access to sales',
          '15% off all purchases',
          'Member-only newsletter',
          'Priority customer service',
          'Member-exclusive products'
        ],
        notIncluded: [
          'Free returns'
        ],
        color: 'from-primary to-purple-600',
        popular: true
      },
      {
        id: 'membership-ultimate-yearly',
        name: 'Ultimate',
        price: 299.99,
        duration: 'Yearly',
        features: [
          'Free express shipping',
          'Early access to sales',
          '20% off all purchases',
          'Member-only newsletter',
          'Priority customer service',
          'Member-exclusive products',
          'Free returns',
          'Personal shopper'
        ],
        notIncluded: [],
        color: 'from-yellow-500 to-amber-600',
        popular: false
      }
    ]
  };

  const handleAddToCart = (plan) => {
    const membershipProduct = {
      id: plan.id,
      name: `${plan.name} Membership`,
      price: plan.price,
      image: '/images/membership-card.jpg',
      description: `${plan.name} membership plan with exclusive benefits`,
      category: 'membership',
      isMembership: true,
      features: plan.features
    };
    
    addToCart(membershipProduct, 1);
    setSelectedPlan(plan.id);
    setAddedToCart(true);
    
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const benefits = [
    {
      icon: <FaGift className="h-8 w-8 text-primary" />,
      title: 'Exclusive Discounts',
      description: 'Members receive special pricing and early access to sales events before they\'re available to the public.'
    },
    {
      icon: <FaTruck className="h-8 w-8 text-primary" />,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders with no minimum purchase required.'
    },
    {
      icon: <FaStar className="h-8 w-8 text-primary" />,
      title: 'Member-Only Products',
      description: 'Access exclusive products only available to members.'
    },
    {
      icon: <FaHeadset className="h-8 w-8 text-primary" />,
      title: 'Priority Support',
      description: 'Get fast-track customer service with dedicated support agents.'
    },
    {
      icon: <FaBirthdayCake className="h-8 w-8 text-primary" />,
      title: 'Birthday Rewards',
      description: 'Receive a special gift or discount during your birthday month.'
    },
    {
      icon: <FaUsers className="h-8 w-8 text-primary" />,
      title: 'Community Access',
      description: 'Join our exclusive online community to connect with other members and participate in special events.'
    }
  ];

  const faqs = [
    {
      question: 'How do I cancel my membership?',
      answer: 'You can cancel your membership at any time from your account settings. Your benefits will continue until the end of your billing period.',
      icon: <FaTimes className="h-5 w-5" />
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your membership tier at any time. The new pricing will be applied at your next billing cycle.',
      icon: <FaCheck className="h-5 w-5" />
    },
    {
      question: 'Is there a commitment period?',
      answer: 'No, all our membership plans are month-to-month with no long-term commitment required.',
      icon: <FaStar className="h-5 w-5" />
    },
    {
      question: 'How do I apply my member discount?',
      answer: 'Your discount will be automatically applied at checkout when you\'re logged in to your account.',
      icon: <FaGift className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose Your Perfect Plan
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join our exclusive membership program and unlock premium benefits designed to enhance your shopping experience
          </motion.p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'monthly'
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setActiveTab('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'yearly'
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly Billing
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans[activeTab].map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`bg-dark-800 rounded-xl overflow-hidden relative transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="ml-2 text-lg text-gray-200">/{plan.duration.toLowerCase()}</span>
                </div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start opacity-50">
                      <FaTimes className="h-5 w-5 text-red-500 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleAddToCart(plan)}
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                    selectedPlan === plan.id && addedToCart
                      ? 'bg-green-600 hover:bg-green-700'
                      : plan.popular
                      ? 'bg-primary hover:bg-primary-600 shadow-glow'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <FaShoppingCart className="h-5 w-5" />
                  {selectedPlan === plan.id && addedToCart ? 'Added to Cart!' : 'Get Started'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-dark-800 rounded-2xl overflow-hidden p-12 mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl" />
          <div className="relative">
            <motion.h2 
              className="text-4xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Membership Benefits
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group p-8 bg-dark-700/50 backdrop-blur-sm rounded-xl hover:bg-dark-600/50 transition-all duration-300 border border-gray-700/50 hover:border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
            </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="bg-dark-800 rounded-2xl overflow-hidden p-12 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl" />
          <div className="relative">
            <motion.h2 
              className="text-4xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-700/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-dark-600/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-primary">
                        {faq.icon}
            </div>
                      <h3 className="text-xl font-medium text-white">
                        {faq.question}
                      </h3>
            </div>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedFaq === index ? 'auto' : 0,
                      opacity: expandedFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400">
                      {faq.answer}
            </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MembershipPlans; 