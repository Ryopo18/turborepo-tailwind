import React from "react";
import { Button } from "@repo/ui";

const HomePage: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Button Examples</h1>
      <div>
        <Button variant="primary">primary</Button>
      </div>
    </div>
  );
};

export default HomePage;
