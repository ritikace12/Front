import React from "react";
import { useNavigate } from "react-router-dom";
import FAQSection from "./FAQSection";
import heroImage from "../assets/hero-image.jpeg";
import Social from "../assets/Social.avif";
import Religious from "../assets/Religious.webp";
import Charity from "../assets/Charity.avif";
import find from "../assets/find.avif";
import join from "../assets/join.avif";
import share from "../assets/share.avif";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0"></div>

      {/* Navbar */}
      <nav className="relative w-full flex justify-between items-center py-4 px-6 border-b border-gray-300 bg-white">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="text-[#181D3B]">C</span>ommunion
          <span className="text-[#F67974]">Hub</span>
        </h2>
        <div className="hidden md:flex gap-10 text-[#181D3B] font-bold">
          <button
            className="px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => navigate("/events")}
          >
            Events
          </button>
          <button
            className="px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => window.location.href = "https://communionhub.org/"}
          >
            About
          </button>
          <button
            className="px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => navigate("/#")}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-12 md:py-20 z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#181D3B] leading-tight animate-fadeIn">
            Connecting People <br /> Across Faiths & Interests
          </h1>
          <p className="text-lg text-gray-600 animate-fadeIn delay-200">
            Join us in celebrating unity through events, faith-based gatherings, and social interactions. Be a part of something meaningful.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-[#F67974] text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            onClick={() => navigate("/events")}
          >
            Explore Events ⌲
          </button>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Community Gathering"
            className="w-full max-w-md md:max-w-lg rounded-lg"
          />
        </div>
      </div>

      {/* Community Section */}
      <section className="relative w-full max-w-7xl px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#181D3B] mb-6 animate-fadeIn">
          Our Community
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Engage in events that bring people together, strengthen faith, and support those in need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: Social, title: "Social", desc: "Connect through fun, engaging activities and build lasting relationships." },
            { img: Religious, title: "Religious", desc: "Join faith-based events, spiritual discussions, and prayer groups." },
            { img: Charity, title: "Charity", desc: "Make a difference by participating in volunteer and charity initiatives." },
          ].map(({ img, title, desc }, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform">
              <img src={img} alt={title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-[#F67974]">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative w-full max-w-7xl px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#181D3B] mb-6 animate-fadeIn">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: find, title: "Find Events", desc: "Browse a variety of events based on your interests and beliefs." },
            { img: join, title: "Join & Engage", desc: "Participate in gatherings and make meaningful connections." },
            { img: share, title: "Share & Inspire", desc: "Host events, share stories, and build a thriving community." },
          ].map(({ img, title, desc }, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform">
              <img src={img} alt={title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-4 text-xl font-semibold text-[#F67974]">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

                {/* Trusted by Users Section */}
      <section className="relative w-full max-w-7xl px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#181D3B] mb-4">Trusted by Over 1500+ Active Global Users</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join a growing community of over 1500 users worldwide who trust us to connect, engage, and thrive together.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full max-w-7xl px-6 py-12 text-center bg-[#181D3B] rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "John M.",
              location: "USA",
              review: "Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.",
            },
            {
              name: "Rohan K.",
              location: "India",
              review: "Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space.",
            },
            {
              name: "Amira L.",
              location: "UAE",
              review: "Through Communion, I've joined events and discussions that broadened my perspective and connected me globally.",
            },
            {
              name: "Sarah P.",
              location: "UK",
              review: "The platform's interfaith dialogue features have helped me understand different perspectives and grow spiritually.",
            },
            {
              name: "David C.",
              location: "Canada",
              review: "Communion's events feature has made it easy to organize and participate in meaningful spiritual gatherings.",
            },
          ].map(({ name, location, review }, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg hover:scale-105 transition-transform">
              <p className="text-gray-700 italic">"{review}"</p>
              <h4 className="mt-4 text-lg font-semibold text-[#F67974]">{name}</h4>
              <p className="text-gray-500">{location}</p>
            </div>
          ))}
        </div>
      </section>



      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <footer className="relative w-full py-4 bg-[#181D3B] text-center text-white z-10">
        <p className="text-sm">© 2025 CommunionHub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

