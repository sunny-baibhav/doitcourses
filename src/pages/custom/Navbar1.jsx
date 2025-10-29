import React, { useEffect, useRef, useState } from "react";

const Navbar1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navBackground, setNavBackground] = useState("#20002b");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem("userEmail") || "justchillmebro@gmail.com");
  const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "Just Chill");
  const [logoUrl, setLogoUrl] = useState(() => localStorage.getItem("customLogoDataUrl") || "");

  const profileRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const listener = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener ? mql.addEventListener("change", listener) : mql.addListener(listener);
    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", listener) : mql.removeListener(listener);
    };
  }, []);

  // Change navbar background when course sections are in view
  useEffect(() => {
    let ticking = false;

    const getDesiredBackground = () => {
      // Default/navbar base color
      const defaultColor = "#20002b";

      // Look for explicit marker first
      const markedSections = document.querySelectorAll('[data-navcolor], #courses-section');
      const courseLikeNodes = document.querySelectorAll(
        ".course, .course-stats, .course-module, .outline-div.course, img.course-cover"
      );

      const viewportY = 80; // near top under navbar
      const isInView = (el) => {
        if (!el || typeof el.getBoundingClientRect !== "function") return false;
        const r = el.getBoundingClientRect();
        return r.top <= viewportY && r.bottom >= viewportY; // intersects the navbar line
      };

      // If any explicitly marked section is in view, use its data-navcolor or fallback
      for (const el of markedSections) {
        if (isInView(el)) {
          const color = el.getAttribute("data-navcolor") || "#0f172a";
          return color;
        }
      }

      // Otherwise, if any course-like element is in view, use a course color
      for (const el of courseLikeNodes) {
        if (isInView(el)) return "#0f172a"; // slate-900
      }

      return defaultColor;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const next = getDesiredBackground();
        setNavBackground((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    // Run on mount and bind listeners
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      const p = profileRef.current;
      if (p && !p.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener("click", onDocClick, true);
    return () => document.removeEventListener("click", onDocClick, true);
  }, []);

  const logoSrc = logoUrl || "/home.svg";

  const triggerLogoFileDialog = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleLogoSelected = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const dataUrl = reader.result;
        if (typeof dataUrl === "string") {
          setLogoUrl(dataUrl);
          localStorage.setItem("customLogoDataUrl", dataUrl);
        }
      } catch (_) {}
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveLogo = () => {
    setLogoUrl("");
    localStorage.removeItem("customLogoDataUrl");
  };

  const openSettings = () => {
    setProfileOpen(false);
    setSettingsOpen(true);
  };
  const closeSettings = () => setSettingsOpen(false);

  const handleSignOut = () => {
    localStorage.removeItem("customLogoDataUrl");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setProfileOpen(false);
    setSettingsOpen(false);
    setUserEmail("");
    setUserName("Guest");
    setLogoUrl("");
    try {
      window.location.href = "/";
    } catch (_) {}
  };

  return (
    <div className="navbar">
      {/* Main Navbar */}
      <div
        className="nav-bar w-nav"
        style={{
          willChange: "background",
          backgroundColor: navBackground,
          transition: "background-color 200ms ease",
        }}
      >
        <div
          className="nav-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: 12,
            position: "relative",
            padding: "10px 20px",
          }}
        >
          {/* ✅ Logo Section */}
          <a
            href="/"
            className="nav-logo-link w-inline-block w--current"
            style={{ textDecoration: "none", borderBottom: "none" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {logoSrc === "/home.svg" ? (
                <div
                  style={{
                    width: isMobile ? "50px" : "66px",
                    height: isMobile ? "42px" : "55px",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={logoSrc}
                    loading="lazy"
                    alt="Doitcourse Logo"
                    className="logo"
                    style={{
                      width: isMobile ? "35px" : "45px",
                      height: isMobile ? "35px" : "45px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ) : (
                <img
                  src={logoSrc}
                  loading="lazy"
                  alt="Doitcourse Logo"
                  className="logo"
                  style={{
                    width: isMobile ? "35px" : "222px",
                    height: isMobile ? "35px" : "108px",
                    objectFit: "contain",
                    borderRadius: "0px",
                    boxShadow: "none",
                  }}
                />
              )}
              {logoSrc === "/home.svg" && (
                <h3
                  style={{
                    margin: 0,
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight: 900,
                    color: "#ffffff",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Doitcourse
                </h3>
              )}
            </div>
          </a>

          {/* ✅ Right Section: Start Now Button + Profile Avatar */}
          <div
            className="nav-button-group"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginLeft: "auto",
              position: isMobile ? "fixed" : "static",
              right: isMobile ? "16px" : "0",
              top: isMobile ? "10px" : "auto",
              zIndex: 1500,
              justifyContent: isMobile ? "flex-end" : "flex-start",
              width: isMobile ? "100%" : "auto",
            }}
          >
            {/* ✅ Start Now Button */}
            <a
              href="/get-started"
              style={{
                background: "#a4d54a",
                color: "#1a2603",
                fontWeight: 700,
                padding: isMobile ? "8px 14px" : "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: isMobile ? "13px" : "15px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#8dc236")}
              onMouseLeave={(e) => (e.target.style.background = "#a4d54a")}
            >
              Start Now
            </a>

            {/* ✅ Avatar */}
            <div ref={profileRef} style={{ position: "relative" }}>
              <button
                onClick={() => setProfileOpen((o) => !o)}
                aria-label="Open profile menu"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.4)",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {userEmail ? (
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#20002b" }}>
                    {userEmail.charAt(0).toUpperCase()}
                  </span>
                ) : (
                  <span style={{ fontSize: "14px" }}>👤</span>
                )}
              </button>

              {profileOpen && (
                <div
                  style={{
                    position: "absolute",
                    right: isMobile ? 8 : 0,
                    top: isMobile ? 48 : 44,
                    width: isMobile ? "92vw" : "260px",
                    maxWidth: 360,
                    background: "#ffffff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.18)",
                    padding: 0,
                    zIndex: 2000,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: "12px 12px 10px 12px" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827", marginBottom: "2px" }}>
                      {userName}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {userEmail}
                    </div>
                  </div>
                  <div style={{ height: 1, background: "#F3F4F6" }} />
                  <button
                    onClick={openSettings}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: 0,
                      padding: "10px 12px",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ marginRight: 8 }}>⚙️</span> Settings
                  </button>
                  <div style={{ height: 1, background: "#F3F4F6" }} />
                  <button
                    onClick={handleSignOut}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: 0,
                      padding: "10px 12px",
                      cursor: "pointer",
                      color: "#B91C1C",
                    }}
                  >
                    <span style={{ marginRight: 8 }}>🚪</span> Sign out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Hidden file input for logo editing */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleLogoSelected}
            style={{ display: "none" }}
          />
        </div>
      </div>

      {/* ✅ Settings Modal */}
      {settingsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1200,
          }}
          onClick={closeSettings}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(900px, 92vw)",
              height: isMobile ? "auto" : "560px",
              background: "#ffffff",
              borderRadius: "14px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", height: "100%" }}>
              <aside style={{ width: 220, borderRight: "1px solid #F3F4F6", padding: 16 }}>
                <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 10 }}>Settings</div>
                <div style={{ fontWeight: 700, marginBottom: 12 }}>General</div>
                <div style={{ color: "#6B7280", marginBottom: 8 }}>Appearance</div>
                <div style={{ color: "#6B7280", marginBottom: 8 }}>API Keys</div>
                <div style={{ color: "#6B7280", marginBottom: 8 }}>Models</div>
                <div style={{ color: "#6B7280" }}>Connections</div>
              </aside>
              <section style={{ flex: 1, padding: 20 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <h3 style={{ margin: 0 }}>General</h3>
                  <button
                    onClick={closeSettings}
                    aria-label="Close"
                    style={{ border: 0, background: "transparent", cursor: "pointer", fontSize: 18 }}
                  >
                    ✕
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "#E5E7EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    {userName?.[0]?.toUpperCase() || "U"}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{userName}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>{userEmail}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <button
                    onClick={triggerLogoFileDialog}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: "1px solid #E5E7EB",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    Upload logo
                  </button>
                  {logoUrl && (
                    <button
                      onClick={handleRemoveLogo}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 6,
                        border: "1px solid #FCA5A5",
                        background: "white",
                        color: "#B91C1C",
                        cursor: "pointer",
                      }}
                    >
                      Remove logo
                    </button>
                  )}
                </div>
                <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 16 }}>
                  Default logo is Doitcourse. Uploaded logo overrides it.
                </div>
                <div>
                  <button
                    style={{
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: "1px solid #E5E7EB",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    Sign out
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar1;
