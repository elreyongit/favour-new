import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        <p className="text-slate-50 font-semibold tracking-[0.35em] uppercase">
          Error 404
        </p>

        <h1 className="text-8xl font-black mt-6">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-zinc-400 mt-6 leading-8">
          The page you&apos;re looking for doesn&apos;t exist, has been moved,
          or the URL may be incorrect.
        </p>

        <div className="flex justify-center gap-5 mt-12 flex-wrap">

          <Link
            to="/"
            className="px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-black transition flex items-center gap-3"
          >
            <FaHome />
            Back Home
          </Link>

          <button
            onClick={() => history.back()}
            className="px-7 py-4 rounded-xl border border-zinc-700 hover:border-blue-500 transition flex items-center gap-3"
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

        <div className="mt-20 opacity-20 text-8xl font-black">
          FAVOUR
        </div>

      </div>
    </div>
  );
}