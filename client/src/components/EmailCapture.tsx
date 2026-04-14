// Safe addition — Email capture form for newsletter/lead gen
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  source?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export default function EmailCapture({
  source = "website",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  className = "",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("https://rebelcommand.dev/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-green-400 font-mono text-sm tracking-wider">You're in. Watch your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 max-w-md mx-auto ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 bg-zinc-900/50 border border-zinc-800 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-rebel-red/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-rebel-red hover:bg-rebel-red/90 text-white font-display text-xs tracking-wider uppercase px-5 py-2.5 flex items-center gap-2 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "..." : buttonText}
        <ArrowRight className="w-3 h-3" />
      </button>
      {status === "error" && (
        <p className="absolute mt-12 text-red-400 text-xs">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
