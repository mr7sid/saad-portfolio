import {
  Workflow,
  BarChart3,
  Database,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive workflows using GoHighLevel and n8n to save time, reduce manual work, and improve efficiency.",
    capabilities: [
      "GoHighLevel",
      "n8n",
      "Workflow Logic",
      "Operational Automation",
    ],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Build powerful dashboards with Power BI and Looker Studio to transform business data into actionable insights.",
    capabilities: [
      "Power BI",
      "Looker Studio",
      "KPI Reporting",
      "Performance Tracking",
    ],
  },
  {
    number: "03",
    icon: Database,
    title: "CRM & Operations",
    description:
      "Optimize CRM systems, payment workflows, operational processes, and customer management for better business performance.",
    capabilities: [
      "CRM Systems",
      "Pipelines",
      "Payments",
      "Process Optimization",
    ],
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "AI Workflow Integration",
    description:
      "Connect AI tools with your business processes to automate tasks, enhance productivity, and streamline daily operations.",
    capabilities: [
      "APIs",
      "Webhooks",
      "AI Workflows",
      "Connected Systems",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#090B0F] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-[#536BFF]/8 blur-[140px]" />

        <div className="absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#8B5CF6]/8 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,137,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6C7CFF]/30 bg-[#6C7CFF]/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C89FF] shadow-[0_0_10px_rgba(124,137,255,0.7)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B6BDFF]">
              What I Do
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            Helping businesses{" "}
            <span className="bg-gradient-to-r from-[#8290FF] to-[#A879FF] bg-clip-text text-transparent">
              work smarter.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#A6AEBB] sm:text-lg sm:leading-8">
            I help businesses simplify operations by combining automation,
            dashboards, CRM optimization, and AI-powered workflows into one
            seamless system.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[26px] border border-[#293241] bg-gradient-to-br from-[#141A23] via-[#111720] to-[#0E131A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6C7CFF]/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-7 lg:p-8"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6C7CFF]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Left accent */}
                <div className="absolute left-0 top-8 h-14 w-[2px] rounded-full bg-gradient-to-b from-[#7C89FF] to-[#9A5CFF] opacity-80" />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#354052] bg-[#0D1219] text-[#8491FF] transition-all duration-300 group-hover:border-[#6C7CFF]/55 group-hover:text-[#A7AFFF]">
                      <Icon size={22} />
                    </div>

                    {/* More visible number */}
                    <span className="text-4xl font-semibold tracking-[-0.05em] text-[#59657A] transition-all duration-300 group-hover:text-[#8491FF] sm:text-5xl">
                      {service.number}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#F5F7FA] sm:text-2xl">
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        size={19}
                        className="shrink-0 text-[#667083] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8A96FF]"
                      />
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#929BAA] sm:text-base sm:leading-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Larger capability/tool pills */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {service.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-[#354052] bg-[#0C1118]/80 px-4 py-2 text-sm font-medium text-[#AAB3C2] transition-all duration-300 group-hover:border-[#6C7CFF]/40 group-hover:bg-[#121824] group-hover:text-[#D5D9FF]"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-8 flex items-center gap-1.5">
                    <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#6678FF] to-[#8F5EFF]" />
                    <span className="h-1 w-5 rounded-full bg-[#6678FF]/35" />
                    <span className="h-1 w-2 rounded-full bg-[#6678FF]/15" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}