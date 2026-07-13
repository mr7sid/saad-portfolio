import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  title,
  category,
  challenge,
  solution,
  features,
  technologies,
  images,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const captions = [
    "Workflow Overview",
    "Google Sheets Integration",
    "Booking Tracker",
  ];

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl lg:rounded-[32px]">
      {/* Main image */}
      <div className="bg-slate-950 p-3 sm:p-5 lg:p-6">
        <div className="mb-5 sm:mb-6">
          <span className="inline-flex max-w-full rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 text-xs font-medium leading-5 text-green-300 sm:px-4 sm:text-sm">
            {category}
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {title}
          </h2>
        </div>

        <img
          src={images[selectedIndex]}
          alt={`${title} - ${captions[selectedIndex] || `image ${selectedIndex + 1}`}`}
          className="h-[220px] w-full rounded-xl object-contain transition-all duration-500 sm:h-[340px] lg:h-[500px] lg:rounded-2xl"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto border-b border-white/10 bg-slate-950 px-4 py-5 sm:justify-center sm:px-6 sm:py-6">
        {images.map((img, index) => (
          <button
            type="button"
            key={`${img}-${index}`}
            onClick={() => setSelectedIndex(index)}
            className="shrink-0 text-center"
            aria-label={`View ${captions[index] || `project image ${index + 1}`}`}
          >
            <img
              src={img}
              alt={captions[index] || `${title} screenshot ${index + 1}`}
              className={`h-16 w-28 rounded-lg border object-cover transition-all duration-300 hover:scale-105 sm:h-24 sm:w-40 sm:rounded-xl ${
                selectedIndex === index
                  ? "border-blue-500 shadow-lg shadow-blue-500/20"
                  : "border-white/10"
              }`}
            />

            <p className="mt-2 max-w-28 text-xs leading-5 text-slate-400 sm:mt-3 sm:max-w-40 sm:text-sm">
              {captions[index] || `Screenshot ${index + 1}`}
            </p>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-400 sm:text-sm">
            {category}
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <div className="mt-7 sm:mt-8">
            <h3 className="font-semibold text-white">Business Challenge</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              {challenge}
            </p>
          </div>

          <div className="mt-7 sm:mt-8">
            <h3 className="font-semibold text-white">Solution</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              {solution}
            </p>
          </div>

          <button
            type="button"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-blue-500 sm:mt-10 sm:w-auto"
          >
            View Workflow
            <ArrowRight size={18} />
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-white">Key Features</h3>

          <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-white/10 bg-slate-950 p-4 text-sm leading-6 transition hover:border-blue-500/40 sm:text-base"
              >
                ✓ {feature}
              </div>
            ))}
          </div>

          <h3 className="mt-8 font-semibold text-white sm:mt-10">
            Technologies
          </h3>

          <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs text-blue-300 sm:px-4 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}