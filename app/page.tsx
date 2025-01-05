import React from "react";
import { UserButton } from "@/feature/auth/components/user-button";
import { getCurrent } from "@/feature/auth/api/action";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <div>
      <UserButton></UserButton>
    </div>
  );
}
