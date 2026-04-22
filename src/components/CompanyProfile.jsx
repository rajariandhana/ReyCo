export default function CompanyProfile() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Company Name</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We build innovative solutions that empower businesses and individuals worldwide.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-gray-600">
          Our company is dedicated to delivering high-quality digital products with a strong focus on performance,
          usability, and scalability. We combine creativity with technical expertise to solve real-world problems.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Web Development", "Mobile Apps", "Cloud Solutions"].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">High-quality {service.toLowerCase()} tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Founders</h2>
        <div className="flex flex-col items-center">
          <img
            src="/mnt/data/a_clean_bright_high_quality_ghibli_style_studi.png"
            alt="Founders"
            className="rounded-2xl shadow-lg mb-6 max-w-full h-auto"
          />
          <p className="text-gray-600 text-center max-w-2xl">
            Our founders bring together a blend of creativity, technical expertise, and leadership to drive the
            company's vision forward. Their passion for innovation is at the core of everything we do.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">Have a project in mind? We'd love to hear from you.</p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold shadow">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
