"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

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

import { motion } from "framer-motion";

export function ContactSection() {
  const t = useTranslations("Contact");
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  const containerVars = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  };

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

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <Section
      id="contact"
      className="pb-24"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20">
        {/* Left Column - Info */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full min-w-0"
        >
          <SectionHeader
            label={t("label")}
            title={t("title")}
            description={t("description")}
            className="mb-12"
          />

          <motion.div variants={itemVars} className="space-y-6">
            <a href="mailto:sales@blait.eu" className="group block items-center p-12 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all duration-700">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 group-hover:scale-110 group-hover:text-white group-hover:border-white/20 transition-all duration-700 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight transition-colors">{t("emailUs")}</h3>
                  <p className="text-muted truncate text-xl group-hover:text-white transition-colors">sales@blait.eu</p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div variants={itemVars} className="mt-16">
            <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase mb-10">{t("trustedBy")}</h4>
            <div className="flex flex-wrap gap-4">
              {[t("badges.fintech"), t("badges.proptech"), t("badges.regtech"), t("badges.enterprise")].map((badge) => (
                <motion.div
                  key={badge}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                  className="px-6 py-2.5 rounded-full border border-white/5 text-[9px] font-bold tracking-widest text-white/30 uppercase cursor-default transition-all duration-300"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="bg-[#050505] border border-white/5 p-12 md:p-16 relative overflow-hidden group">
            {/* Subtle Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/[0.01] blur-[120px] transition-all duration-1000" />

            {state.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center min-h-[500px] text-center"
              >
                <div className="w-24 h-24 bg-white/[0.05] text-white rounded-full flex items-center justify-center mb-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">{t("form.sent")}</h3>
                <p className="text-muted text-xl leading-relaxed max-w-sm">{t("form.sentDesc")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                {state.message && !state.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 bg-white/[0.05] border border-white/10 text-white/80 text-xs font-bold tracking-widest uppercase text-center"
                  >
                    {state.message}
                  </motion.div>
                )}
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase ml-2">
                      {t("form.name")}
                    </label>
                    <input
                      {...register("name")}
                      className="w-full bg-white/[0.02] border border-white/10 text-white placeholder:text-white/10 focus:border-white/40 focus:bg-white/[0.04] rounded-2xl px-8 py-5 outline-none transition-all duration-500"
                      placeholder={t("form.namePlaceholder")}
                    />
                    {(errors.name || state.errors?.name) && (
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-3 ml-2">{errors.name?.message || state.errors?.name?.[0]}</p>
                    )}
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase ml-2">
                      {t("form.email")}
                    </label>
                    <input
                      {...register("email")}
                      className="w-full bg-white/[0.02] border border-white/10 text-white placeholder:text-white/10 focus:border-white/40 focus:bg-white/[0.04] rounded-2xl px-8 py-5 outline-none transition-all duration-500"
                      placeholder={t("form.emailPlaceholder")}
                    />
                    {(errors.email || state.errors?.email) && (
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-3 ml-2">{errors.email?.message || state.errors?.email?.[0]}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase ml-2">
                      {t("form.company")}
                    </label>
                    <input
                      {...register("company")}
                      className="w-full bg-white/[0.02] border border-white/10 text-white placeholder:text-white/10 focus:border-white/40 focus:bg-white/[0.04] rounded-2xl px-8 py-5 outline-none transition-all duration-500"
                      placeholder={t("form.companyPlaceholder")}
                    />
                    {(errors.company || state.errors?.company) && (
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-3 ml-2">{errors.company?.message || state.errors?.company?.[0]}</p>
                    )}
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase ml-2">
                      {t("form.projectType")}
                    </label>
                    <div className="relative">
                      <select
                        {...register("projectType")}
                        className="w-full bg-white/[0.02] border border-white/10 text-white focus:border-white/40 focus:bg-white/[0.04] rounded-2xl px-8 py-5 outline-none transition-all duration-500 appearance-none"
                      >
                        <option value="" disabled className="bg-black">{t("form.projectTypePlaceholder")}</option>
                        <option value="augmentation" className="bg-black">{t("form.types.augmentation")}</option>
                        <option value="team" className="bg-black">{t("form.types.team")}</option>
                        <option value="project" className="bg-black">{t("form.types.project")}</option>
                        <option value="consulting" className="bg-black">{t("form.types.consulting")}</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase ml-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full bg-white/[0.02] border border-white/10 text-white placeholder:text-white/10 focus:border-white/40 focus:bg-white/[0.04] rounded-2xl px-8 py-5 outline-none transition-all duration-500 resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  />
                  {(errors.message || state.errors?.message) && (
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-3 ml-2">{errors.message?.message || state.errors?.message?.[0]}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isPending}
                  className="w-full btn btn-primary py-7 text-xs"
                >
                  {isPending ? t("form.sending") : t("form.send")}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
