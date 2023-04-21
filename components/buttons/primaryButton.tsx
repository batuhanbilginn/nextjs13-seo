"use client";
import { popupAtom } from "@/atoms/popupAtom";
import { useAtom } from "jotai";

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
  const [_, setIsPopupOpen] = useAtom(popupAtom);
  return (
    <button
      onClick={() => {
        setIsPopupOpen(true);
      }}
      className="bg-neutral-900 py-2 px-3 rounded-md text-white font-medium hover:bg-neutral-700 transition-colors duration-75 ease-out"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
