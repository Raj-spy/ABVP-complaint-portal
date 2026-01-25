import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    navigate("/privacy");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="w-80 p-6 border rounded space-y-4"
      >
        <h2 className="text-xl font-semibold">Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Continue
        </button>
      </form>
    </div>
  );
}
