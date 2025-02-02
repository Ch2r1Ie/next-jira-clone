import { UserButton } from "@/feature/auth/components/user-button";
import React from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="pt-4 px-6 items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">
          Monitory all of your projects and tasks here
        </p>
      </div>
      <MobileSidebar></MobileSidebar>
      <UserButton></UserButton>
    </nav>
  );
};
