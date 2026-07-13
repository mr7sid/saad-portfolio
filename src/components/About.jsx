import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Hands-on experience with GoHighLevel and n8n automation",
  "Business dashboards using Power BI and Looker Studio",
  "Backend operations, payments, disputes, and SOP workflows",
  "API integrations, webhooks, and process optimization",
  "Programming knowledge in JavaScript, Python, HTML, and CSS",
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 sm:px-5">
            About Me
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            I combine technical skills with practical business experience.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I&apos;m Muhammad Saad, a final-semester Computer Science student
            with hands-on experience in business automation, dashboard
            development, backend operations, and workflow optimization.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I work with tools such as GoHighLevel, n8n, Power BI, Looker
            Studio, APIs, webhooks, and Meta Ads to help businesses reduce
            manual work, organize operations, and make better decisions through
            reliable systems and clear data.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            My background in software development also allows me to understand
            how systems work behind the scenes, build custom solutions, and
            connect different tools when standard setups are not enough.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl sm:p-8 md:p-10 lg:rounded-[2rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 sm:text-sm sm:tracking-[0.2em]">
            What I Bring
          </p>

          <div className="mt-7 space-y-5 sm:mt-8">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-blue-400"
                />

                <p className="text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
            <Stat value="1+" label="Year in Business Operations" />
            <Stat value="6+" label="Months in GHL Automation" />
            <Stat value="4" label="Core Service Areas" />
            <Stat value="100%" label="Focused on Practical Solutions" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-4 sm:p-5">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
    </div>
  );
}