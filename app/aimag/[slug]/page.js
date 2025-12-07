"use client";

import { SLUG_TO_AIMAG_ID, AIMAG_ID_TO_NAME } from "../../components/AimagData";
import { notFound } from "next/navigation";
import { use } from "react";

export default function Page(props) {
  const params = use(props.params);
  const { slug } = params;

  const aimagId = SLUG_TO_AIMAG_ID[slug];
  if (!aimagId) return notFound();

  const name = AIMAG_ID_TO_NAME[aimagId] || slug;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">{name}</h1>
      <div className="rounded-lg border p-4">
      </div>
    </div>
  );
}
    