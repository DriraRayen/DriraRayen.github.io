import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

interface DispatchSectionProps {
   onMessageSent: () => void;
}

const DispatchSection = ({ onMessageSent }: DispatchSectionProps) => {
   const [form, setForm] = useState({ email: "", subject: "", message: "" });
   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
   const [errorMessage, setErrorMessage] = useState("");

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("sending");
      setErrorMessage("");
      try {
         const response = await emailjs.send(
            "service_q65hw71",
            "template_nn6i2lk",
            {
               to_email: "rayen.drira@outlook.com",
               from_email: form.email,
               reply_to: form.email,
               subject: form.subject,
               message: form.message,
            },
            { publicKey: "YNBZOQs2BpPDmlNQ4" }
         );
         if (response.status !== 200) {
            throw new Error(response.text || `EmailJS returned status ${response.status}`);
         }
         setForm({ email: "", subject: "", message: "" });
         setStatus("sent");
         onMessageSent();
      } catch (error) {
         console.error("Failed to send contact email:", error);
         const emailError = error as { status?: number; text?: string; message?: string };
         const details = emailError.text || emailError.message;
         setErrorMessage(
            details
               ? `${emailError.status ? `(${emailError.status}) ` : ""}${details}`
               : "EmailJS rejected the request. Please check the service and template configuration."
         );
         setStatus("error");
      }
   };

   return (
      <section
         id="dispatch"
         className="relative py-24 px-4 md:px-8 lg:px-16 bg-elden-dark-light/30"
      >
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">
                  Tarnished&apos;s Dispatch
               </h2>
               <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/80">
                  Send a message across the Lands Between.
               </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-elden-gold/40 bg-gradient-to-br from-elden-dark-light/70 to-elden-dark/80 p-6 sm:p-12 shadow-gold">
               <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-elden-gold/50" />
               <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-elden-gold/50" />
               <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-4">
                     <input
                        type="email"
                        required
                        name="from_email"
                        value={form.email}
                        onChange={(event) => setForm({ ...form, email: event.target.value })}
                        placeholder="Your email"
                        aria-label="Your email"
                        className="w-full rounded-lg border border-elden-gold/40 bg-elden-dark px-4 py-3 font-garamond text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                     />
                     <input
                        type="text"
                        required
                        name="subject"
                        value={form.subject}
                        onChange={(event) => setForm({ ...form, subject: event.target.value })}
                        placeholder="Subject"
                        aria-label="Subject"
                        className="w-full rounded-lg border border-elden-gold/40 bg-elden-dark px-4 py-3 font-garamond text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                     />
                     <textarea
                        required
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={(event) => setForm({ ...form, message: event.target.value })}
                        placeholder="Your message"
                        aria-label="Your message"
                        className="w-full resize-y rounded-lg border border-elden-gold/40 bg-elden-dark px-4 py-3 font-garamond text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                     />
                     <div className="flex justify-center">
                        <button
                           type="submit"
                           disabled={status === "sending"}
                           className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-elden-gold/50 bg-elden-dark px-6 py-3 font-cinzel text-sm text-gold-light transition-all hover:border-gold hover:text-gold hover:shadow-lg hover:shadow-gold/20 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                           <Send className="w-5 h-5" />
                           {status === "sending" ? "Sending..." : "Send Message"}
                        </button>
                     </div>
                     {status === "error" && (
                        <p role="alert" className="font-garamond text-sm text-red-300">
                           The message could not be sent. {errorMessage}
                        </p>
                     )}
               </form>
            </div>
         </div>
      </section>
   );
};

export default DispatchSection;
