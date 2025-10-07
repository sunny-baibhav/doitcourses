import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { supabase } from "../../lib/supabase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      

      if (error) throw error
      setMessage("Check your email for the login link!")
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = async (provider) => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (error) {
      setMessage(error.message)
      setLoading(false)
    }
  }

  const { videoUrl } = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const vid = params.get("video") || "/video.mp4"
    return { videoUrl: vid }
  }, [])

  const renderBackground = () => {
    if (videoUrl) {
      return (
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
          src={videoUrl}
        />
      )
    }
    return null
  }

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {renderBackground()}

      {/* Foreground content container */}
      <div style={{ 
        position: "relative",
        zIndex: 1,
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "20px"
      }}>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "40px",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            width: "100%",
            maxWidth: "400px"
          }}
        >
        <h2 style={{ 
          textAlign: "center", 
          marginBottom: "30px", 
          color: "#ffffff",
          fontSize: "24px",
          fontWeight: "600"
        }}>
          Sign In
        </h2>

        {message && (
          <div style={{
            padding: "12px",
            marginBottom: "20px",
            backgroundColor: message.includes("Check your email") ? "#d1fae5" : "#fee2e2",
            color: message.includes("Check your email") ? "#065f46" : "#dc2626",
            borderRadius: "4px",
            fontSize: "14px"
          }}>
            {message}
          </div>
        )}

        <form onSubmit={handleEmailLogin}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "8px", 
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "20px",
                fontSize: "16px",
                boxSizing: "border-box"
              }}
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: loading ? "#9ca3af" : "#7c1099",
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: loading ? "not-allowed" : "pointer",
              marginBottom: "20px"
            }}
          >
            {loading ? "Sending..." : "Send Magic Link"}
          </button>
        </form>

        <div style={{ 
          textAlign: "center", 
          margin: "20px 0",
          color: "#ffff",
          fontSize: "14px"
        }}>
          OR
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={() => handleSocialLogin("google")}
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#1a0808",
              color: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden focusable="false" style={{ display: "block" }}>
              <path fill="#EA4335" d="M24 9.5c3.7 0 6.3 1.6 7.7 3l5.2-5.1C33.9 4.6 29.4 3 24 3 14.9 3 6.9 8.2 3.2 16l6.9 5.3C11.9 15.7 17.4 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.7-.4-3.9H24v7.3h12.7c-.3 2.1-1.7 5.1-4.8 7.2l7.3 5.6c4.3-3.9 7.3-9.6 7.3-16.2z"/>
              <path fill="#FBBC05" d="M10.1 28.6c-.5-1.4-.8-2.9-.8-4.6 0-1.6.3-3.2.8-4.6l-6.9-5.3C1.1 16.7 0 20.2 0 24c0 3.8 1.1 7.3 3.2 10.9l6.9-6.3z"/>
              <path fill="#34A853" d="M24 45c6.3 0 11.6-2.1 15.4-5.8l-7.3-5.6c-2 1.4-4.7 2.4-8.1 2.4-6.2 0-11.5-4.2-13.4-10l-7.1 6.1C7.2 41.7 14.9 45 24 45z"/>
            </svg>
            Continue with Google
          </button>

        </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
