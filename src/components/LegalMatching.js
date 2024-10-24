import React from "react";

const LegalMatching = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Find Legal Professionals</h2>
        <div className="grid grid-cols-2 gap-8">
          <LawyerCard name="Jane Doe" expertise="Criminal Law" />
          <LawyerCard name="John Smith" expertise="Intellectual Property" />
        </div>
      </div>
    </section>
  );
};

const LawyerCard = ({ name, expertise }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">Expert in {expertise}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Contact</button>
    </div>
  );
};

export default LegalMatching;