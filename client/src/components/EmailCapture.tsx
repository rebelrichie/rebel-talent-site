// Newsletter CTA. Site email subscribe is retired; Rebel Built lives on LinkedIn.
import { ArrowRight } from "lucide-react";

const NEWSLETTER_HREF =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824";

interface EmailCaptureProps {
  source?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export default function EmailCapture({
  buttonText = "Follow on LinkedIn",
  className = "",
}: EmailCaptureProps) {
  return (
    <div className={`text-center ${className}`}>
      <a
        href={NEWSLETTER_HREF}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-email-capture-newsletter"
        className="inline-flex items-center gap-2 bg-rebel-red hover:bg-rebel-red/90 text-white font-display text-xs tracking-wider uppercase px-5 py-2.5 transition-colors no-underline"
      >
        {buttonText}
        <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
}
