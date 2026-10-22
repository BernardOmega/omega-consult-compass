import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";
import hero from "@/assets/Picture3-SLO-2.jpg";
import slide1 from "@/assets/Picture1-SLO.jpg";
import slide2 from "@/assets/Picture2-SLO.jpg";
import oracle from "@/assets/oracle_gold_partner_logo-300x69.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OMEGA consult – Umetnost pravega nasveta" },
      {
        name: "description",
        content:
          "Strateške in poslovne rešitve za cestna omrežja, javno infrastrukturo, promet, mobilnost in informacijske sisteme. 30 let izkušenj.",
      },
      { property: "og:title", content: "OMEGA consult – Umetnost pravega nasveta" },
      {
        property: "og:description",
        content: "Svetovanje in informacijski sistemi za promet, mobilnost in javno infrastrukturo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const resitve = [
  ["Mobilnost", "Načrtovanje trajnostne mobilnosti in celostne prometne strategije."],
  ["Promet", "Prometne študije, modeliranje in upravljanje cestnih omrežij."],
  ["Ekonomika prometa", "Analize stroškov, koristi in financiranja infrastrukture."],
  ["Okolje", "Presoje vplivov prometa na okolje in trajnostne rešitve."],
  ["Varnost", "Prometna varnost, revizije in ukrepi za zmanjšanje nesreč."],
  ["Informatika", "Razvoj informacijskih sistemov za javni sektor."],
  ["Investicijska dokumentacija", "Priprava investicijske in projektne dokumentacije."],
];

const produkti = ["OPCOST", "Vremenske postaje", "Video nadzor", "Centralni register vozil", "VIPOS", "Zdravstvo"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <img src={logo} alt="OMEGA consult" className="h-9 w-auto mix-blend-multiply" />
          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            {[
              ["O nas", "#o-nas"],
              ["Rešitve", "#resitve"],
              ["Produkti", "#produkti"],
              ["Kontakt", "#kontakt"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-muted-foreground transition-colors hover:text-primary">
                {l}
              </a>
            ))}
          </nav>
          <a
            href="mailto:info@omegaconsult.si"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-ink"
          >
            Pišite nam
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_1fr] md:pt-24">
        <div className="animate-rise">
          <p className="eyebrow">Svetovanje · Raziskave · Informatika</p>
          <h1 className="mt-6 text-5xl font-medium leading-[1.02] text-ink md:text-7xl">
            Umetnost <em className="text-primary">pravega</em> nasveta.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Strateške in poslovne rešitve za cestna omrežja, javno infrastrukturo, promet, mobilnost in
            informacijske sisteme.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#resitve" className="rounded-full bg-ink px-7 py-3.5 font-semibold text-ink-foreground transition hover:bg-primary">
              Naše rešitve
            </a>
            <a href="#kontakt" className="rounded-full border border-foreground/20 px-7 py-3.5 font-semibold transition hover:border-primary hover:text-primary">
              Kontakt
            </a>
          </div>
        </div>
        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/30 blur-2xl" />
          <img src={hero} alt="Umetnost pravega nasveta" className="aspect-[4/3] w-full rounded-3xl object-cover object-right shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card px-6 py-4 shadow-xl">
            <div className="font-display text-4xl font-semibold text-primary">30+</div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">let izkušenj</div>
          </div>
        </div>
      </section>

      <section id="o-nas" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow !text-accent">O nas</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Znanje, izkušnje in inovativne ideje.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-foreground/80">
            <p>
              Z znanjem in s 30-letnimi izkušnjami, inovativnimi idejami in sledenjem svetovnim razvojnim smernicam se
              OMEGA consult uvršča med prepoznavne celovite ponudnike na področju raziskovalne in svetovalne dejavnosti
              ter izdelave informacijskih sistemov.
            </p>
            <p>Vodilo podjetja je osredotočenost na interese in potrebe naročnikov ter uporabnikov naših storitev.</p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {[slide1, slide2].map((s) => (
            <img key={s} src={s} alt="" className="aspect-[16/7] w-full rounded-2xl object-cover object-left" />
          ))}
        </div>
      </section>

      <section id="resitve" className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">Rešitve</p>
        <h2 className="mt-4 max-w-2xl text-4xl text-ink md:text-5xl">
          Strokovne rešitve za promet, varnost, mobilnost in okolje.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {resitve.map(([t, d], i) => (
            <div key={t} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-xl font-semibold text-ink">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
          <a href="#kontakt" className="flex flex-col justify-end bg-accent p-8 text-accent-foreground">
            <span className="font-display text-2xl">Potrebujete nasvet?</span>
            <span className="mt-2 text-sm font-semibold">Pogovorimo se →</span>
            <span className="mt-8 font-display text-xl">Pokličite 01 2000 170</span>
          </a>
        </div>
      </section>

      <section id="produkti" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Produkti</p>
              <h2 className="mt-4 max-w-xl text-4xl text-ink md:text-5xl">Informacijski sistemi in digitalna orodja.</h2>
            </div>
            <img src={oracle} alt="Oracle Gold Partner" className="h-10 w-auto mix-blend-multiply" />
          </div>
          <ul className="mt-12 flex flex-wrap gap-3">
            {produkti.map((p) => (
              <li key={p} className="rounded-full border border-foreground/15 bg-card px-6 py-3 text-lg font-semibold text-ink">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-muted-foreground">
            Izkušnje in strokovno znanje, pridobljeni s projekti na področju infrastrukture, prometa in informacijske
            tehnologije – doma in v mednarodnem sodelovanju.
          </p>
        </div>
      </section>

      <footer id="kontakt" className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-4xl md:text-5xl">Začnimo pogovor.</h2>
            <a href="mailto:info@omegaconsult.si" className="mt-6 inline-block font-display text-2xl text-accent underline-offset-8 hover:underline md:text-3xl">
              info@omegaconsult.si
            </a>
            <br />
            <a href="tel:+38612000170" className="mt-3 inline-block font-display text-2xl text-accent underline-offset-8 hover:underline md:text-3xl">
              01 2000 170
            </a>
          </div>
          <address className="not-italic leading-loose text-ink-foreground/80">
            <strong className="text-ink-foreground">OMEGA consult, d.o.o., Ljubljana</strong>
            <br />
            Gregorčičeva ulica 7
            <br />
            1000 Ljubljana
            <br />
            <a href="tel:+38612000170" className="text-ink-foreground underline-offset-4 hover:text-accent hover:underline">
              telefon: 01 2000 170
            </a>
          </address>
        </div>
        <div className="mx-auto mt-16 max-w-6xl border-t border-ink-foreground/15 px-6 pt-6 text-sm text-ink-foreground/50">
          © {new Date().getFullYear()} OMEGA CONSULT d.o.o.
        </div>
      </footer>
    </div>
  );
}
