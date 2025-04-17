import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-mono">
      <main className="max-w-5xl mx-auto px-10 py-16 leading-relaxed">
        <h1 className="text-5xl font-bold underline mb-10">Resume</h1>

        <section className="mb-12 text-base">
          <h2 className="text-2xl font-bold mb-4">Education</h2>

          <div className="mb-4">
            <p><strong>Siddaganga Institute Of Technology</strong> — Tumkur, Karnataka, India</p>
            <p>Bachelor of Engineering in Information Science and Engineering, CGPA: 8.08/10.00 (2021–2025)</p>
          </div>

          <div className="mb-4">
            <p><strong>Vidyavahini PU College</strong> — Tumkur, Karnataka, India</p>
            <p>Pre-University, Percentage: 87.16 (2019–2021)</p>
          </div>

          <div>
            <p><strong>Varin International Residential School</strong> — Tumkur, Karnataka, India</p>
            <p>Grade 10th, Percentage: 80.00 (2018–2019)</p>
          </div>
        </section>

        <section className="mb-12 text-base">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc ml-6">
            <li><strong>Web:</strong> HTML, CSS, JavaScript</li>
            <li><strong>Programming:</strong> C, C++, Python (basic)</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Relevant Coursework:</strong> OOPS, Operating Systems, DBMS, Data Structures, Algorithms, Computer Networks</li>
            <li><strong>Collaboration & Leadership:</strong> Proven track record leading teams, organizing events</li>
          </ul>
        </section>

        <section className="mb-12 text-base">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Optimized Hierarchical Attention Network for Legal Outcome Predictions</strong> — Machine Learning<br />
              Deep learning model analyzing legal documents using LegalBERT and T5 for outcome predictions.
            </li>
            <li>
              <strong>Industry Management System</strong> — DBMS<br />
              Scalable and efficient data management system with responsive UI and minimal redundancy.
            </li>
            <li>
              <strong>Areca Nut Disease Detection</strong> — TensorFlow, Keras, ResNet50, CNN<br />
              Image classification system for disease detection using transfer learning and custom CNNs.
            </li>
          </ul>
        </section>

        <section className="mb-12 text-base">
          <h2 className="text-2xl font-bold mb-4">Roles and Responsibilities</h2>
          <p><strong>Vice President and Class Representative, Dept. of ISE</strong> (Nov 2024 – Present)</p>
          <p>Orchestrated events with 300+ participants, showcased leadership & coordination skills.</p>
        </section>

        <section className="mb-12 text-base">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc ml-6">
            <li><strong>CCNA v7: Introduction to Networks</strong> — Cisco, March 2024</li>
            <li><strong>PCAP: Programming Essentials in Python</strong> — Cisco Networking Academy</li>
          </ul>
        </section>
      </main>

      <footer className="text-center text-xs text-gray-500 p-6 mt-16">
        © {new Date().getFullYear()} Abrar Azeem — Built with React & Tailwind
      </footer>
    </div>
  );
}
