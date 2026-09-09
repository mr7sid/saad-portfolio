import {
  Check,
  Workflow,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Network,
} from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    text: "Hands-on experience with GoHighLevel and n8n automation",
  },
  {
    icon: BarChart3,
    text: "Business dashboards using Power BI and Looker Studio",
  },
  {
    icon: BriefcaseBusiness,
    text: "Backend operations, payments, disputes, and SOP workflows",
  },
  {
    icon: Network,
    text: "API integrations, webhooks, and process optimization",
  },
  {
    icon: Code2,
    text: "Programming knowledge in JavaScript, Python, HTML, and CSS",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090B0F] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#536BFF]/8 blur-[140px]" />

        <div className="absolute -right-48 bottom-0 h-[440px] w-[440px] rounded-full bg-[#8B5CF6]/7 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,137,255,0.55) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6C7CFF]/30 bg-[#6C7CFF]/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C89FF] shadow-[0_0_10px_rgba(124,137,255,0.7)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B6BDFF]">
              About Me
            </span>
          </div>

          <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            I combine technical skills with{" "}
            <span className="bg-gradient-to-r from-[#8290FF] to-[#A879FF] bg-clip-text text-transparent">
              practical business experience.
            </span>
          </h2>

          <div className="mt-7 max-w-2xl space-y-5">
            <p className="text-base leading-7 text-[#A6AEBB] sm:text-[17px] sm:leading-8">
              I&apos;m Muhammad Saad, a Computer Science graduate with hands-on
              experience in business automation, dashboard development, backend
              operations, workflow optimization, and building custom software
              and web solutions for business needs.
            </p>

            <p className="text-base leading-7 text-[#A6AEBB] sm:text-[17px] sm:leading-8">
              I work with technologies such as GoHighLevel, n8n, Power BI,
              Looker Studio, APIs, webhooks, and Meta Ads, along with
              JavaScript, Python, HTML, and CSS. I use these tools to build
              business automations, dashboards, custom software, and web
              solutions that reduce manual work and improve business
              operations.
            </p>

            <p className="text-base leading-7 text-[#A6AEBB] sm:text-[17px] sm:leading-8">
              My background in software development also allows me to understand
              how systems work behind the scenes, build custom solutions, and
              connect different tools when standard setups are not enough.
            </p>
          </div>

          {/* Small positioning line */}
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-[#778191] sm:text-sm">
            <span>Automation</span>
            <span className="text-[#6572FF]">•</span>
            <span>Operations</span>
            <span className="text-[#6572FF]">•</span>
            <span>Business Intelligence</span>
            <span className="text-[#6572FF]">•</span>
            <span>Development</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Panel glow */}
          <div className="pointer-events-none absolute inset-10 rounded-[40px] bg-gradient-to-br from-[#536BFF]/12 to-[#8B5CF6]/10 blur-[75px]" />

          <div className="relative rounded-[28px] border border-[#303849] bg-gradient-to-b from-[#111720]/95 to-[#0D1219]/95 p-[1px] shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
            <div className="rounded-[27px] bg-[#0D1219]/95 p-5 sm:p-7 lg:p-8">
              {/* Panel heading */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7F8CFF]">
                    What I Bring
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#F5F7FA] sm:text-2xl">
                    Practical skills. Business focus.
                  </h3>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-[#303A4C] bg-[#111720] text-[#8491FF] sm:flex">
                  <Check size={20} />
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-7 space-y-2.5">
                {highlights.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="group flex items-center gap-4 rounded-2xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-[#303849] hover:bg-[#131922]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#30394A] bg-[#10151D] text-[#7F8CFF] transition-all duration-300 group-hover:border-[#6C7CFF]/50 group-hover:bg-[#151B26]">
                      <Icon size={18} />
                    </div>

                    <p className="text-sm leading-6 text-[#B2B9C5] sm:text-[15px] sm:leading-7">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#303849] to-transparent" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Stat
                  value="1+"
                  label="Year in Business Operations"
                />

                <Stat
                  value="10+"
                  label="Months in GHL Automation"
                />

                <Stat
                  value="4"
                  label="Core Service Areas"
                />

                <Stat
                  value="100%"
                  label="Focused on Practical Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#293241] bg-gradient-to-br from-[#141A23] to-[#0E131A] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6C7CFF]/45 sm:p-5">
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6C7CFF]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <p className="relative bg-gradient-to-r from-[#F5F7FA] to-[#9FAAFF] bg-clip-text text-2xl font-semibold tracking-[-0.03em] text-transparent sm:text-3xl">
        {value}
      </p>

      <p className="relative mt-2 text-xs leading-5 text-[#7F8998] sm:text-sm sm:leading-6">
        {label}
      </p>
    </div>
  );
}