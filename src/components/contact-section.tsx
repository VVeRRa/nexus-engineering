"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { Button } from "./ui/button";

import { startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, ContactFormValues } from "@/lib/schemas";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (data.company) formData.append("company", data.company);
    if (data.projectType) formData.append("projectType", data.projectType);
    formData.append("message", data.message);

    // Wrap in transition to ensure useActionState updates correctly if called manually
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <Section
      id="contact"
      background={
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-0 -z-10 hidden md:block"
          style={{ background: 'radial-gradient(circle, var(--color-green-100) 0%, transparent 70%)' }}
        />
      }
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-24 animate-on-scroll stagger-fly-children">
        {/* Left Column - Info */}
        <div className="w-full min-w-0">
          <SectionHeader
            label={<span className="text-[var(--color-secondary)]">{t("label")}</span>}
            title={t("title")}
            description={t("description")}
            className="mb-12 break-words"
          />

          <div className="space-y-6">
            <a href="mailto:sales@blait.eu" className="block group">
              <div className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to-green)] border border-[var(--color-card-border-green)] rounded-3xl p-3 md:p-8 hover:shadow-lg transition-all duration-300 shadow-sm md:shadow-md">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[var(--color-ink)] mb-1 truncate">{t("emailUs")}</h3>
                    <p className="text-slate-400 truncate">sales@blait.eu</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4 text-sm mt-12 text-[var(--color-ink)]">
            <span className="font-bold flex-shrink-0">{t("trustedBy")}</span>
            <div className="flex flex-wrap gap-2 opacity-100 w-full">
              {/* Placeholders for logos */}
              <div className="h-8 px-3 rounded-md flex items-center justify-center text-xs font-bold bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] whitespace-nowrap">{t("badges.fintech")}</div>
              <div className="h-8 px-3 rounded-md flex items-center justify-center text-xs font-bold bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] whitespace-nowrap">{t("badges.proptech")}</div>
              <div className="h-8 px-3 rounded-md flex items-center justify-center text-xs font-bold bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] whitespace-nowrap">{t("badges.regtech")}</div>
              <div className="h-8 px-3 rounded-md flex items-center justify-center text-xs font-bold bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] whitespace-nowrap">{t("badges.enterprise")}</div>
            </div>
          </div>

        </div>

        {/* Right Column - Form */}
        <div className="relative w-full min-w-0">
          <div className="bg-[var(--color-surface)] rounded-3xl p-3 md:p-10 shadow-lg md:shadow-xl border border-[var(--color-border)] relative overflow-hidden">

            {state.success ? (
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-fade-in">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl text-[var(--color-ink)] font-bold mb-2">{t("form.sent")}</h3>
                <p className="text-[var(--color-ink)]">{t("form.sentDesc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-5">
                {state.message && !state.success && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                    {state.message}
                  </div>
                )}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
                      {t("form.name")}
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className="w-full max-w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] placeholder:text-[var(--color-ink)] placeholder:opacity-50 focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all min-w-0"
                      placeholder={t("form.namePlaceholder")}
                    />
                    {(errors.name || state.errors?.name) && (
                      <p className="mt-1 text-sm text-red-500">{errors.name?.message || state.errors?.name?.[0]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
                      {t("form.email")}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="w-full max-w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] placeholder:text-[var(--color-ink)] placeholder:opacity-50 focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all min-w-0"
                      placeholder={t("form.emailPlaceholder")}
                    />
                    {(errors.email || state.errors?.email) && (
                      <p className="mt-1 text-sm text-red-500">{errors.email?.message || state.errors?.email?.[0]}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
                      {t("form.company")}
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      id="company"
                      className="w-full max-w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] placeholder:text-[var(--color-ink)] placeholder:opacity-50 focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all min-w-0"
                      placeholder={t("form.companyPlaceholder")}
                    />
                    {(errors.company || state.errors?.company) && (
                      <p className="mt-1 text-sm text-red-500">{errors.company?.message || state.errors?.company?.[0]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
                      {t("form.projectType")}
                    </label>
                    <select
                      {...register("projectType")}
                      id="projectType"
                      required={false}
                      className="w-full max-w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] invalid:text-[var(--color-ink)]/50 focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all appearance-none min-w-0"
                    >
                      <option value="" disabled>{t("form.projectTypePlaceholder")}</option>
                      <option value="augmentation">{t("form.types.augmentation")}</option>
                      <option value="team">{t("form.types.team")}</option>
                      <option value="project">{t("form.types.project")}</option>
                      <option value="consulting">{t("form.types.consulting")}</option>
                    </select>
                    {(errors.projectType || state.errors?.projectType) && (
                      <p className="mt-1 text-sm text-red-500">{errors.projectType?.message || state.errors?.projectType?.[0]}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-1">
                    {t("form.message")}
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink)] placeholder:text-[var(--color-ink)] placeholder:opacity-50 focus:bg-[var(--color-paper)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 outline-none transition-all resize-none min-w-0"
                    placeholder={t("form.messagePlaceholder")}
                  />
                  {(errors.message || state.errors?.message) && (
                    <p className="mt-1 text-sm text-red-500">{errors.message?.message || state.errors?.message?.[0]}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full justify-center h-auto py-3 !px-4 md:px-8 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 !whitespace-normal text-center leading-tight"
                    disabled={isPending}
                  >
                    {isPending ? t("form.sending") : t("form.send")}
                  </Button>
                  <p className="text-xs text-center text-slate-400">
                    {t("form.reassurance")}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
