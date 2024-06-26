import React from "react";
import { Button } from "@repo/ui";

const HomePage: React.FC = () => {
  return (
    <div className="p-4 flex gap-2">
      <Button variant="primary" size="md">
        Primary Medium
      </Button>
      <Button variant="secondary" size="md">
        Secondary Medium
      </Button>
      <Button variant="outline" size="md">
        Outline Medium
      </Button>
    </div>
  );
};

export default HomePage;
