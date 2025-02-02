import React from "react";
import { getCurrent } from "@/feature/auth/api/action";
import { redirect } from "next/navigation";
import { CreateWorkspaceForm } from "@/feature/workspaces/components/create-workspace-from";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceForm></CreateWorkspaceForm>
    </div>
  );
}
