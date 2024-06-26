import React from "react";
import { Button } from "@repo/ui";
import { ArrowRight } from "lucide-react";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <div className={`${gradientText} mb-2`}>TURBOREPO</div>
          <div className={gradientText}>Next.js + TailwindCSS</div>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          モダンでスケーラブルなウェブ開発のためのパワフルなスターターキット
        </p>
        <div className="flex flex-col space-y-4">
          <Button
            variant="primary"
            size="lg"
            className="w-full group bg-blue-500 hover:bg-blue-600 text-white"
          >
            スタートガイド
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="secondary"
              size="md"
              className="w-full group bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              size="md"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              ドキュメント
            </Button>
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        <p>© 2024 Ryopo18. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
