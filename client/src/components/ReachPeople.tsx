import { BOOK_CHRIS_HREF } from "@/components/ContingentChrisSection";

const PEOPLE = [
  {
    name: "Richie Lampani",
    role: "Founder, Rebel Talent Systems",
    email: "richie@rebeltalentsystems.com",
    bookHref: "/strategy-call",
    bookExternal: false,
    emailTestId: "link-reach-richie-email",
    bookTestId: "link-reach-richie-book",
  },
  {
    name: "Chris Moscato",
    role: "Head of Client Acquisition",
    email: "christopher@rebeltalentsystems.com",
    bookHref: BOOK_CHRIS_HREF,
    bookExternal: true,
    emailTestId: "link-reach-chris-email",
    bookTestId: "link-reach-chris-book",
  },
];

export default function ReachPeople({ id, tone = "plain" }: { id?: string; tone?: "plain" | "band" }) {
  const onBand = tone === "band";
  return (
    <section id={id} data-testid={id === "reach" ? "section-reach" : undefined} className={onBand ? "mi-band bg-[#003E53]" : "bg-white"}>
      <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16">
        <h2 className={`text-[34px] leading-none mb-8 ${onBand ? "text-white" : "text-[#137287]"}`}>
          Reach us
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {PEOPLE.map((person) => (
            <article key={person.name}>
              <h3 className={`text-[25px] leading-tight mb-1 ${onBand ? "text-white" : "text-[#272c30]"}`}>{person.name}</h3>
              <p className={`text-[16px] mb-4 ${onBand ? "text-white/80" : "text-[#272c30]"}`}>{person.role}</p>
              <a
                href={`mailto:${person.email}`}
                data-testid={person.emailTestId}
                className={`block text-[18px] no-underline mb-4 ${onBand ? "text-white underline underline-offset-4" : "text-[#137287] underline underline-offset-4"}`}
              >
                {person.email}
              </a>
              {person.bookExternal ? (
                <a href={person.bookHref} target="_blank" rel="noopener noreferrer" data-testid={person.bookTestId} className="mi-btn">
                  Book a call
                </a>
              ) : (
                <a href={person.bookHref} data-testid={person.bookTestId} className="mi-btn">
                  Book a call
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
