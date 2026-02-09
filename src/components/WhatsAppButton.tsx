import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "2347052955431";
  const message = encodeURIComponent("Hello, I'd like to inquire about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};
