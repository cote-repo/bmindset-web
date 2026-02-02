"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "BMINDSET has delivered exceptional geospatial solutions that transformed our operations. Their structured approach and technical expertise made them stand out from competitors.",
    author: "Technology Director",
    company: "Leading Logistics Company",
  },
  {
    quote: "Seamless delivery with no compromise on quality of work. BMINDSET has done exceptionally well in executing enterprise GIS projects for our organization.",
    author: "Project Manager",
    company: "Energy Corporation",
  },
  {
    quote: "A team full of cutting-edge talent, dedication, and passion for GIS. We wholeheartedly recommend BMINDSET to all who want to implement Enterprise GIS solutions.",
    author: "Operations Head",
    company: "Smart City Initiative",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Raving Reviews &{" "}
            <span className="text-primary">Stories of Geospatial Transformation</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                {testimonials[current].quote}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[current].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[current].company}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    className="rounded-full bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous testimonial</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="rounded-full bg-transparent"
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next testimonial</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
