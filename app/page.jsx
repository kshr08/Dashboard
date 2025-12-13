"use client";

import { useState,  useEffect } from "react";
import "@/styles/auth.css";
import API from "@/lib/api";


export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  
  useEffect(() => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  if (token) {
    window.location.href = "/dashboard";
  }
}, []);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // register state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", loginData);
      document.cookie = `token=${res.data.token}; path=/`;
      window.location.href = "/dashboard";
    } catch {
      alert("Login failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", registerData);
      document.cookie = `token=${res.data.token}; path=/`;
      window.location.href = "/dashboard";
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className={`container ${isRegister ? "active" : ""}`}>
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      {/* LOGIN */}
      <div className="form-box Login">
        <h2 className="animation" style={{ "--S": 21 }}>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-box animation" style={{ "--S": 22 }}>
            <input
              type="email"
              required
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <label>Email</label>
          </div>

          <div className="input-box animation" style={{ "--S": 23 }}>
            <input
              type="password"
              required
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <label>Password</label>
          </div>

          <div className="input-box animation" style={{ "--S": 24 }}>
            <button className="btn">Login</button>
          </div>

          <div className="regi-link animation" style={{ "--S": 25 }}>
            <p>
              Don&apos;t have an account? <br />
              <a onClick={() => setIsRegister(true)}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      {/* REGISTER */}
      <div className="form-box Register">
        <h2 className="animation" style={{ "--S": 0 }}>Register</h2>

        <form onSubmit={handleRegister}>
          <div className="input-box animation" style={{ "--S": 1 }}>
            <input
              type="text"
              required
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
            <label>Name</label>
          </div>

          <div className="input-box animation" style={{ "--S": 2 }}>
            <input
              type="email"
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
            <label>Email</label>
          </div>

          <div className="input-box animation" style={{ "--S": 3 }}>
            <input
              type="password"
              required
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
            <label>Password</label>
          </div>

          <div className="input-box animation" style={{ "--S": 4 }}>
            <button className="btn">Register</button>
          </div>

          <div className="regi-link animation" style={{ "--S": 5 }}>
            <p>
              Already have an account? <br />
              <a onClick={() => setIsRegister(false)}>Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
