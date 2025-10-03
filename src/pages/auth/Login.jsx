import React, { useState } from "react"
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

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: "#f9fafb",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <h2 style={{ 
          textAlign: "center", 
          marginBottom: "30px", 
          color: "#1f2937",
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
              color: "#374151",
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
                borderRadius: "4px",
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
              backgroundColor: loading ? "#9ca3af" : "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "4px",
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
          color: "#6b7280",
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
              backgroundColor: "white",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <span></span>
            Continue with Google
          </button>

          <button
            onClick={() => handleSocialLogin("github")}
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "white",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <span></span>
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
