import InteriorHero from "@/components/InteriorHero";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <PageSEO
        title="Privacy Policy | Rebel Talent Systems"
        description="How Rebel Talent Systems collects, uses, and protects the information you share when you contact us, book a strategy call, or apply to a role."
        path="/privacy-policy"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Privacy Policy", item: "https://rebeltalentsystems.com/privacy-policy" },
        ]}
      />
      <InteriorHero>
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C8102E] mb-3">Legal</p>
        <h1 className="text-[#0C1220] mb-4" data-testid="heading-privacy">
          Privacy Policy
        </h1>
        <p className="text-[#5C6570] text-sm">Last updated: April 2026</p>
      </InteriorHero>
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 text-[#3D4450] text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-bold text-white uppercase mb-3">Information We Collect</h2>
              <p>Rebel Talent Systems collects information you voluntarily provide when you contact us, book a strategy call, or submit an application. This may include your name, email address, phone number, and professional background.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white uppercase mb-3">How We Use Your Information</h2>
              <p>We use the information collected to respond to inquiries, schedule consultations, evaluate candidates for open roles, and send relevant communications about our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white uppercase mb-3">Data Retention</h2>
              <p>We retain your information for as long as necessary to fulfill the purpose for which it was collected, or as required by law. You may request deletion of your data at any time by contacting us directly.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white uppercase mb-3">Cookies & Analytics</h2>
              <p>This website may use basic analytics tools to understand visitor behavior in aggregate. No personally identifiable information is collected through cookies without your consent.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white uppercase mb-3">Third-Party Services</h2>
              <p>We use Calendly for scheduling, LinkedIn for professional networking, and Fourthwall for merchandise. Each of these services has its own privacy policy governing their data practices.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white uppercase mb-3">Your Rights</h2>
              <p>You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, contact us at <a href="mailto:richie@rebeltalentsystems.com" className="text-rebel-red hover:text-white transition-colors no-underline">richie@rebeltalentsystems.com</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white uppercase mb-3">Contact</h2>
              <p>Questions about this policy? Reach out directly:<br />
                <a href="mailto:richie@rebeltalentsystems.com" className="text-rebel-red hover:text-white transition-colors no-underline">richie@rebeltalentsystems.com</a><br />
                Rebel Talent Systems
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
