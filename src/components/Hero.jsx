import {
  ArrowRight,
  BarChart3,
  Workflow,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-20">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="relative z-10">
          <p className="mb-5 inline-flex max-w-full rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-center text-sm font-medium leading-6 text-blue-300 sm:mb-6 sm:px-5 sm:py-2.5 sm:text-base">
            Business Automation &amp; Operations Specialist
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I build systems that help businesses run smarter.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I help businesses streamline operations through intelligent
            automation, data visualization, and optimized workflows. With
            experience in GoHighLevel, n8n, Power BI, Looker Studio, and Meta
            Ads, I design systems that reduce manual work, improve
            productivity, and provide clear business insights for better
            decision-making.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 sm:w-auto"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10 sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur sm:p-6 lg:rounded-[2rem]">
          <div className="mb-5 flex gap-2 sm:mb-6">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="space-y-4">
            <DashboardCard
              icon={<Workflow />}
              title="Business Automation"
              value="GoHighLevel • n8n • APIs • Webhooks"
            />

            <DashboardCard
              icon={<BarChart3 />}
              title="Business Intelligence"
              value="Power BI • Looker Studio"
            />

            <DashboardCard
              icon={<Code2 />}
              title="Software Development"
              value="Node.js • JavaScript • Python • HTML • CSS"
            />

            <DashboardCard
              icon={<BriefcaseBusiness />}
              title="Backend Operations"
              value="Payments • Disputes • SOPs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:p-5">
      <div className="mb-3 text-blue-400 sm:mb-4">{icon}</div>

      <p className="text-sm text-slate-400">{title}</p>

      <h3 className="mt-1 break-words text-base font-bold leading-6 sm:text-xl sm:leading-7">
        {value}
      </h3>
    </div>
  );
}