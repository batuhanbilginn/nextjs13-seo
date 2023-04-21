"use client";
import { popupAtom } from "@/atoms/popupAtom";
import { directusClient } from "@/lib/directus/directusClientInstance";

import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";

const Popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useAtom(popupAtom);
  const [email, setEmail] = useState("");
  const [handling, setHandling] = useState(false);

  // Close Popup Handler
  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, [setIsPopupOpen]);

  // Handler Escape Key
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    },
    [closePopup]
  );

  // ESC Close Handler
  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [handleEsc]);

  if (!isPopupOpen) return null;

  const checkEmail = (email: string) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.toLowerCase().match(regex);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if email is valid
    const isEmailValid = checkEmail(email);
    if (!email || !isEmailValid) {
      alert("Please enter a valid email!");
    }

    // TODO: Send Email to Backend
    try {
      setHandling(true);
      await directusClient.items("newsletter").createOne({
        email,
      });
      setHandling(false);
      closePopup();
    } catch (error) {
      setHandling(false);
      alert("Something went wrong! Please try again later.");
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-md flex items-center justify-center">
      {/* Close Container */}
      <div onClick={closePopup} className="absolute inset-0 z-0" />
      {/* Container */}
      <div className="bg-white w-full max-w-lg z-10 rounded-md px-8 py-8 mx-8">
        <h2 className="text-3xl font-semibold">Follow my journey!</h2>
        <p className="text-neutral-500 text-lg mt-2">
          I send out a newsletter every month with my latest posts and updates.
          <span className="text-neutral-900"> Subscribe to get notified!</span>
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex items-center mt-6">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your email"
            className="bg-neutral-100 px-2 py-3 rounded-l-md w-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-r-md px-6 py-3"
          >
            {handling ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-5 h-5 text-gray-200 animate-spin  fill-neutral-900"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
        <p className="text-sm text-neutral-400 mt-4">
          I will never send spam email or share your data with anothers.
        </p>
      </div>
    </div>
  );
};

export default Popup;
