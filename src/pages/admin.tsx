import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;
const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [uploadForm, setUploadForm] = useState({ name: "", category: "", image_url: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      localStorage.setItem("token", data.token);
      alert("Logged in!");
    } else {
      alert("Login failed: " + data.error);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(uploadForm),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Image uploaded!");
      setUploadForm({ name: "", category: "", image_url: "" });
    } else {
      alert("Upload failed: " + data.error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Page</h1>
      {!token ? (
        <form onSubmit={handleLogin}>
          <input
            placeholder="Username"
            value={loginForm.username}
            onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleUpload}>
          <input
            placeholder="Image Name"
            value={uploadForm.name}
            onChange={(e) => setUploadForm({ ...uploadForm, name: e.target.value })}
          />
          <input
            placeholder="Category"
            value={uploadForm.category}
            onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
          />
          <input
            placeholder="Image URL"
            value={uploadForm.image_url}
            onChange={(e) => setUploadForm({ ...uploadForm, image_url: e.target.value })}
          />
          <button type="submit">Upload Image Metadata</button>
        </form>
      )}
    </div>
  );
};

export default Admin;
