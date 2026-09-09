import {
  ArrowRight,
  BarChart3,
  Workflow,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090B0F] px-5 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
      {/* =========================
          BACKGROUND ATMOSPHERE
      ========================== */}

      {/* Dotted grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(124,137,255,0.55) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Left blue glow */}
      <div className="pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-[#536BFF]/24 blur-[145px]" />

      {/* Right violet glow */}
      <div className="pointer-events-none absolute -right-44 top-10 h-[540px] w-[540px] rounded-full bg-[#8B5CF6]/20 blur-[155px]" />

      {/* Bottom center glow */}
      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-[280px] w-[900px] -translate-x-1/2 rounded-full bg-[#6C7CFF]/13 blur-[150px]" />

      {/* Left orbital arc */}
      <div className="pointer-events-none absolute -left-[320px] top-[70px] hidden h-[620px] w-[620px] rounded-full border border-[#6379FF]/35 shadow-[0_0_70px_rgba(99,121,255,0.15)] lg:block" />

      <div className="pointer-events-none absolute -left-[290px] top-[102px] hidden h-[560px] w-[560px] rounded-full border border-[#6379FF]/12 lg:block" />

      {/* Right orbital arc */}
      <div className="pointer-events-none absolute -right-[310px] top-[100px] hidden h-[600px] w-[600px] rounded-full border border-[#9A68FF]/35 shadow-[0_0_70px_rgba(139,92,246,0.14)] lg:block" />

      <div className="pointer-events-none absolute -right-[280px] top-[130px] hidden h-[540px] w-[540px] rounded-full border border-[#9A68FF]/12 lg:block" />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#6877FF]/40 bg-[#6C7CFF]/10 px-4 py-2.5 backdrop-blur-md sm:px-5">
            <span className="h-2 w-2 rounded-full bg-[#7C89FF] shadow-[0_0_16px_rgba(124,137,255,0.9)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B6BDFF] sm:text-sm">
              Business Automation &amp; Operations Specialist
            </span>
          </div>

          <h1 className="max-w-[720px] text-[42px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#F5F7FA] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[72px]">
            I build systems that help businesses{" "}
            <span className="bg-gradient-to-r from-[#8492FF] via-[#8D86FF] to-[#B070FF] bg-clip-text text-transparent">
              run smarter.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#A6AEBB] sm:text-lg sm:leading-8">
            I help businesses streamline operations through intelligent
            automation, data visualization, and optimized workflows. With
            experience in GoHighLevel, n8n, Power BI, Looker Studio, and Meta
            Ads, I design systems that reduce manual work, improve productivity,
            and provide clear business insights for better decision-making.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5873FF] via-[#6C7CFF] to-[#884FFF] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(108,124,255,0.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(108,124,255,0.42)] sm:w-auto"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#3A4355] bg-[#0D1118]/70 px-7 py-4 text-sm font-semibold text-[#F5F7FA] backdrop-blur-md transition-all duration-300 hover:border-[#7080FF]/55 hover:bg-[#151A23] sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#778191] sm:text-sm">
            <span>Automation</span>
            <span className="text-[#6572FF]">•</span>

            <span>Business Intelligence</span>
            <span className="text-[#6572FF]">•</span>

            <span>Operations</span>
            <span className="text-[#6572FF]">•</span>

            <span>Integrations</span>
          </div>
        </div>

        {/* =========================
            RIGHT PANEL
        ========================== */}

        <div className="relative z-10 mx-auto w-full max-w-[620px]">
          {/* Glow behind panel */}
          <div className="pointer-events-none absolute inset-8 rounded-[45px] bg-gradient-to-br from-[#536BFF]/24 via-[#6C7CFF]/8 to-[#8B5CF6]/22 blur-[85px]" />

          <div className="relative rounded-[28px] border border-[#384055]/80 bg-[#0D1118]/90 p-[1px] shadow-[0_32px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="rounded-[27px] bg-gradient-to-b from-[#10151D]/95 to-[#0B0F15]/95 p-4 sm:p-5">
              {/* Panel Top */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3E4659]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3E4659]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3E4659]" />
                </div>

                <span className="rounded-full border border-[#30384A] bg-[#10151D] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8791A3] sm:text-xs">
                  Core Expertise
                </span>
              </div>

              <div className="space-y-3">
                <DashboardCard
                  icon={<Workflow size={23} />}
                  title="Business Automation"
                  value="GoHighLevel • n8n • APIs • Webhooks"
                  tag="Automation"
                />

                <DashboardCard
                  icon={<BarChart3 size={23} />}
                  title="Business Intelligence"
                  value="Power BI • Looker Studio"
                  tag="Analytics"
                />

                <DashboardCard
                  icon={<Code2 size={23} />}
                  title="Software Development"
                  value="Node.js • JavaScript • Python • HTML • CSS"
                  tag="Development"
                />

                <DashboardCard
                  icon={<BriefcaseBusiness size={23} />}
                  title="Backend Operations"
                  value="Payments • Disputes • SOPs"
                  tag="Operations"
                />
              </div>

              {/* System status */}
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#2A3240] bg-[#0F141B] px-4 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34E889] shadow-[0_0_14px_rgba(52,232,137,0.6)]" />

                  <span className="text-xs font-medium text-[#C5CAD3] sm:text-sm">
                    Systems Ready
                  </span>
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#778191] sm:text-xs">
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          CURVED BOTTOM TRANSITION
      ========================== */}

      <div className="pointer-events-none absolute -bottom-[150px] left-1/2 h-[210px] w-[130%] -translate-x-1/2 rounded-[50%] border-t border-[#7468FF]/35 bg-[#090B0F] shadow-[0_-20px_70px_rgba(108,124,255,0.11)]" />
    </section>
  );
}

function DashboardCard({ icon, title, value, tag }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#293241] bg-gradient-to-r from-[#151B25] via-[#121821] to-[#0F141C] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6D7CFF]/55 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] sm:p-6">
      {/* Hover glow */}
      <div className="pointer-events-none absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#6C7CFF]/12 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Purple left line */}
      <div className="absolute left-0 top-8 h-11 w-[2px] rounded-full bg-gradient-to-b from-[#7C89FF] to-[#9A5CFF] shadow-[0_0_12px_rgba(124,137,255,0.45)]" />

      <div className="relative flex items-center gap-4 sm:gap-5">
        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#364054] bg-[#0C1118] text-[#8491FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 group-hover:border-[#7280FF]/60 group-hover:text-[#A5ADFF]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-[#A0A8B5] sm:text-[15px]">
              {title}
            </p>

            <span className="hidden rounded-full border border-[#303A4C] bg-[#0C1118]/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#758093] sm:inline-flex">
              {tag}
            </span>
          </div>

          <h3 className="mt-2 text-[17px] font-semibold leading-7 tracking-[-0.015em] text-[#F5F7FA] sm:text-[19px]">
            {value}
          </h3>

          {/* Mini indicator */}
          <div className="mt-4 flex items-center gap-1.5">
            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#6678FF] to-[#8F5EFF]" />
            <span className="h-1 w-4 rounded-full bg-[#6678FF]/45" />
            <span className="h-1 w-2 rounded-full bg-[#6678FF]/20" />
          </div>
        </div>
      </div>
    </div>
  );
}