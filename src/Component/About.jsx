import React from "react";

const About = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto mt-10 p-8">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our story, mission, and the passion that drives us forward
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-8">
        {/* Our Story Section */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            distinctio necessitatibus vitae accusamus voluptatem, exercitationem
            mollitia quaerat perspiciatis ipsum unde.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-3 flex items-center">
              <span className="mr-2">🎯</span>
              Our Mission
            </h3>
            <p className="text-green-700 leading-relaxed">
              To deliver exceptional solutions that empower our users and create
              meaningful impact in their daily lives through innovative
              technology.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3 flex items-center">
              <span className="mr-2">🔮</span>
              Our Vision
            </h3>
            <p className="text-purple-700 leading-relaxed">
              To become the leading platform that bridges the gap between
              cutting-edge technology and user-friendly experiences.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Innovation
              </h4>
              <p className="text-gray-600">
                Constantly pushing boundaries to create better solutions
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Collaboration
              </h4>
              <p className="text-gray-600">
                Working together to achieve extraordinary results
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Excellence
              </h4>
              <p className="text-gray-600">
                Delivering quality in everything we do
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            We're a diverse group of passionate individuals committed to making
            a difference
          </p>
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
            View Team Members
          </button>
        </section>

        {/* Contact CTA */}
        <section className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Want to Learn More?
          </h3>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you and answer any questions you might have.
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            Get In Touch
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;
