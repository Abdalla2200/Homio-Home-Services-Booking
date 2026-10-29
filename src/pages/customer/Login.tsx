import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import googleIcon from "../../assets/google-icon.png";
import LanguageSwitcher from "../../components/shared/LanguageSwitcher";
import LoginAside from "../../components/shared/LoginAside";
import { loginSchema, type LoginFormData } from "../../types/authSchema";
import { useLogin } from "../../hooks/useRegister";
import { useState } from "react";

export default function Login() {
  const { t, i18n } = useTranslation();
  const isArabic = (i18n.resolvedLanguage ?? i18n.language) === "ar";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLogin();
  const [responseError, setResponseError] = useState<string | null>(null);

  const onSubmit = (formData: LoginFormData) => {
    mutate(formData, {
      onSuccess: () => navigate("/"),
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

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md">
            <div className="mb-8 grid grid-cols-2 rounded-xl bg-surface p-1">
              <span className="rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-heading shadow-sm">
                {t("login.tabs.login")}
              </span>
              <Link
                className="rounded-lg px-4 py-2.5 text-center text-sm font-medium text-muted transition-colors hover:text-heading"
                to="/register"
              >
                {t("login.tabs.register")}
              </Link>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-heading">
                {t("login.welcome.title")}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t("login.welcome.description")}
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-heading"
                    htmlFor="email"
                  >
                    {t("login.fields.email")}
                  </label>
                  <input
                    {...register("email")}
                    autoComplete="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
                    dir="ltr"
                    id="email"
                    name="email"
                    placeholder={t("login.fields.emailPlaceholder")}
                    type="email"
                  />
                  {errors.email?.message && (
                    <p className="mt-1 text-xs text-red-700">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-heading"
                    htmlFor="password"
                  >
                    {t("login.fields.password")}
                  </label>
                  <input
                    {...register("password")}
                    autoComplete="current-password"
                    className={`w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15 ${
                      isArabic ? "ps-4" : "pe-4"
                    }`}
                    dir={isArabic ? "rtl" : "ltr"}
                    id="password"
                    name="password"
                    placeholder={t("login.fields.passwordPlaceholder")}
                    type="password"
                  />
                  {errors.password?.message && (
                    <p className="mt-1 text-xs text-red-700">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-body">
                  <input
                    className="h-4 w-4 rounded border-border accent-accent"
                    type="checkbox"
                  />
                  {t("login.rememberMe")}
                </label>
                <button
                  className="font-medium text-accent transition-colors hover:text-accent-hover"
                  type="button"
                >
                  {t("login.forgotPassword")}
                </button>
              </div>

              {responseError && (
                <p className="mt-3 text-center text-red-500">{responseError}</p>
              )}

              <button
                disabled={isPending}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                type="submit"
              >
                {t("login.submit")}
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
              {t("login.noAccount")}{" "}
              <Link
                className="font-semibold text-accent transition-colors hover:text-accent-hover"
                to="/register"
              >
                {t("login.tabs.register")}
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
