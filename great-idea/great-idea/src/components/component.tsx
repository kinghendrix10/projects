'use client';

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <header className="flex items-center justify-between w-full px-8 py-4">
        <div className="flex items-center gap-2">
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <h1 className="text-5xl font-bold">Great Ideas</h1>
        <p className="mt-4 text-lg text-gray-400">Let's make that idea great!</p>
        <div className="flex items-center justify-center w-full max-w-xl p-4 mt-8 bg-gray-800 rounded-lg">
          <Input
            type="text"
            placeholder="A landing page for my design portfolio"
            className="flex-1 px-4 py-2 text-white bg-gray-800 border-none rounded-lg"
            value="Description of your business idea and target audience"
          />
          <Button
            variant="default"
            className="ml-2"
            onClick={() => {
              const description = document.querySelector("input").value;
              if (!description || description.length < 25) {
                alert("Please enter a description with at least 25 characters.");
              } else {
                const form = document.createElement("form");
                form.className = "absolute top-full left-0 w-full bg-white shadow-lg rounded-md p-4";
                
                const modelSelect = document.createElement("select");
                modelSelect.className = "w-full mb-4";
                const models = ["ChatGPT", "Claude", "LLaMa"];
                models.forEach((model) => {
                  const option = document.createElement("option");
                  option.value = model;
                  option.text = model;
                  modelSelect.add(option);
                });
                form.appendChild(modelSelect);
                
                const apiKeyInput = document.createElement("input");
                apiKeyInput.type = "password";
                apiKeyInput.placeholder = "Enter your API key";
                apiKeyInput.className = "w-full px-4 py-2 border border-gray-300 rounded-md";
                form.appendChild(apiKeyInput);
                
                document.body.appendChild(form);
              }
            }}
          >
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </main>
      <footer className="flex items-center justify-between w-full px-8 py-4">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-gray-400" prefetch={false}>
            FAQ
          </Link>
          <Link href="#" className="text-sm text-gray-400" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="text-sm text-gray-400" prefetch={false}>
            AI Policy
          </Link>
          <Link href="#" className="text-sm text-gray-400" prefetch={false}>
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}