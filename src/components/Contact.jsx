import { ArrowRight, Globe2, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-900 p-5 sm:p-8 md:p-12">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-400 sm:text-base">
            Let&apos;s Connect
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Ready to Build Something Amazing?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Whether you need business automation, dashboards, streamlined
            operations, or custom software, I would love to discuss your
            project.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          <ContactCard
            icon={<Mail size={28} />}
            title="Email"
            value="saadmuhammad679@gmail.com"
            link="mailto:saadmuhammad679@gmail.com"
          />

          <ContactCard
            icon={<Phone size={28} />}
            title="Phone / WhatsApp"
            value="+92 334 3124811"
            link="https://wa.me/923343124811"
          />

          <ContactCard
            icon={<Globe2 size={28} />}
            title="LinkedIn"
            value="Connect with me"
            link="https://linkedin.com/in/muhammad-saad-27423a2a2/"
          />
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <a
            href="mailto:saadmuhammad679@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500 sm:w-auto"
          >
            Let&apos;s Talk
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-white/10 bg-slate-950 p-5 transition hover:border-blue-500/40 sm:p-6"
    >
      <div className="text-blue-400">{icon}</div>

      <p className="mt-4 text-sm text-slate-400">{title}</p>

      <h3 className="mt-2 break-all text-sm font-semibold leading-6 sm:text-base">
        {value}
      </h3>
    </a>
  );
}