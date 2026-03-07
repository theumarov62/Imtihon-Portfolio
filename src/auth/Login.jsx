import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/store";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const handleLogin = () => {
    const succes = login({ username, password });
    if (succes) {
      navigate("/admin-dashboard");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  if (error) {
    return (
      <div role="alert" className="alert alert-error w-[300px] m-4">
        <span>Username yoki password xato</span>
      </div>
    );
  }
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl border">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>

            <input
              type="text"
              autoComplete="off"
              placeholder="Username"
              className="input input-bordered w-full"
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="card-actions mt-4">
              <button className="btn btn-primary w-full" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
