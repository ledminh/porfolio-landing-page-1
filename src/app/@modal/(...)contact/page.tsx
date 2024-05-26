"use client";

import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import contactImg from "@/assets/images/contact.jpg";

import { useRouter } from "next/navigation";

export default function ContactModal() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <Modal onClose={onClose}>
      <div className="grid grid-cols-3 gap-4">
        <Image
          src={contactImg}
          alt="Contact"
          width={1200}
          height={1200}
          className="col-start-1 col-span-1 hidden lg:flex rounded-lg object-cover h-full"
          placeholder="blur"
        />
        <div className="col-start-1 col-span-3 lg:col-start-2 lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </Modal>
  );
}
