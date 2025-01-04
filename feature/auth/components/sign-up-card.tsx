"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DottedSeparatorProps } from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const SignUpCard = () => {
  return (
    <div>
      <Card className="w-full h-full md:w-[486px] border-none shadow-none">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">
            Sign Up
            <CardDescription className="py-2">
              By signing up, you agree to out{" "}
              <Link href="/privacy">
                <span className="text-blue-400">Privacy Policy</span>
              </Link>{" "}
              and{" "}
              <Link href="/terms">
                <span className="text-blue-400">Terms of Service</span>
              </Link>
              {""}
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <div className="px-7">
          {/* <DottedSeparatorProps></DottedSeparatorProps> */}
        </div>
        <CardContent className="p-7">
          <form className="space-y-4">
            <Input
              required
              type="text"
              value={""}
              onChange={() => {}}
              placeholder="Enter your name"
              disabled={false}
            ></Input>
            <Input
              required
              type="email"
              value={""}
              onChange={() => {}}
              placeholder="Enter email address"
              disabled={false}
            ></Input>
            <Input
              required
              type="password"
              value={""}
              onChange={() => {}}
              placeholder="Enter password"
              disabled={false}
              min={8}
              max={256}
            ></Input>
            <Button disabled={false} size="lg" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
        <div className="px-7">
          {/* <DottedSeparatorProps></DottedSeparatorProps> */}
        </div>
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button
            disabled={false}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            <FcGoogle className="mr-2 size-5"></FcGoogle>
            Login with Google
          </Button>
          <Button
            disabled={false}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            <FaFacebook className="mr-2 size-5"></FaFacebook>
            Login with Facebook
          </Button>
          <Button
            disabled={false}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            <FaGithub className="mr-2 size-5"></FaGithub>
            Login with Github
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
