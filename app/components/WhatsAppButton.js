import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20buy%20SpaceMirror%20LED%20Mirror"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      WhatsApp
    </Link>
  );
}