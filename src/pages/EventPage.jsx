import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // Fetch Events from DB
  useEffect(() => {
    fetch("https://hub-hesv.onrender.com/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  // Function to Add New Event 
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://hub-hesv.onrender.com/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const savedEvent = await response.json();
        setEvents([...events, savedEvent]);
        setFilteredEvents([...events, savedEvent]); // Update filtered list
        reset();
      } else {
        console.error("Error saving event:", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to Filter Events by Category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-[#f4f4f4]">
      {/* Navbar */}
      <nav className="relative w-full flex justify-between items-center py-4 px-6 border-b border-gray-300 bg-white shadow-md z-10">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="text-[#181d3b]">C</span>ommunion
          <span className="text-[#F67974]">Hub</span>
        </h2>
        <div className="hidden md:flex gap-10 text-gray-800 font-bold">
          <button className="mt-3 px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform duration-100" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="mt-3 px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform duration-100" onClick={() => navigate("/events")}>
            Events
          </button>
          <button className="mt-3 px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform duration-100" onClick={() => window.location.href = "https://communionhub.org/"}>
            About
          </button>
          <button className="mt-3 px-3 text-[#F67974] text-lg font-semibold hover:scale-105 transition-transform duration-100" onClick={() => navigate("/#")}>
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-6xl px-6 py-12 md:py-20 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#181d3b]">Discover & Join Events</h1>
        <p className="text-lg text-gray-600 mt-2">Find events that bring people together, or create your own.</p>
      </div>

      {/* Filter Category Dropdown */}
      <div className="w-full max-w-6xl px-6 py-4 flex justify-end">
        <select 
          className="p-2 border rounded-md bg-white text-gray-700"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      {/* Events List */}
      <div className="max-w-6xl w-full px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((event, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold text-[#181D3B]">{event.title}</h3>
            <p className="text-sm text-gray-600">📅 {event.date} | 📍 {event.place}</p>
            <p className="mt-2 text-gray-700">{event.description}</p>
            <span className="text-sm text-white bg-[#F67974] px-2 py-1 rounded mt-2 inline-block">{event.category}</span>
          </div>
        ))}
      </div>

      {/* Add New Event Form */}
      <div className="max-w-4xl w-full px-6 py-6">
        <h2 className="text-2xl font-bold text-[#181D3B]">Add a New Event</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input type="text" placeholder="Event Title" className="p-2 border rounded-md" {...register("title", { required: true, minLength: 3 })} />
          {errors.title && <p className="text-red-500 text-sm">Title must be at least 3 characters.</p>}

          <input type="date" className="p-2 border rounded-md" {...register("date", { required: true })} />
          {errors.date && <p className="text-red-500 text-sm">Date is required.</p>}

          <input type="text" placeholder="Place" className="p-2 border rounded-md" {...register("place", { required: true, minLength: 3 })} />
          {errors.place && <p className="text-red-500 text-sm">Place must be at least 3 characters.</p>}

          <select className="p-2 border rounded-md" {...register("category", { required: true })}>
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">Category is required.</p>}

          <textarea placeholder="Event Description" className="p-2 border rounded-md col-span-2" rows="3" {...register("description", { required: true, minLength: 3 })} />
          {errors.description && <p className="text-red-500 text-sm">Description must be at least 3 characters.</p>}

          <button type="submit" className="col-span-2 bg-[#F67974] text-white p-3 rounded-md font-semibold hover:bg-[#e45d5a]">
            Add Event
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="relative w-full py-7 bg-[#181D3B] text-center text-white z-10">
        <p className="text-sm">© 2025 CommunionHub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EventPage;

