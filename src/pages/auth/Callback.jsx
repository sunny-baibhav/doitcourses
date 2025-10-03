import React, { useEffect } from "react"
import { supabase } from "../../lib/supabase"
import { useNavigate } from "react-router-dom"

const Callback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error("Error getting session:", error)
          navigate("/login")
          return
        }

        if (data.session) {
          navigate("/")
        } else {
          navigate("/login")
        }
      } catch (error) {
        console.error("Error in auth callback:", error)
        navigate("/login")
      }
    }

    handleAuthCallback()
  }, [navigate])

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: "#f9fafb" 
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ 
          width: "128px", 
          height: "128px", 
          border: "4px solid #e5e7eb", 
          borderTop: "4px solid #4f46e5", 
          borderRadius: "50%", 
          animation: "spin 1s linear infinite",
          margin: "0 auto 20px"
        }}></div>
        <p style={{ color: "#6b7280", fontSize: "16px" }}>
          Completing authentication...
        </p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Callback
