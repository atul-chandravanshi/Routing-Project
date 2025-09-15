import React from "react";

const Home = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto mt-10 p-8">
      {/* Hero Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome Home
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your gateway to exploring our amazing platform
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        {/* Information Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            About This Page
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            distinctio necessitatibus vitae accusamus voluptatem, exercitationem
            mollitia quaerat perspiciatis.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-green-800 mb-2">
              Easy Navigation
            </h3>
            <p className="text-green-700">
              Seamlessly navigate through our application with intuitive
              routing.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-purple-800 mb-2">
              Modern Design
            </h3>
            <p className="text-purple-700">
              Built with React and styled with Tailwind CSS for a modern look.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            Explore More
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
