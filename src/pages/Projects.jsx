import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-4 underline underline-offset-4">Projects</h1>
        <p className="mb-10 text-lg">
          Here are a few things I've built recently. Some are useful, others were just for fun.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <a
            href="https://github.com/abrar1411/hackernews-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-4 rounded hover:bg-gray-100 transition block"
          >
            <h2 className="text-xl font-semibold mb-2">Hacker News Clone</h2>
            <p className="text-sm">
            A backend built with Hono and PostgreSQL that replicates the core features of Hacker News.
            </p>
          </a>

          <div className="border border-black p-4 rounded hover:bg-gray-100 transition">
            <h2 className="text-xl font-semibold mb-2">Legal Outcomes Prediction Using HAN</h2>
            <p className="text-sm">
                A machine learning model that predicts legal outcomes using hierarchical attention networks.
            </p>
          </div>

          <div className="border border-black p-4 rounded hover:bg-gray-100 transition">
            <h2 className="text-xl font-semibold mb-2">Areca Nut Disease Detection</h2>
            <p className="text-sm">
                An image classification project using TensorFlow and Keras to detect diseases in Areca nut plants.
            </p>
          </div>
        </div>

        {/* More Projects Prompt */}
        <div className="mt-16 text-center">
          <p className="text-md mb-2">Want more?</p>
          <a
            href="https://github.com/abrar1411"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800 transition"
          >
            Browse all my projects on GitHub →
          </a>
        </div>

        
        <div className="mt-16 text-center max-w-xl mx-auto text-sm text-gray-600">
          <p>
            "I believe in building tools that make life simpler, automating the boring, and crafting
            clean code that lasts."
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 p-4 mt-0">
        © {new Date().getFullYear()} Abrar Azeem — Built with React & Tailwind CSS
      </footer>
    </div>
  );
};

export default Projects;
