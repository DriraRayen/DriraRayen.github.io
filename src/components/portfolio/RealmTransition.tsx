import { useEffect, useState, useRef } from "react";

interface RealmTransitionProps {
   sectionId: string;
   children: React.ReactNode;
}

const RealmTransition = ({ sectionId, children }: RealmTransitionProps) => {
   const [isVisible, setIsVisible] = useState(false);
   const sectionRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
            }
         },
         {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
         }
      );

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      return () => {
         if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
         }
      };
   }, []);

   return (
      <div
         ref={sectionRef}
         className={`reveal-on-scroll ${isVisible ? "revealed" : ""}`}
      >
         {children}
      </div>
   );
};

export default RealmTransition;
