import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white border border-gray-border rounded-3xl p-6 md:p-10">
        <Contact />
      </div>
    </main>
  );
}