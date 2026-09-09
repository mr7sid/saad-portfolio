import {
  ArrowRight,
  Globe2,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090B0F] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-20 h-[420px] w-[420px] rounded-full bg-[#536BFF]/10 blur-[140px]" />

        <div className="absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C7CFF]/6 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,137,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[30px] border border-[#303849] bg-gradient-to-br from-[#141A23]/95 via-[#10161E]/95 to-[#0D1219]/95] p-[1px] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="relative rounded-[29px] bg-[#0D1219]/95 px-5 py-10 backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            {/* Internal glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#6C7CFF]/10 blur-[100px]" />

            <div className="relative">
              {/* Heading */}
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6C7CFF]/30 bg-[#6C7CFF]/10 px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7C89FF] shadow-[0_0_10px_rgba(124,137,255,0.7)]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B6BDFF]">
                    Let&apos;s Connect
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#F5F7FA] sm:text-4xl md:text-5xl lg:text-[56px]">
                  Ready to build something{" "}
                  <span className="bg-gradient-to-r from-[#8290FF] to-[#A879FF] bg-clip-text text-transparent">
                    smarter?
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A6AEBB] sm:text-lg sm:leading-8">
                  Whether you need business automation, dashboards, streamlined
                  operations, or custom software, I&apos;d be happy to discuss
                  your project and explore the right solution.
                </p>
              </div>

              {/* Contact cards */}
              <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
                <ContactCard
                  icon={<Mail size={22} />}
                  title="Email"
                  value="saadmuhammad679@gmail.com"
                  link="mailto:saadmuhammad679@gmail.com"
                />

                <ContactCard
                  icon={<MessageCircle size={22} />}
                  title="WhatsApp"
                  value="+92 334 3124811"
                  link="https://wa.me/923343124811"
                />

                <ContactCard
                  icon={<Globe2 size={22} />}
                  title="LinkedIn"
                  value="Connect with me"
                  link="https://linkedin.com/in/muhammad-saad-27423a2a2/"
                />
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12">
                <a
                  href="mailto:saadmuhammad679@gmail.com"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5C72FF] via-[#6C7CFF] to-[#8755F7] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(108,124,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(108,124,255,0.38)] sm:w-auto"
                >
                  Let&apos;s Talk

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <p className="text-center text-xs text-[#6F7989] sm:text-sm">
                  Available for freelance, contract, and full-time opportunities.
                </p>
              </div>
            </div>
          </div>
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
      className="group relative overflow-hidden rounded-2xl border border-[#2B3443] bg-gradient-to-br from-[#141A23] to-[#0E131A] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6C7CFF]/45 hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-6"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#6C7CFF]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#354052] bg-[#0D1219] text-[#8491FF] transition-all duration-300 group-hover:border-[#6C7CFF]/55 group-hover:text-[#A7AFFF]">
          {icon}
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#6F7989]">
          {title}
        </p>

        <h3 className="mt-2 break-all text-sm font-semibold leading-6 text-[#F5F7FA] sm:text-base">
          {value}
        </h3>

        <div className="mt-4 flex items-center gap-1.5">
          <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#6678FF] to-[#8F5EFF]" />
          <span className="h-1 w-3 rounded-full bg-[#6678FF]/35" />
          <span className="h-1 w-2 rounded-full bg-[#6678FF]/15" />
        </div>
      </div>
    </a>
  );
}