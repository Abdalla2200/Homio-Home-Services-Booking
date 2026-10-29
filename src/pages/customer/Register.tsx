import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import googleIcon from "../../assets/google-icon.png";
import LoginAside from "../../components/shared/LoginAside";
import LanguageSwitcher from "../../components/shared/LanguageSwitcher";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterFormData } from "../../types/authSchema";
import { useRegister } from "../../hooks/useRegister";
import { useState } from "react";

export default function Register() {
  const { t, i18n } = useTranslation();
  const isArabic = (i18n.resolvedLanguage ?? i18n.language) === "ar";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useRegister();
  const [responseError, setResponseError] = useState<string | null>(null);

  const onSubmit = async (formData: RegisterFormData) => {
    mutate(formData, {
      onSuccess: () => {
        navigate("/");
      },
      onError: (error) => setResponseError(error.message),
    });
  };

  return (
    <main
      className="flex min-h-screen bg-background"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <LoginAside />

      <section className="flex min-h-screen w-full flex-col px-5 py-6 sm:px-10 lg:w-[55%] lg:px-12 xl:px-20">
        <header className="flex items-center justify-between gap-4">
          <Link
            className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-accent"
            to="/"
          >
            {isArabic ? (
              <ArrowRight aria-hidden="true" size={16} />
            ) : (
              <ArrowLeft aria-hidden="true" size={16} />
            )}
            {t("login.backToHome")}
          </Link>
          <LanguageSwitcher variant="light" />
        </header>

        <div className="flex flex-1 items-center justify-center py-8">
          <div className="w-full max-w-md">
            <div className="mb-8 grid grid-cols-2 rounded-xl bg-surface p-1">
              <Link
                className="rounded-lg px-4 py-2.5 text-center text-sm font-medium text-muted transition-colors hover:text-heading"
                to="/login"
              >
                {t("login.tabs.login")}
              </Link>
              <span
                aria-current="page"
                className="rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-heading shadow-sm"
              >
                {t("login.tabs.register")}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-heading">
                {t("register.welcome.title")}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t("register.welcome.description")}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-heading"
                    htmlFor="name"
                  >
                    {t("register.fields.name")}
                  </label>
                  <input
                    {...register("name")}
                    autoComplete="name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
                    id="name"
                    name="name"
                    placeholder={t("register.fields.namePlaceholder")}
                    type="text"
                  />
                </div>
                {errors.name?.message && (
                  <p className="mt-1 text-xs text-red-700">
                    {errors.name.message}
                  </p>
                )}

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-heading"
                    htmlFor="email"
                  >
                    {t("register.fields.email")}
                  </label>
                  <input
                    {...register("email")}
                    autoComplete="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
                    dir="ltr"
                    id="email"
                    name="email"
                    placeholder={t("register.fields.emailPlaceholder")}
                    type="email"
                  />
                </div>
                {errors.email?.message && (
                  <p className="mt-1 text-xs text-red-700">
                    {errors.email.message}
                  </p>
                )}

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-heading"
                    htmlFor="password"
                  >
                    {t("register.fields.password")}
                  </label>
                  <input
                    {...register("password")}
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
                    dir={isArabic ? "rtl" : "ltr"}
                    id="password"
                    name="password"
                    placeholder={t("register.fields.passwordPlaceholder")}
                    type="password"
                  />
                </div>
                {errors.password?.message && (
                  <p className="mt-1 text-xs text-red-700">
                    {errors.password.message}
                  </p>
                )}

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-heading"
                    htmlFor="confirmPassword"
                  >
                    {t("register.fields.confirmPassword")}
                  </label>
                  <input
                    {...register("confirmPassword")}
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
                    dir={isArabic ? "rtl" : "ltr"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder={t(
                      "register.fields.confirmPasswordPlaceholder",
                    )}
                    type="password"
                  />
                </div>
                {errors.confirmPassword?.message && (
                  <p className="mt-1 text-xs text-red-700">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {responseError && (
                <p className="mt-3 text-center text-red-500">{responseError}</p>
              )}
              <button
                disabled={isPending}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                type="submit"
              >
                {t("register.submit")}
                <ArrowRight
                  aria-hidden="true"
                  className={isArabic ? "rotate-180" : ""}
                  size={16}
                />
              </button>
            </form>

            <div className="my-6 flex items-center gap-4 text-xs text-muted">
              <span className="h-px flex-1 bg-border" />
              {t("login.separator")}
              <span className="h-px flex-1 bg-border" />
            </div>

            <button
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-heading transition-colors hover:bg-surface"
              type="button"
            >
              <img alt="" className="h-5 w-5" src={googleIcon} />
              {t("login.google")}
            </button>

            <p className="mt-7 text-center text-sm text-muted">
              {t("register.haveAccount")}{" "}
              <Link
                className="font-semibold text-accent transition-colors hover:text-accent-hover"
                to="/login"
              >
                {t("login.tabs.login")}
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs leading-5 text-muted">
          {t("login.legal.notice")}{" "}
          <a className="underline underline-offset-2" href="#">
            {t("login.legal.terms")}
          </a>{" "}
          {t("login.legal.and")}{" "}
          <a className="underline underline-offset-2" href="#">
            {t("login.legal.privacy")}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
