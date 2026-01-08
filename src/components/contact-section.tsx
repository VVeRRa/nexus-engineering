"use client";

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
    <section id="contact" className="section bg-[var(--color-paper)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full blur-[250px] opacity-10" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <span className="section-label">{t("label")}</span>
            <h2
              className="text-display-md text-[var(--color-ink)] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {t("title")}
            </h2>
            <p className="text-xl text-[var(--color-slate-600)] mb-10">
              {t("description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-5 mb-10">
              <a
                href="mailto:hello@nexus.engineering"
                className="group flex items-center gap-4 text-[var(--color-ink)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-slate-100)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 5H17V15H3V5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 5L10 11L17 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="group-hover:text-[var(--color-slate-600)] transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    hello@nexus.engineering
                  </p>
                  <p
                    className="text-sm text-[var(--color-slate-500)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t("response")}
                  </p>
                </div>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-[var(--color-slate-200)]">
              <p
                className="text-xs text-[var(--color-slate-500)] uppercase tracking-wider mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t("trusted")}
              </p>
              <div className="flex flex-wrap gap-6">
                {["FinTech Co.", "PropTech Inc.", "Enterprise Corp.", "Startup X"].map(
                  (company, index) => (
                    <span
                      key={index}
                      className="text-[var(--color-slate-400)] text-lg"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                    >
                      {company}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-[var(--color-ink)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Form Background Accent */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-accent)] rounded-full blur-[150px] opacity-10" />

              {state.success ? (
                <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="w-16 h-16 bg-[var(--color-fintech)] rounded-full flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl text-[var(--color-paper)] font-bold mb-2">{t("form.sent")}</h3>
                  <p className="text-[var(--color-slate-400)]">{t("form.sentDesc")}</p>
                </div>
              ) : (
                <form action={formAction} className="relative z-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="form-label text-[var(--color-slate-400)]">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input w-full bg-white border border-[var(--color-slate-200)] text-[var(--color-ink)] placeholder:text-[var(--color-slate-400)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] rounded-lg px-4 py-3 outline-none transition-all"
                        placeholder={t("form.namePlaceholder")}
                        aria-describedby="name-error"
                      />
                      {state.errors?.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-400">
                          {state.errors.name[0]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label text-[var(--color-slate-400)]">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input w-full bg-white border border-[var(--color-slate-200)] text-[var(--color-ink)] placeholder:text-[var(--color-slate-400)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] rounded-lg px-4 py-3 outline-none transition-all"
                        placeholder={t("form.emailPlaceholder")}
                        aria-describedby="email-error"
                      />
                      {state.errors?.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-400">
                          {state.errors.email[0]}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="form-label text-[var(--color-slate-400)]">
                      {t("form.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input w-full bg-white border border-[var(--color-slate-200)] text-[var(--color-ink)] placeholder:text-[var(--color-slate-400)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] rounded-lg px-4 py-3 outline-none transition-all"
                      placeholder={t("form.companyPlaceholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="form-label text-[var(--color-slate-400)]">
                      {t("form.projectType")}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="form-input form-select w-full bg-white border border-[var(--color-slate-200)] text-[var(--color-ink)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] rounded-lg px-4 py-3 outline-none transition-all appearance-none"
                    >
                      <option value="">{t("form.projectTypePlaceholder")}</option>
                      <option value="augmentation">{t("form.types.augmentation")}</option>
                      <option value="team">{t("form.types.team")}</option>
                      <option value="project">{t("form.types.project")}</option>
                      <option value="consulting">{t("form.types.consulting")}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label text-[var(--color-slate-400)]">
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-input form-textarea w-full bg-white border border-[var(--color-slate-200)] text-[var(--color-ink)] placeholder:text-[var(--color-slate-400)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] rounded-lg px-4 py-3 outline-none transition-all resize-none"
                      placeholder={t("form.messagePlaceholder")}
                      aria-describedby="message-error"
                    />
                    {state.errors?.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400">
                        {state.errors.message[0]}
                      </p>
                    )}
                  </div>

                  {state.message && !state.success && (
                    <div className="p-3 rounded bg-red-500/10 text-red-400 text-sm border border-red-500/20">
                      {state.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-accent btn-lg w-full"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t("form.sending")}
                      </span>
                    ) : (
                      <>
                        {t("form.send")}
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M14 2L7 9M14 2L10 14L7 9M14 2L2 6L7 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
