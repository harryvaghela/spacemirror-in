"use client";

import { useState } from "react";

export default function InquiryButton({ productName }) {
  const [clicked, setClicked] = useState(false);

  const addToInquiry = () => {
    const old = JSON.parse(localStorage.getItem("inquiry") || "[]");
    old.push(productName);
    localStorage.setItem("inquiry", JSON.stringify(old));
    setClicked(true);
  };

  return (
    <button
      onClick={addToInquiry}
      className="mt-4 bg-white text-black px-6 py-2 rounded-xl"
    >
      {clicked ? "Added ✔" : "Add to Inquiry"}
    </button>
  );
}