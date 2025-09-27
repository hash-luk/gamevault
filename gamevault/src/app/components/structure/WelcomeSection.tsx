"use client";

import { useUser } from "@/app/hooks/useUser";

export default function WelcomeSection() {
  const { data: user, isLoading } = useUser();

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        {`Welcome back, ${user?.name}!`}
      </h2>
      <p className="text-gray-600">
        Here's your gaming overview and what's happening in your library.
      </p>
    </div>
  );
}
