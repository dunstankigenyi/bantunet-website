import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="hero-mesh relative overflow-hidden py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[url('/bantunet-map-visual.svg')] bg-cover bg-center opacity-[0.07]" aria-hidden="true" />
      <div className="absolute inset-0 bg-bantunet-navy/75" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bantunet-green/50 to-transparent" />
      <Container className="relative">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase text-bantunet-mint">
            <span className="h-px w-4 bg-bantunet-mint" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-200 sm:text-lg">{body}</p>
        </div>
      </Container>
    </section>
  );
}
