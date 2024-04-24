import React from "react";

const Popus = ({ onCancel, onConfirm }) => {
  return (
    <section className="absolute top-0 left-0 w-full h-full z-[1000] bg-[#606e9179] flex items-center justify-center">
      <div className="rounded-lg max-w-[350px] bg-gray-900 p-8 shadow-2xl">
        <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>
        <p className="mt-2 text-sm text-gray-500">
          Doing that could cause is deleted course from Cart, are you 100% sure
          it's okay?
        </p>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
            onClick={onConfirm}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-green-600 capitalize"
            onClick={onCancel}
          >
            No, go back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popus;
