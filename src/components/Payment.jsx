import React from "react";

const Payment = () => {
  const paymentMethods = [
    {
      name: "Credit/Debit Cards",
      description: "Fast and secure payments with all major cards.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-20 h-20 text-yellow-400"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
          <path d="M2 10h20M6 15h4" />
        </svg>
      ),
    },
    {
      name: "Cryptocurrency",
      description: "Pay with Bitcoin, Ethereum, and more for maximum privacy.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-20 h-20 text-yellow-400"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M9 9h6M9 15h6" />
        </svg>
      ),
    },
    {
      name: "Digital Wallets",
      description: "Use popular wallets for seamless transactions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-20 h-20 text-yellow-400"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M2 11h20M16 15h2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-8">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 tracking-wide">
          Payment Methods
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-2xl text-center">
          Choose from our diverse payment options tailored for your convenience.
        </p>
      </div>

      {/* Payment Methods */}
      <div className="flex justify-center gap-8 flex-wrap">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center p-6 rounded-full shadow-lg bg-opacity-5 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-500"
          >
            <div className="relative mb-4">
              {method.icon}
              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-40 blur-lg group-hover:blur-2xl transition-all"></div>
            </div>
            <h2 className="text-xl font-semibold text-yellow-300 group-hover:text-pink-500 transition-all">
              {method.name}
            </h2>
            <p className="text-sm text-gray-400 mt-2 text-center max-w-xs">
              {method.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold text-lg rounded-full shadow-md hover:scale-110 transition-transform duration-300">
          Get Started
        </button>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Payment;









