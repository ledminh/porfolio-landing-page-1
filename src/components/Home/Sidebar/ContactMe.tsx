"use client";

import MessageModal from "@/components/MessageModal";
import { useState } from "react";
export default function ContactMe() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-yellow-700 text-white p-4 rounded-xl hover:bg-yellow-700/80"
        onClick={() => setShowModal(true)}
      >
        Contact Me
      </button>
      {showModal && <MessageModal />}
    </>
  );
}
