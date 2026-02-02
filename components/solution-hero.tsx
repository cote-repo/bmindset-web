import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SolutionHeroProps {
  badge: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}

export function SolutionHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: SolutionHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.45),transparent_65%)] blur-3xl animate-aurora" />
      <div className="absolute -bottom-48 left-[-15%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.28),transparent_70%)] blur-3xl animate-aurora-slow" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-primary">{badge}</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta ? (
                <Button asChild variant="outline">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md rounded-3xl border border-border bg-card/80 p-6 shadow-xl backdrop-blur">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_60%)]" />
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.14),transparent_65%)]" />
              <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-4">
                <div className="relative h-full w-full animate-tilt">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain drop-shadow-[0_25px_50px_rgba(15,23,42,0.35)]"
                    sizes="(max-width: 1024px) 80vw, 420px"
                  />
                </div>
              </div>
              <div className="absolute -right-6 top-6 h-20 w-20 rounded-full bg-emerald-300/20 blur-2xl" />
              <div className="absolute -left-6 bottom-6 h-20 w-20 rounded-full bg-amber-200/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
