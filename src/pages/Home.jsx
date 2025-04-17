export default function Home() {
    return (
      <div className="max-w-5xl mx-auto px-10 py-16 font-mono text-black">
        <h1 className="text-xl font-bold mb-10">Abrar Azeem</h1>
  
        <h2 className="text-5xl font-bold mb-4">Hi! I'm Abrar Azeem</h2>
        <p className="mb-12 text-lg text-gray-800">
          Developer. Explorer. Always building.
        </p>
  
        <section className="mb-16">
          <h3 className="text-2xl font-bold border-b-2 border-black inline-block mb-4">
            About me
          </h3>
          <p className="text-lg leading-relaxed">
            I'm a 4th-year Information Science engineering student passionate about machine learning.
            Currently learning web development and building hands-on projects to sharpen my skills.
            Always curious, always building — aiming to turn ideas into something impactful.
          </p>
        </section>
  
        <section>
          <h3 className="text-2xl font-bold border-b-2 border-black inline-block mb-4">
            Latest blogs
          </h3>
          <ul className="space-y-6">
            <li>
              <p className="font-semibold text-lg">How I Built My Portfolio with React & Tailwind</p>
              <p className="text-sm text-gray-500">Jan 26, 2025</p>
            </li>
            <li>
              <p className="font-semibold text-lg">Understanding Hierarchical Attention Networks</p>
              <p className="text-sm text-gray-500">Dec 31, 2024</p>
            </li>
            <li>
              <p className="font-semibold text-lg">Working with TensorFlow for Image Classification</p>
              <p className="text-sm text-gray-500">Nov 11, 2024</p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
  