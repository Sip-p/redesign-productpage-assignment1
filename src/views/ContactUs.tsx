import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-500 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">Have any questions or inquiries? Reach out to us!</p>

      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
        <form className="flex flex-col gap-4">
          <label className="flex flex-col">
            Name:
            <input type="text" placeholder="Your Name" className="border rounded-lg px-3 py-2" />
          </label>

          <label className="flex flex-col">
            Email:
            <input type="email" placeholder="Your Email" className="border rounded-lg px-3 py-2" />
          </label>

          <label className="flex flex-col">
            Message:
            <textarea placeholder="Your Message" className="border rounded-lg px-3 py-2"></textarea>
          </label>

          <button type="submit" className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;