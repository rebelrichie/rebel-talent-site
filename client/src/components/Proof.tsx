import { proofLogos, proofQuotes } from "@/data/proof";

export function LogoStrip() {
  if (proofLogos.length === 0) return null;
  return (
    <section data-testid="logo-strip" aria-label="Clients">
      <div className="band-wrap">
        <ul className="logo-strip">
          {proofLogos.map((logo) => (
            <li key={logo.name}>
              {logo.href ? (
                <a href={logo.href}>
                  <img src={logo.src} alt={logo.name} width={160} height={48} loading="lazy" />
                </a>
              ) : (
                <img src={logo.src} alt={logo.name} width={160} height={48} loading="lazy" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PullQuotes() {
  if (proofQuotes.length === 0) return null;
  return (
    <section data-testid="pull-quotes" aria-label="What clients say">
      <div className="band-wrap">
        <ul className="pull-quotes">
          {proofQuotes.map((item) => (
            <li key={item.name}>
              <blockquote className="pull-quote">
                <p>{item.quote}</p>
                <footer>
                  <cite>{item.name}</cite>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
