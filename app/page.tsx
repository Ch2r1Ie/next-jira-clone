import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "postcss";

const Home = () => {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">muted</Button>
      <Button variant="outline">outline</Button>
      <Button variant="territory">territory</Button>
    </div>
  );
};

export default Home;
