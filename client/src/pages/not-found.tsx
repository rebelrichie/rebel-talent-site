import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="py-32 text-center">
        <div className="max-w-xl mx-auto px-4">
          <div className="font-display text-8xl font-bold text-rebel-red mb-4">404</div>
          <h1 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4" data-testid="text-not-found">
            Target Not Found
          </h1>
          <p className="text-zinc-400 text-sm mb-8">
            This page doesn't exist. Let's get you back on track.
          </p>
          <Link href="/" data-testid="link-go-home">
            <Button className="font-display tracking-wider uppercase text-sm">
              Return to Base <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
