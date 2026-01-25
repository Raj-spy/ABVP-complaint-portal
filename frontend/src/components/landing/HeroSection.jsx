import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        A Social Network You Control
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        No addictive algorithms. No hidden tracking.
        Privacy, clarity, and meaningful engagement by design.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/signup"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="border px-6 py-3 rounded"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
