import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, CreditCard, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import hereImg from "../../assets/hero-image.png";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isArabic = (i18n.resolvedLanguage ?? i18n.language) === "ar";

  return (
    <div className="min-h-dvh relative flex items-center">
      <img
        src={hereImg}
        alt="Hero Image"
        className={`absolute ${isArabic && "-scale-x-100"} inset-0 z-0 h-full w-full object-cover`}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="z-20 container mt-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <ShieldCheck className="size-4" />
            {t("hero.badge")}
          </div>
          <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {t("hero.title.first")}{" "}
            <span className="block">{t("hero.title.second")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {t("hero.description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:text-base"
            >
              {t("hero.book")}
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-base"
            >
              {t("hero.browse")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/90">
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4" />
              {t("hero.trust.verified")}
            </li>
            <li className="inline-flex items-center gap-2">
              <CreditCard className="size-4" />
              {t("hero.trust.pay")}
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4" />
              {t("hero.trust.guarantee")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
