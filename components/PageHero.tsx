import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bantunet-navy py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[url('/bantunet-map-visual.svg')] bg-cover bg-center opacity-16" />
      <div className="absolute inset-0 bg-bantunet-navy/80" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bantunet-green/50 to-transparent" />
      <Container className="relative">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase text-bantunet-mint">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-200 sm:text-lg">{body}</p>
        </div>
      </Container>
    </section>
  );
}
