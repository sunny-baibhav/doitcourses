import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const From = () => {
  const [formData, setFormData] = useState({
    email: "",
    domain: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Email: ${formData.email}\nDomain: ${formData.domain}\nImage: ${
        formData.image ? formData.image.name : "No image uploaded"
      }`
    );
    setFormData({ email: "", domain: "", image: null });
    setImagePreview(null);
  };

  return (
    <motion.section
      id="domain"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ padding: "3rem 1rem", backgroundColor: "#000" }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            background: "linear-gradient(to bottom right, #111827, #000)",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            padding: "2rem",
            border: "1px solid #374151",
            transition: "all 0.3s ease",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "0.5rem",
              }}
            >
              Add Your Custom{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Domain
              </span>
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "1rem" }}>
              Connect your own domain to your course platform
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <label
                style={{
                  display: "block",
                  color: "#d1d5db",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                Upload Logo / Profile
              </label>

              <div
                onClick={() => fileInputRef.current.click()}
                style={{
                  position: "relative",
                  width: "120px",
                  height: "120px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px dashed #374151",
                  cursor: "pointer",
                  backgroundColor: "rgba(31,41,55,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span style={{ color: "#9ca3af", fontSize: "2rem" }}>+</span>
                )}
                {/* Camera Icon */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "16px",
                    border: "2px solid #fff",
                  }}
                >
                  📷
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFormChange}
                style={{ display: "none" }}
              />
            </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Email */}
            <div>
              <label
                style={{
                  display: "block",
                  color: "#d1d5db",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="your@email.com"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  border: "2px solid #374151",
                  backgroundColor: "rgba(31, 41, 55, 0.5)",
                  color: "#fff",
                  fontSize: "0.875rem",
                  outline: "none",
                  transition: "all 0.3s",
                }}
              />
            </div>

            {/* Domain */}
            <div>
              <label
                style={{
                  display: "block",
                  color: "#d1d5db",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                Your Domain
              </label>
              <input
                type="text"
                name="domain"
                value={formData.domain}
                onChange={handleFormChange}
                placeholder="yourdomain.com"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  border: "2px solid #374151",
                  backgroundColor: "rgba(31, 41, 55, 0.5)",
                  color: "#fff",
                  fontSize: "0.875rem",
                  outline: "none",
                  transition: "all 0.3s",
                }}
              />
            </div>

            {/* Image Upload (Instagram style) */}
       

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#fff",
                borderRadius: "0.75rem",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 5px 15px rgba(59,130,246,0.4)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(59,130,246,0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(59,130,246,0.4)";
              }}
            >
              Connect Domain
            </button>
          </form>

          {/* Note */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "0.75rem",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "#93c5fd" }}>
              <strong style={{ color: "#3b82f6" }}>💡 Note:</strong> After
              connecting your domain, you'll be able to edit all courses with
              your custom branding.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default From;
