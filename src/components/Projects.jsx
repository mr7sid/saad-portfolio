import ProjectCard from "./ProjectCard";

import workflow from "../assets/projects/booking-workflow.png";
import sheetNode from "../assets/projects/booking-google-sheet.png";
import tracker from "../assets/projects/booking-tracker.png";
import appointmentWorkflow from "../assets/projects/appointment-confirmation.png";
import organicWorkflow from "../assets/projects/organic-workflow.png";
import organicDashboardBlur from "../assets/projects/organic-dashboard-blur.png";
import n8nWorkflow from "../assets/projects/n8n-job-workflow.png";
import jobAlert from "../assets/projects/n8n-job-email.png";
import salesPerformance from "../assets/projects/sales-performance.png";
import closerPerformance from "../assets/projects/closer-performance.png";
import revenueDashboard from "../assets/projects/revenue-dashboard.png";

const projects = [
  {
    title: "Automated Call Booking Tracker",
    category: "GoHighLevel Automation",
    challenge:
      "Managing appointments across multiple calendars manually made reporting difficult, increased administrative work, and created inconsistent booking records.",
    solution:
      "Built a GoHighLevel workflow that listens for appointment events across multiple calendars, locates the correct row in Google Sheets, and updates a centralized booking tracker automatically.",
    features: [
      "Multi-calendar appointment tracking",
      "Google Sheets integration",
      "Automatic spreadsheet row lookup",
      "Real-time booking data updates",
      "Centralized booking tracker",
      "Reduced manual data entry",
    ],
    technologies: [
      "GoHighLevel",
      "Google Sheets",
      "CRM",
      "Workflow Automation",
      "Business Operations",
    ],
    images: [workflow, sheetNode, tracker],
  },

  {
    title: "Appointment Confirmation & Reminder Automation",
    category: "GoHighLevel Automation",
    challenge:
      "Businesses often experience missed appointments and inconsistent communication after bookings. Managing confirmations manually across multiple calendars also creates unnecessary administrative work.",
    solution:
      "Built a GoHighLevel workflow that monitors appointment bookings, applies contact tags, creates or updates CRM opportunities, and automatically sends confirmation emails and SMS messages.",
    features: [
      "Multi-calendar appointment monitoring",
      "Automatic contact tagging",
      "CRM opportunity creation and updates",
      "Instant confirmation emails",
      "Automated SMS notifications",
      "Reduced manual follow-up",
    ],
    technologies: [
      "GoHighLevel",
      "CRM Automation",
      "Email Automation",
      "SMS Automation",
      "Workflow Automation",
    ],
    images: [appointmentWorkflow],
  },

  {
    title: "Lead Attribution & Reporting Automation",
    category: "CRM Reporting & Workflow Automation",
    challenge:
      "Businesses receiving leads from multiple marketing sources often struggle to maintain an accurate reporting system. Manual spreadsheet updates are time-consuming and can lead to inconsistent reporting.",
    solution:
      "Developed a GoHighLevel workflow that detects lead sources using contact tags, routes each lead through conditional logic, and automatically updates a centralized Google Sheets reporting dashboard.",
    features: [
      "Automatic lead source detection",
      "Conditional workflow routing",
      "Google Sheets synchronization",
      "Automatic row lookup and updates",
      "Real-time reporting dashboard",
      "Reduced manual reporting tasks",
    ],
    technologies: [
      "GoHighLevel",
      "Google Sheets",
      "CRM Automation",
      "Conditional Logic",
      "Workflow Automation",
    ],
    images: [organicWorkflow, organicDashboardBlur],
  },

  {
    title: "AI-Powered LinkedIn Job Monitoring & Notification System",
    category: "n8n Automation • API Integration",
    challenge:
      "Professionals searching for specialized HSE roles often spend hours manually checking LinkedIn for new opportunities. This repetitive process is inefficient and increases the risk of missing time-sensitive job postings.",
    solution:
      "Developed an n8n workflow that continuously monitors LinkedIn, extracts newly published HSE jobs, filters only relevant positions, removes duplicates, and instantly delivers job notifications via Gmail and Telegram.",
    features: [
      "Automated LinkedIn job monitoring",
      "HTML data extraction",
      "Job filtering by position",
      "Duplicate detection",
      "Email notifications",
      "Telegram alerts",
      "Scheduled execution every 3 minutes",
    ],
    technologies: [
      "n8n",
      "LinkedIn",
      "Gmail API",
      "Telegram Bot",
      "JavaScript",
      "Workflow Automation",
    ],
    images: [n8nWorkflow, jobAlert],
  },

  {
    title: "Sales Performance & Team Analytics Dashboard",
    category: "Looker Studio • Business Intelligence",
    challenge:
      "Sales teams often struggle to monitor appointments, show rates, conversion rates, and individual team performance across multiple spreadsheets and disconnected reports.",
    solution:
      "Designed an interactive Looker Studio dashboard that consolidates key sales metrics into a single executive view. Managers can monitor setter performance, appointment outcomes, conversion rates, and overall team productivity in real time.",
    features: [
      "Interactive KPI dashboard",
      "Setter performance tracking",
      "Appointment and show rate analytics",
      "Close rate reporting",
      "Team performance comparison",
      "Real-time business insights",
    ],
    technologies: [
      "Looker Studio",
      "Google Sheets",
      "Business Intelligence",
      "Data Visualization",
      "Reporting",
    ],
    images: [salesPerformance, closerPerformance],
  },

  {
    title: "Revenue & Financial Performance Dashboard",
    category: "Looker Studio • Executive Reporting",
    challenge:
      "Business owners need quick access to revenue, lead quality, appointments, and financial performance without manually combining data from multiple systems.",
    solution:
      "Built an executive dashboard that visualizes revenue, backend revenue, cash collection, lead quality, booked calls, and operational KPIs. The dashboard provides decision-makers with real-time financial insights from a centralized reporting interface.",
    features: [
      "Revenue analytics",
      "Cash collection tracking",
      "Executive KPI monitoring",
      "Lead quality reporting",
      "Interactive charts",
      "Operational performance metrics",
    ],
    technologies: [
      "Looker Studio",
      "Google Sheets",
      "Business Intelligence",
      "Analytics",
      "Reporting",
    ],
    images: [revenueDashboard],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#090B0F] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-40 h-[480px] w-[480px] rounded-full bg-[#536BFF]/8 blur-[150px]" />

        <div className="absolute -right-48 bottom-40 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/8 blur-[160px]" />

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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6C7CFF]/30 bg-[#6C7CFF]/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C89FF] shadow-[0_0_10px_rgba(124,137,255,0.7)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B6BDFF]">
              Selected Work
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            Systems built to solve{" "}
            <span className="bg-gradient-to-r from-[#8290FF] to-[#A879FF] bg-clip-text text-transparent">
              real business problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#A6AEBB] sm:text-lg sm:leading-8">
            Real automation, reporting, and operational systems designed to
            reduce manual work, improve visibility, and make business processes
            easier to manage.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 space-y-10 sm:mt-16 lg:space-y-14">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              number={String(index + 1).padStart(2, "0")}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}