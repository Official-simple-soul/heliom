"use client";
import React from "react";
import Top from "../common/Top";
import SubTab from "./SubTab";
import Modal from "@/components/Modal";
import PurchaseToken from "./PurchaseToken";

export default function GenComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);
  return (
    <div className="flex flex-col gap-7">
      <Top onOpen={handleOpenModal} />
      <SubTab />
      <Modal isOpen={isOpen} onClose={onClose}>
        <PurchaseToken onClose={onClose} />
      </Modal>
    </div>
  );
}
