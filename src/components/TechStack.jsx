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
    icon: <Workflow size={34} />,
    title: "GoHighLevel",
    subtitle: "CRM Automation",
  },
  {
    icon: <Bot size={34} />,
    title: "n8n",
    subtitle: "Workflow Automation",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Looker Studio",
    subtitle: "Dashboards",
  },
  {
    icon: <Database size={34} />,
    title: "Power BI",
    subtitle: "Business Intelligence",
  },
  {
    icon: <Code2 size={34} />,
    title: "JavaScript",
    subtitle: "Programming",
  },
  {
    icon: <Server size={34} />,
    title: "Node.js",
    subtitle: "Backend",
  },
  {
    icon: <MonitorSmartphone size={34} />,
    title: "React",
    subtitle: "Frontend",
  },
  {
    icon: <FileSpreadsheet size={34} />,
    title: "Google Sheets",
    subtitle: "Reporting",
  },
  {
    icon: <Globe size={34} />,
    title: "REST APIs",
    subtitle: "Integrations",
  },
  {
    icon: <BrainCircuit size={34} />,
    title: "AI Automation",
    subtitle: "OpenAI & Workflows",
  },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="text-center">

        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          Technologies
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Tools & Technologies I Work With
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          I build automation systems, dashboards, and business solutions using
          modern technologies that help businesses save time and scale more
          efficiently.
        </p>

      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

        {techs.map((tech) => (

          <div
            key={tech.title}
            className="rounded-3xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-800"
          >

            <div className="mb-5 text-blue-400">
              {tech.icon}
            </div>

            <h3 className="text-xl font-bold">
              {tech.title}
            </h3>

            <p className="mt-2 text-slate-400">
              {tech.subtitle}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}