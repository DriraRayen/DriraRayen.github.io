import { useEffect, useState } from "react";
import loadingArtwork from "@/assets/loading-tarnished.jpg";

const LoadingScreen = () => {
   const [progress, setProgress] = useState(0);
   const [isExiting, setIsExiting] = useState(false);
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      let progressTimer: number | undefined;
      let exitTimer: number | undefined;
      let removeTimer: number | undefined;
      const startTime = Date.now();
      const minimumDuration = 8500;
      let fontsReady = !document.fonts;
      let pageReady = document.readyState === "complete";
      let completed = false;

      const finishLoading = () => {
         if (completed || !fontsReady || !pageReady || Date.now() - startTime < minimumDuration) {
            return;
         }
         completed = true;
         if (progressTimer) window.clearInterval(progressTimer);
         setProgress(100);
         exitTimer = window.setTimeout(() => {
            setIsExiting(true);
            removeTimer = window.setTimeout(() => setIsVisible(false), 1200);
         }, 700);
      };

      const beginProgress = () => {
         progressTimer = window.setInterval(() => {
            const elapsed = Date.now() - startTime;
            setProgress(Math.min(94, Math.floor((elapsed / minimumDuration) * 94)));
            finishLoading();
         }, 50);

         if (document.fonts) {
            Promise.all([
               document.fonts.load("600 1em Cinzel"),
               document.fonts.load('400 1em "EB Garamond"'),
            ]).finally(() => {
               fontsReady = true;
               finishLoading();
            });
         }
      };

      const handleLoad = () => {
         pageReady = true;
         if (!progressTimer) beginProgress();
         finishLoading();
      };

      if (pageReady) beginProgress();
      else window.addEventListener("load", handleLoad, { once: true });

      return () => {
         window.removeEventListener("load", handleLoad);
         if (progressTimer) window.clearInterval(progressTimer);
         if (exitTimer) window.clearTimeout(exitTimer);
         if (removeTimer) window.clearTimeout(removeTimer);
      };
   }, []);

   if (!isVisible) return null;

   return (
      <div
         className={`fixed inset-0 z-[9999] overflow-hidden bg-[#050908] transition-opacity duration-700 ${
            isExiting ? "opacity-0" : "opacity-100"
         }`}
      >
         <img
            src={loadingArtwork}
            alt=""
            className={`absolute inset-0 h-full w-full object-contain transition-[transform,filter] ease-out ${
               isExiting ? "scale-110 blur-sm" : "scale-100"
            }`}
            style={{ transitionDuration: "1400ms" }}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#030504]/85 via-[#030504]/25 to-black/10" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_100%)]" />
         <div
            className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.48),rgba(218,165,32,0.12)_24%,transparent_68%)] transition-opacity duration-700 ${
               isExiting ? "opacity-100" : "opacity-0"
            }`}
         />

         <div className="relative flex min-h-full items-end justify-center px-6 pb-16 sm:pb-20">
            <div
               className={`w-full max-w-xl text-center transition-all duration-700 ${
                  isExiting ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
               }`}
            >
               <p className="mb-3 font-cinzel text-[10px] uppercase tracking-[0.45em] text-elden-gold/75 sm:text-xs">
                  The Tarnished&apos;s Chronicle
               </p>
               <h1 className="font-cinzel text-2xl font-bold uppercase tracking-[0.18em] text-gold drop-shadow-[0_0_18px_rgba(218,165,32,0.65)] sm:text-4xl">
                  Lands Between
               </h1>
               <div className="mx-auto mt-6 flex items-center gap-3">
                  <span className="font-cinzel text-xs text-elden-gold/75">LOADING</span>
                  <div className="h-1.5 flex-1 overflow-hidden border border-elden-gold/40 bg-black/60 p-px">
                     <div
                        className="h-full bg-gradient-to-r from-elden-gold/70 via-gold to-white shadow-[0_0_14px_rgba(218,165,32,0.9)] transition-[width] duration-150 ease-out"
                        style={{ width: `${progress}%` }}
                     />
                  </div>
                  <span className="w-9 text-right font-cinzel text-xs text-gold">{progress}%</span>
               </div>
               <p className="mt-4 font-garamond text-sm italic text-elden-gold/60">
                  Preparing your journey...
               </p>
            </div>
         </div>

         <div
            className={`pointer-events-none absolute inset-0 border-[0.5rem] border-elden-gold/0 transition-all duration-1000 ${
               isExiting ? "border-elden-gold/30 scale-105 opacity-0" : "opacity-100"
            }`}
         />
      </div>
   );
};

export default LoadingScreen;
