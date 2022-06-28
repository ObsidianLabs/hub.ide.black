import React from "react";

const Error404Page = () => {
  return (
    <main className="font-open-sans container mx-auto text-center">
      <div className="mt-48 text-3xl font-light text-secondary">
        Ops! The Resource Not Found.
      </div>
      <div className="mt-6">
        <a href="/">
          <button className="px-4 py-1 mr-4 rounded-md bg-primary">View More in Hub</button>
        </a>
      </div>
    </main>
  );
};

export default Error404Page;
