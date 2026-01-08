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
    <section id="contact" className="section bg-slate-50 relative overflow-hidden py-24">
      {/* Background w/ Green Accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-100/20 rounded-full blur-[100px] -z-10" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm mb-4 block">
              {t("label")}
            </span>
            <h2
              className="text-4xl md:text-5xl text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {t("title")}
            </h2>
            <p className="text-xl text-slate-500 mb-12">
              {t("description")}
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@nexus.engineering" className="block group">
                <div className="bg-gradient-to-br from-white to-green-50/50 border border-green-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Email us</h3>
                      <p className="text-slate-500">hello@nexus.engineering</p>
                    </div>
                  </div>
                </div>
              </a>

              <button className="block w-full group text-left">
                <div className="bg-gradient-to-br from-white to-green-50/50 border border-green-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Live Chat</h3>
                      <p className="text-slate-500">{t("response")}</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-4 text-slate-400 text-sm mt-12">
              <span>Trusted by</span>
              <div className="flex gap-4 opacity-60 grayscale">
                {/* Placeholders for logos */}
                <div className="h-6 w-20 bg-slate-200 rounded"></div>
                <div className="h-6 w-20 bg-slate-200 rounded"></div>
                <div className="h-6 w-20 bg-slate-200 rounded"></div>
              </div>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-5 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden">

              {state.success ? (
                <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-fade-in">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl text-slate-900 font-bold mb-2">{t("form.sent")}</h3>
                  <p className="text-slate-500">{t("form.sentDesc")}</p>
                </div>
              ) : (
                <form action={formAction} className="relative z-10 space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full max-w-full bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder={t("form.namePlaceholder")}
                      />
                      {state.errors?.name && (
                        <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full max-w-full bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder={t("form.emailPlaceholder")}
                      />
                      {state.errors?.email && (
                        <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
                      {t("form.projectType")}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full max-w-full bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all appearance-none"
                    >
                      <option value="">{t("form.projectTypePlaceholder")}</option>
                      <option value="augmentation">{t("form.types.augmentation")}</option>
                      <option value="team">{t("form.types.team")}</option>
                      <option value="project">{t("form.types.project")}</option>
                      <option value="consulting">{t("form.types.consulting")}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all resize-none"
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
      </div>
    </section>
  );
}
