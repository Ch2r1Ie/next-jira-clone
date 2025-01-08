import { SignInCard } from "@/feature/auth/components/sign-in-card";
import { getCurrent } from "@/feature/auth/api/action";
import { redirect } from "next/navigation";
import React from "react";

const SighInPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/");

  return <SignInCard></SignInCard>;
};

export default SighInPage;
