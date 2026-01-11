"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { sendEmail, ContactFormState } from "@/actions/send-email";

const initialState: ContactFormState = {
  message: "",
  errors: {},
  success: false,
};

export function ContactSection() {
  const t = useTranslations("Contact");
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  return (

    <Section
      id="contact"
      background={
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 -z-10"
          style={{ background: 'radial-gradient(circle, var(--color-green-100) 0%, transparent 70%)' }}
        />
      }
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 animate-on-scroll">
        {/* Left Column - Info */}
        <div>
          <SectionHeader
            label={<span className="text-[var(--color-secondary)]">{t("label")}</span>}
            title={t("title")}
            description={t("description")}
            className="mb-12"
          />

          <div className="space-y-6">
            <a href="mailto:hello@nexus.engineering" className="block group">
              <div className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to-green)] border border-[var(--color-card-border-green)] rounded-3xl p-5 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-[var(--color-ink)] mb-1">Email us</h3>
                    <p className="text-[var(--color-text-secondary)] break-all">hello@nexus.engineering</p>
                  </div>
                </div>
              </div>
            </a>

            <button className="block w-full group text-left">
              <div className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to-green)] border border-[var(--color-card-border-green)] rounded-3xl p-5 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[var(--color-ink)] mb-1">Live Chat</h3>
                    <p className="text-[var(--color-text-secondary)]">{t("response")}</p>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm mt-12" style={{ color: "#64748b" }}>
            <span className="font-bold">Trusted by</span>
            <div className="flex gap-4 opacity-100 grayscale">
              {/* Placeholders for logos */}
              {/* Placeholders for logos */}
              <div className="h-8 px-4 rounded-md flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#e2e8f0", color: "#64748b" }}>FinTech</div>
              <div className="h-8 px-4 rounded-md flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#e2e8f0", color: "#64748b" }}>PropTech</div>
              <div className="h-8 px-4 rounded-md flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#e2e8f0", color: "#64748b" }}>Enterprise</div>
            </div>
          </div>

        </div>

        {/* Right Column - Form */}
        <div className="relative">
          <div className="bg-[var(--color-paper)] rounded-3xl p-5 md:p-10 shadow-xl border border-[var(--color-border)] relative overflow-hidden">

            {state.success ? (
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-fade-in">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl text-[var(--color-ink)] font-bold mb-2">{t("form.sent")}</h3>
                <p className="text-[var(--color-text-secondary)]">{t("form.sentDesc")}</p>
              </div>
            ) : (
              <form action={formAction} className="relative z-10 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      {t("form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full max-w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all"
                      placeholder={t("form.namePlaceholder")}
                    />
                    {state.errors?.name && (
                      <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full max-w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all"
                      placeholder={t("form.emailPlaceholder")}
                    />
                    {state.errors?.email && (
                      <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                    {t("form.projectType")}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full max-w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all appearance-none"
                  >
                    <option value="">{t("form.projectTypePlaceholder")}</option>
                    <option value="augmentation">{t("form.types.augmentation")}</option>
                    <option value="team">{t("form.types.team")}</option>
                    <option value="project">{t("form.types.project")}</option>
                    <option value="consulting">{t("form.types.consulting")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  />
                  {state.errors?.message && (
                    <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-accent btn-lg justify-center rounded-xl py-4 text-base shadow-lg hover:shadow-xl hover:-translate-y-1"
                  disabled={isPending}
                >
                  {isPending ? t("form.sending") : t("form.send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
