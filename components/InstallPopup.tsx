"use client";

import { useEffect, useState } from "react";

export default function InstallPopup() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    });
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
      console.log("App installed");
    }

    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] bg-white shadow-xl p-4 rounded-xl flex items-center gap-4 border">
      <img src="/icons/icon-192.png" width={40} />
      <div>
        <h4 className="font-semibold">Install Adverza SolutionsApp</h4>
        <p className="text-sm text-gray-600">
          Add to your home screen for quick access.
        </p>
      </div>
      <button
        onClick={handleInstall}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Install
      </button>
    </div>
  );
}
