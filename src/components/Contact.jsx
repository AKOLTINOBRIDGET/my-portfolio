import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

// Centralized configuration
const CONTACT_INFO = {
  email: "akoltinobridget03@gmail.com",
  phone: "+256 708484169",
  location: "Kampala, Uganda",
};

const SOCIAL_LINKS = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/AKOLTINOBRIDGET",
    icon: Github,
    ariaLabel: "Visit my GitHub profile",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bridget-tino-akol-a6912a356",
    icon: Linkedin,
    ariaLabel: "Connect with me on LinkedIn",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/akoltino",
    icon: Twitter,
    ariaLabel: "Follow me on Twitter",
  },
];

const EMAILJS_CONFIG = {
  serviceId: "service_0mmnihq",
  templateId: "template_t6ysu2e",
  publicKey: "0oQ6yeaQBK5Da_cUH",
};

const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
};

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

const ContactInfoItem = ({ icon: Icon, title, content, href }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full flex-shrink-0">
      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
    </div>
    <div>
      <h4 className="font-medium text-gray-700 dark:text-gray-300">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">{content}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ social }) => {
  const Icon = social.icon;
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.ariaLabel}
      className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-3 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors duration-200 transform hover:scale-110"
    >
      <Icon size={20} />
    </a>
  );
};

const FormInput = ({ label, id, name, type = "text", value, onChange, required = true, rows }) => {
  const InputComponent = rows ? "textarea" : "input";
  
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
        {label}
      </label>
      <InputComponent
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:bg-white dark:focus:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-200"
        required={required}
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_CONFIG.publicKey
      );
      
      setSubmitStatus('success');
      setFormData(INITIAL_FORM_STATE);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
          viewport={{ once: true }}
          transition={ANIMATION_VARIANTS.fadeInUp.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Let's build something awesome together! Whether it's a freelance project,
            collaboration, or just a friendly chat — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={ANIMATION_VARIANTS.fadeInLeft.initial}
            whileInView={ANIMATION_VARIANTS.fadeInLeft.animate}
            viewport={{ once: true }}
            transition={ANIMATION_VARIANTS.fadeInLeft.transition}
            className="bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              <ContactInfoItem
                icon={Mail}
                title="Email"
                content={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
              />
              <ContactInfoItem
                icon={Phone}
                title="Phone"
                content={CONTACT_INFO.phone}
              />
              <ContactInfoItem
                icon={MapPin}
                title="Location"
                content={CONTACT_INFO.location}
              />
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Social Media
              </h3>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <SocialLink key={social.id} social={social} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={ANIMATION_VARIANTS.fadeInRight.initial}
            whileInView={ANIMATION_VARIANTS.fadeInRight.animate}
            viewport={{ once: true }}
            transition={ANIMATION_VARIANTS.fadeInRight.transition}
            className="bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <FormInput
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <FormInput
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <FormInput
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
                  ❌ Something went wrong. Please try again or contact me directly via email.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Send Message
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