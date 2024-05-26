"use client";

import { useRouter } from "next/navigation";

export default function Modal({
  children,
  onClose,
}: Readonly<{
  children: React.ReactNode;
  onClose?: () => void;
}>) {
  const router = useRouter();

  const _onClose =
    onClose ||
    (() => {
      router.push("/");
    });

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center z-50 w-full h-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-90"
        onClick={_onClose}
      />
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-4/5 max-w-[55rem]">
        {children}
      </div>
    </div>
  );
}
