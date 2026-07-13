import {
  Workflow,
  BarChart3,
  Database,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: <Workflow size={32} />,
    title: "Business Automation",
    description:
      "Automate repetitive workflows using GoHighLevel and n8n to save time, reduce manual work, and improve efficiency.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Business Intelligence",
    description:
      "Build powerful dashboards with Power BI and Looker Studio to transform business data into actionable insights.",
  },
  {
    icon: <Database size={32} />,
    title: "CRM & Operations",
    description:
      "Optimize CRM systems, payment workflows, operational processes, and customer management for better business performance.",
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "AI Workflow Integration",
    description:
      "Connect AI tools with your business processes to automate tasks, enhance productivity, and streamline daily operations.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="text-center">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 sm:px-5">
          What I Do
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Helping Businesses Work Smarter
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          I help businesses simplify operations by combining automation,
          dashboards, CRM optimization, and AI-powered workflows into one
          seamless system.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:mt-20 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-white/10 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-800 sm:p-8"
          >
            <div className="mb-5 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-400 sm:mb-6 sm:p-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold sm:text-2xl">
              {service.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}