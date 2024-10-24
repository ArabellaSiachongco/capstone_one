import React from "react";

const Subscription = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Sample Subscription Payment</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600">Card Number</label>
            <input type="text" className="border w-full p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Amount</label>
            <input type="number" className="border w-full p-2 rounded" />
          </div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Confirm Payment</button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;