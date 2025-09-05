import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "enpassant.abesec@gmail.com",
      description: "Get in touch anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 94527 33181",
      description: "Mon-Fri, 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "ABES Engineering College, Ghaziabad",
      description: "Ghaziabad, Uttar Pradesh",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Contact Information
              </h2>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-gray-800 border border-gray-700 hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-750"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-yellow-400 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-yellow-400/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-gray-400">
                      Fill out the form below and we'll get back to you
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-yellow-400/20 "
                          placeholder="Full Name"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute -top-2.5 left-3 px-1 text-sm transition-all duration-300 ${
                            focusedField === "name" || formData.name
                              ? "text-yellow-400 bg-gray-800"
                              : "text-transparent"
                          }`}
                        >
                          Full Name *
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-yellow-400/20 "
                          placeholder="Email Address"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute -top-2.5 left-3 px-1 text-sm transition-all duration-300 ${
                            focusedField === "email" || formData.email
                              ? "text-yellow-400 bg-gray-800"
                              : "text-transparent"
                          }`}
                        >
                          Email Address *
                        </label>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField("")}
                          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-yellow-400/20 "
                          placeholder="Phone Number"
                        />
                        <label
                          htmlFor="phone"
                          className={`absolute -top-2.5 left-3 px-1 text-sm transition-all duration-300 ${
                            focusedField === "phone" || formData.phone
                              ? "text-yellow-400 bg-gray-800"
                              : "text-transparent"
                          }`}
                        >
                          Phone Number
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField("")}
                          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-yellow-400/20 "
                          placeholder="Subject"
                        />
                        <label
                          htmlFor="subject"
                          className={`absolute -top-2.5 left-3 px-1 text-sm transition-all duration-300 ${
                            focusedField === "subject" || formData.subject
                              ? "text-yellow-400 bg-gray-800"
                              : "text-transparent"
                          }`}
                        >
                          Subject *
                        </label>
                      </div>
                    </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField("")}
                        rows={5}
                        className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-yellow-400/20 resize-none"
                        placeholder="Your Message"
                      />
                      <label
                        htmlFor="message"
                        className={`absolute -top-2.5 left-3 px-1 text-sm transition-all duration-300 ${
                          focusedField === "message" || formData.message
                            ? "text-yellow-400 bg-gray-800"
                            : "text-transparent"
                        }`}
                      >
                        Your Message *
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 max-w-3xl mx-auto">
            We typically respond within 24 hours. For urgent matters, please
            call us directly. We look forward to working with you and bringing
            your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
