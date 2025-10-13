import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0mmnihq", // ✅ Your EmailJS Service ID
        "template_t6ysu2e", // ✅ Your Template ID (from EmailJS)
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "0oQ6yeaQBK5Da_cUH" // ✅ Your Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ Error sending email:", error);
        alert("❌ Something went wrong. Please check your EmailJS settings.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let’s build something awesome together! Whether it’s a freelance project,
            collaboration, or just a friendly chat — I’d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg border border-gray-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-indigo-900" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a
                    href="mailto:akoltinobridget03@gmail.com"
                    className="text-gray-600 hover:text-indigo-900 transition"
                  >
                    akoltinobridget03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <p className="text-gray-600">+256 708484169</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-indigo-900" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Location</h4>
                  <p className="text-gray-600">Kampala, Uganda</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AKOLTINOBRIDGET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 text-indigo-900 p-3 rounded-full hover:bg-indigo-200 transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/akoltinobridget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 text-indigo-900 p-3 rounded-full hover:bg-indigo-200 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/akoltino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 text-indigo-900 p-3 rounded-full hover:bg-indigo-200 transition"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg border border-gray-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:bg-white transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:bg-white transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:bg-white transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition flex items-center justify-center gap-2 w-full md:w-auto"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
