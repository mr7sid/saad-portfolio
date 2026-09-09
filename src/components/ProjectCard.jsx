import { useState } from "react";
import {
  ArrowRight,
  Check,
  Layers3,
} from "lucide-react";

export default function ProjectCard({
  title,
  category,
  challenge,
  solution,
  features,
  technologies,
  images,
  number,
  reverse = false,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#293241] bg-gradient-to-br from-[#131922] via-[#10161E] to-[#0D1219] shadow-[0_25px_70px_rgba(0,0,0,0.28)] transition-all duration-500 hover:border-[#6C7CFF]/40">
      {/* Hover atmosphere */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6C7CFF]/8 blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative grid lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* ================= IMAGE SIDE ================= */}

        <div className="border-b border-[#293241] bg-[#0B1016] p-4 sm:p-6 lg:border-b-0 lg:p-7">
          {/* Top */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="inline-flex rounded-full border border-[#6C7CFF]/30 bg-[#6C7CFF]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#AEB7FF] sm:text-xs">
              {category}
            </span>

            <span className="text-4xl font-semibold tracking-[-0.06em] text-[#394456] sm:text-5xl">
              {number}
            </span>
          </div>

          {/* Main screenshot frame */}
          <div className="relative overflow-hidden rounded-2xl border border-[#30394A] bg-[#080C11] p-2 sm:p-3">
            {/* window bar */}
            <div className="mb-2 flex items-center justify-between px-1 py-1">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#374052]" />
                <span className="h-2 w-2 rounded-full bg-[#374052]" />
                <span className="h-2 w-2 rounded-full bg-[#374052]" />
              </div>

              <div className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.13em] text-[#657083] sm:text-[10px]">
                <Layers3 size={12} />
                Project Preview
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-[#0D1219]">
              <img
                src={images[selectedIndex]}
                alt={`${title} screenshot ${selectedIndex + 1}`}
                className="h-[230px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.015] sm:h-[340px] lg:h-[410px]"
              />
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`shrink-0 overflow-hidden rounded-xl border p-1 transition-all duration-300 ${
                    selectedIndex === index
                      ? "border-[#7786FF] bg-[#6C7CFF]/10 shadow-[0_0_18px_rgba(108,124,255,0.12)]"
                      : "border-[#293241] bg-[#0D1219] hover:border-[#46516A]"
                  }`}
                  aria-label={`View project screenshot ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    className="h-14 w-24 rounded-lg object-cover sm:h-16 sm:w-28"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ================= CONTENT SIDE ================= */}

        <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9 xl:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#7C89FF]">
            Case Study {number}
          </p>

          <h3 className="mt-4 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#F5F7FA] sm:text-3xl lg:text-[34px]">
            {title}
          </h3>

          {/* Challenge */}
          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6F7A8D]">
              Business Challenge
            </p>

            <p className="mt-3 text-sm leading-7 text-[#9DA6B5] sm:text-[15px]">
              {challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6F7A8D]">
              Solution
            </p>

            <p className="mt-3 text-sm leading-7 text-[#B1B8C4] sm:text-[15px]">
              {solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6F7A8D]">
              Key Features
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl border border-[#28313E] bg-[#0D1219]/75 px-3 py-2.5"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C7CFF]/12 text-[#8B96FF]">
                    <Check size={12} />
                  </div>

                  <span className="text-xs leading-5 text-[#A6AEBB] sm:text-[13px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6F7A8D]">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#364052] bg-[#0D1219] px-3.5 py-2 text-xs font-medium text-[#ABB4C2] transition-colors duration-300 hover:border-[#6C7CFF]/45 hover:text-[#D7DBFF]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex items-center justify-between border-t border-[#293241] pt-6">
            <div className="flex items-center gap-1.5">
              <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#6678FF] to-[#8F5EFF]" />
              <span className="h-1 w-4 rounded-full bg-[#6678FF]/35" />
              <span className="h-1 w-2 rounded-full bg-[#6678FF]/15" />
            </div>

            <span className="group/link inline-flex items-center gap-2 text-xs font-semibold text-[#8B96FF] sm:text-sm">
              Project Overview

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}