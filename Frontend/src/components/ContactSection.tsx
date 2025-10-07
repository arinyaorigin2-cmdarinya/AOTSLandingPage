import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: phone,
      company: formData.company,
      message: formData.message,
      to_email: "arinyaorigin2@gmail.com",
    };

    // Send email to Admin
    emailjs
      .send(
        "service_ffgwer8",
        "template_vjbz4on",
        templateParams,
        "OhhaWXzIEG_GCWVmp"
      )
      .then(() => {
        console.log("Admin notification sent");
      })
      .catch((err) => console.error("Admin email error:", err));

    // Send confirmation email to User
    emailjs
      .send(
        "service_ffgwer8",
        "template_bobtq9e",
        templateParams,
        "OhhaWXzIEG_GCWVmp"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
        setPhone("");
      })
      .catch((err) => {
        console.error("User email error:", err);
        alert("❌ Failed to send message. Try again later.");
      })
      .finally(() => setLoading(false));
  };

  // ✅ Function to open Google Form
  const handleBookMeeting = () => {
    window.open("https://forms.gle/ZCrMNodAfu54B7xU9", "_blank");
  };

  return (
    <div className="w-full bg-black py-20 px-4 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Contact Form */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
          <h3 className="text-white text-xl font-semibold mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              enableSearch={true}
              searchPlaceholder="Search country..."
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="w-full"
              inputClass="!w-full !bg-[#2a2a2a] !text-white !border-0 !py-3 !pl-12 !rounded-md !focus:ring-2 !focus:ring-blue-500 placeholder-gray-400"
              buttonClass="!bg-[#2a2a2a] !border-0 !rounded-l-md"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 text-white font-medium py-3 rounded-md disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"} <Send size={18} />
            </button>
          </form>
        </div>

        {/* Right - Contact Info & Book Meeting */}
        <div className="flex flex-col space-y-6">
          {/* Contact Info Box */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 space-y-6 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
            <h3 className="text-white text-xl font-semibold">Contact Information</h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <Mail className="text-blue-500" size={20} />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400 text-sm">contact@arinyaorigin.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-blue-500" size={20} />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-400 text-sm">+91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500" size={20} />
                <div>
                  <p className="font-medium text-white">Office</p>
                  <p className="text-gray-400 text-sm">
                    Bangalore, Karnataka <br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Meeting Box */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
            <h3 className="text-white text-xl font-semibold mb-3">
              Book a Meeting
            </h3>
            <p className="text-gray-300 text-sm mb-5">
              Want to discuss your project in detail? Schedule a free 30-minute
              consultation with our experts at{" "}
              <span className="font-semibold text-white">
                Arinya Origin Technology Solution
              </span>
              . We’ll help you understand how our solutions can benefit your
              business.
            </p>
            <button
              onClick={handleBookMeeting}
              className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium py-3 rounded-md"
            >
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
