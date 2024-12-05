// import React from "react";
// import { FaMoneyBillWave, FaHeadset, FaShieldAlt } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaMoneyBillWave className="text-4xl text-accent mb-4" />,
//     title: "Instant Withdrawals",
//     description: "Cash out your winnings in seconds.",
//   },
//   {
//     icon: <FaHeadset className="text-4xl text-accent mb-4" />,
//     title: "24/7 Support",
//     description: "Our team is here to assist you anytime.",
//   },
//   {
//     icon: <FaShieldAlt className="text-4xl text-accent mb-4" />,
//     title: "Secure Transactions",
//     description: "We prioritize your privacy and security.",
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <div className="relative bg-gradient-to-b from-black via-gray-800 to-black py-20">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-5xl font-extrabold text-primary mb-12">
//           Why Choose Us?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="relative group bg-dark rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-accent"
//             >
//               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 bg-gradient-to-br from-accent via-primary to-dark rounded-2xl transition-opacity duration-300"></div>
//               <div className="relative z-10">
//                 {feature.icon}
//                 <h3 className="text-2xl font-semibold text-primary mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-lg text-gray-300">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;














// import React from "react";
// import { FaMoneyBillWave, FaHeadset, FaShieldAlt } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaMoneyBillWave className="text-4xl text-accent mb-4" />,
//     title: "Instant Withdrawals",
//     description: "Cash out your winnings in seconds.",
//   },
//   {
//     icon: <FaHeadset className="text-4xl text-accent mb-4" />,
//     title: "24/7 Support",
//     description: "Our team is here to assist you anytime.",
//   },
//   {
//     icon: <FaShieldAlt className="text-4xl text-accent mb-4" />,
//     title: "Secure Transactions",
//     description: "We prioritize your privacy and security.",
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <div className="relative bg-gradient-to-b from-black via-gray-800 to-black py-20">
//       <div className="container mx-auto px-6 text-center">
//         {/* Gradient Heading */}
//         <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white mb-12">
//           Advertising
//         </h2>
//         <p className="text-lg text-gray-400 mb-8">
//           Play with confidence and trust—experience the best platform for gaming.
//         </p>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="relative group bg-dark rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-accent"
//             >
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 bg-gradient-to-br from-accent via-primary to-dark rounded-2xl transition-opacity duration-300"></div>
              
//               <div className="relative z-10">
//                 {/* Feature Icon */}
//                 {feature.icon}

//                 {/* Feature Title */}
//                 <h3 className="text-2xl font-semibold text-primary mb-4">
//                   {feature.title}
//                 </h3>

//                 {/* Feature Description */}
//                 <p className="text-lg text-gray-300">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;











import React from "react";
import { FaMoneyBillWave, FaHeadset, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaMoneyBillWave className="text-4xl text-accent mb-4" />,
    title: "Instant Withdrawals",
    description: "Cash out your winnings within seconds. No delays, no hassle!",
  },
  {
    icon: <FaHeadset className="text-4xl text-accent mb-4" />,
    title: "24/7 Customer Support",
    description: "Our support team is available round the clock to assist you.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-accent mb-4" />,
    title: "Secure Transactions",
    description: "Enjoy safe and encrypted payments every time you play.",
  },
];

const FeatureSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-800 to-black py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Header Section */}
          <div>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white mb-6">
              Why Bet With Us?
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Step into the world of unbeatable gaming with fast withdrawals, top-tier security, and unparalleled customer support. Whether you're a seasoned player or new to betting, we’re here to ensure your experience is thrilling, secure, and rewarding.
            </p>
            <p className="text-lg text-gray-400">
              From real-time games to exciting promotions, we are your trusted platform for gaming excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-dark rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-accent"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 bg-gradient-to-br from-accent via-primary to-dark rounded-2xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Feature Icon */}
                  {feature.icon}

                  {/* Feature Title */}
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-lg text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
