"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function DestinationPage() {
  const params = useParams();
  const name = params?.name || "Unknown";

  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">{displayName}</h1>
      <p className="text-lg">Welcome to {displayName} page!</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
