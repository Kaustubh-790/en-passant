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
      details: "+91 XXXXX XXXXX",
      description: "Mon-Fri",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "ABES Engineering College, Ghaziabad",
      description: "Ghaziabad, Uttar Pradesh",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full shadow-lg shadow-yellow-400/50"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 hover:border-yellow-400/50 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 backdrop-blur-xl bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-all duration-300 group-hover:shadow-lg ">
                      <info.icon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-yellow-100 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-yellow-400 font-medium mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                        {info.details}
                      </p>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 backdrop-blur-xl bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-200">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-gray-200">
                      Fill out the form below and we'll get back to you
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:border-yellow-400 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                          placeholder="Full Name"
                        />
                      </div>

                      <div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:border-yellow-400 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:border-yellow-400 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:border-yellow-400 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:border-yellow-400 resize-none hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                        placeholder="Your Message"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-semibold py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105 backdrop-blur-xl"
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
      </div>
    </div>
  );
};

export default ContactUs;
