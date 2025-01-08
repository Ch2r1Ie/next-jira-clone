import { getCurrent } from "@/feature/auth/api/action";
import { SignUpCard } from "@/feature/auth/components/sign-up-card";
import { redirect } from "next/navigation";
import React from "react";

const SighUpPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/");

  return <SignUpCard></SignUpCard>;
};

export default SighUpPage;
