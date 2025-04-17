import React from "react";

export default function Blogs() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-mono">
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 underline">Blogs</h1>
        <p className="text-sm mb-8 text-gray-700">
          Here are some thoughts, learnings, and technical explorations I've written about.
        </p>

        {/* Blog Entries */}
        <div className="space-y-8 text-sm">
          <div className="border p-4 rounded-lg hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">How I Built My Portfolio with React & Tailwind</h2>
            <p className="text-gray-700">
              A breakdown of how I used React, Tailwind CSS, and component-based design to build a responsive portfolio website.
            </p>
          </div>

          <div className="border p-4 rounded-lg hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Understanding Hierarchical Attention Networks</h2>
            <p className="text-gray-700">
              An intuitive explanation of HANs and how they are used in legal text classification tasks for NLP projects.
            </p>
          </div>

          <div className="border p-4 rounded-lg hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Working with TensorFlow for Image Classification</h2>
            <p className="text-gray-700">
              My experience building a disease detection model using ResNet50, transfer learning, and custom CNNs.
            </p>
          </div>
        </div>
      </main>

      <footer className="text-center text-xs text-gray-500 p-4 mt-12">
        © {new Date().getFullYear()} Abrar Azeem — Built with React & Tailwind
      </footer>
    </div>
  );
}
