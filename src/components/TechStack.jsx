import {
  Workflow,
  Database,
  BarChart3,
  Globe,
  Code2,
  MonitorSmartphone,
  Server,
  BrainCircuit,
  FileSpreadsheet,
  Bot,
} from "lucide-react";

const techs = [
  {
    icon: Workflow,
    title: "GoHighLevel",
    subtitle: "CRM Automation",
  },
  {
    icon: Bot,
    title: "n8n",
    subtitle: "Workflow Automation",
  },
  {
    icon: BarChart3,
    title: "Looker Studio",
    subtitle: "Dashboards",
  },
  {
    icon: Database,
    title: "Power BI",
    subtitle: "Business Intelligence",
  },
  {
    icon: Code2,
    title: "JavaScript",
    subtitle: "Programming",
  },
  {
    icon: Server,
    title: "Node.js",
    subtitle: "Backend",
  },
  {
    icon: MonitorSmartphone,
    title: "React",
    subtitle: "Frontend",
  },
  {
    icon: FileSpreadsheet,
    title: "Google Sheets",
    subtitle: "Reporting",
  },
  {
    icon: Globe,
    title: "REST APIs",
    subtitle: "Integrations",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    subtitle: "OpenAI & Workflows",
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-[#090B0F] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-10 h-[420px] w-[420px] rounded-full bg-[#536BFF]/8 blur-[140px]" />

        <div className="absolute -right-48 bottom-0 h-[440px] w-[440px] rounded-full bg-[#8B5CF6]/8 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,137,255,0.55) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6C7CFF]/30 bg-[#6C7CFF]/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C89FF] shadow-[0_0_10px_rgba(124,137,255,0.7)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B6BDFF]">
              Technologies
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            Tools &amp; technologies{" "}
            <span className="bg-gradient-to-r from-[#8290FF] to-[#A879FF] bg-clip-text text-transparent">
              I work with.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A6AEBB] sm:text-lg sm:leading-8">
            I build automation systems, dashboards, and business solutions
            using modern technologies that help businesses save time and scale
            more efficiently.
          </p>
        </div>

        {/* Technology grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {techs.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.title}
                className="group relative overflow-hidden rounded-[22px] border border-[#293241] bg-gradient-to-br from-[#141A23] via-[#111720] to-[#0E131A] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6C7CFF]/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-6"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#6C7CFF]/12 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top accent */}
                <div className="absolute left-0 top-6 h-10 w-[2px] rounded-full bg-gradient-to-b from-[#7C89FF] to-[#9A5CFF] opacity-70 transition-all duration-300 group-hover:h-14 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#354052] bg-[#0D1219] text-[#8491FF] transition-all duration-300 group-hover:border-[#6C7CFF]/60 group-hover:bg-[#131925] group-hover:text-[#ADB4FF] group-hover:shadow-[0_0_25px_rgba(108,124,255,0.12)]">
                    <Icon size={23} />
                  </div>

                  {/* Name */}
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-[#F5F7FA] sm:text-xl">
                    {tech.title}
                  </h3>

                  {/* Category */}
                  <p className="mt-2 min-h-[24px] text-sm leading-6 text-[#8993A3]">
                    {tech.subtitle}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 flex items-center gap-1.5">
                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#6678FF] to-[#8F5EFF]" />
                    <span className="h-1 w-3 rounded-full bg-[#6678FF]/35" />
                    <span className="h-1 w-2 rounded-full bg-[#6678FF]/15" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom line */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#303849]" />

          <p className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.14em] text-[#687386]">
            Automation • Data • Development
          </p>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#303849]" />
        </div>
      </div>
    </section>
  );
}