import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-neon-lime md:text-9xl">404</h1>
      <p className="mt-4 text-xl text-white md:text-2xl">
        Page not found
      </p>
      <p className="mt-2 max-w-md text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 border-2 border-neon-lime px-6 py-3 text-neon-lime transition-colors hover:bg-neon-lime hover:text-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
