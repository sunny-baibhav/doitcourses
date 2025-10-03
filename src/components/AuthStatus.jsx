import React from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const AuthStatus = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate("/")
  }

  if (user) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ color: "#6b7280", fontSize: "14px" }}>
          Welcome, {user.email}
        </span>
        <button
          onClick={handleSignOut}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => navigate("/login")}
      style={{
        padding: "8px 16px",
        backgroundColor: "#4f46e5",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px"
      }}
    >
      Sign In
    </button>
  )
}

export default AuthStatus
