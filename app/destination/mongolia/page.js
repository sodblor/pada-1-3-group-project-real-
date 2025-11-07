"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function DestinationPage() {
  const params = useParams();
  const name = params?.name || "Unknown";

  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return <div>heo</div>;
}
