import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/feed");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-80 p-6 border rounded space-y-4"
      >
        <h2 className="text-xl font-semibold">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Login
        </button>

        <p className="text-sm text-center">
          New user?{" "}
          <Link to="/signup" className="underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
