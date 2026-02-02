"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b1020] pt-20 text-white">
      {/* Cinematic background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.2),transparent_60%)]" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.55),transparent_65%)] blur-3xl animate-aurora" />
        <div className="absolute -bottom-48 left-[-15%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.35),transparent_70%)] blur-3xl animate-aurora-slow" />
        <div
          className="absolute inset-0 opacity-35 mix-blend-soft-light"
          style={{ backgroundImage: "url('/illustrations/cinematic-noise.svg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur">
              <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              WebGIS | GeoAI | Earth Observation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
              Unleashing the Power of{" "}
              <span className="text-emerald-300">Maps</span> &{" "}
              <span className="text-amber-200">Satellite Data</span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-200/90 max-w-xl mx-auto lg:mx-0 text-pretty">
              Unlocking GeoAI-Powered Actionable Insights from Geographical Data to Maximize Your Business Potential
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-emerald-300 text-[#0b1020] hover:bg-emerald-200 gap-2 shadow-[0_16px_40px_rgba(16,185,129,0.35)]"
              >
                <Link href="/book-appointment">
                  Talk to us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/10 bg-transparent">
                <Play className="h-4 w-4" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Hero Visual - Cinematic 3D Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto [perspective:1200px]">
              <div className="absolute inset-0 animate-tilt [transform-style:preserve-3d]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_55%)] blur-2xl" />
                <Image
                  src="/illustrations/cinematic-planet.svg"
                  alt="Cinematic 3D planet illustration"
                  width={800}
                  height={800}
                  className="w-full h-full drop-shadow-[0_30px_80px_rgba(15,23,42,0.6)] animate-planet-spin"
                  priority
                />
                <div className="absolute inset-0 rounded-full border border-white/15 animate-slow-spin" />
                <div className="absolute inset-6 rounded-full border border-white/10 animate-slow-spin-reverse" />
              </div>

              {/* Radiating wave rings */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-10 rounded-full border border-emerald-300/30 animate-wave" />
                <div className="absolute inset-10 rounded-full border border-amber-200/25 animate-wave wave-delay-1" />
                <div className="absolute inset-10 rounded-full border border-sky-200/25 animate-wave wave-delay-2" />
              </div>

              {/* Orbiting markers */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              </div>
              <div className="absolute inset-0 animate-orbit-slow">
                <div className="absolute right-8 bottom-10 h-3 w-3 rounded-full bg-amber-200 shadow-[0_0_22px_rgba(251,191,36,0.8)]" />
              </div>

              {/* Floating data cards */}
              <div className="absolute -top-4 -right-4 bg-white/10 p-3 rounded-lg border border-white/15 backdrop-blur-md shadow-[0_20px_50px_rgba(15,23,42,0.5)] animate-float-slow">
                <div className="text-xs text-slate-200">Active Nodes</div>
                <div className="text-lg font-bold text-white">2,847</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 p-3 rounded-lg border border-white/15 backdrop-blur-md shadow-[0_20px_50px_rgba(15,23,42,0.5)] animate-float-delay">
                <div className="text-xs text-slate-200">Data Points</div>
                <div className="text-lg font-bold text-amber-200">1.2M+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
