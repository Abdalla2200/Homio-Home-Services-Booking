import { useTranslation } from "react-i18next";
import loginImage from "../../assets/login-image.png";
import starIcon from "../../assets/start-icon.png";
import verifiedIcon from "../../assets/verified-icon.png";

export default function LoginAside() {
  const { t } = useTranslation();

  return (
    <section className="relative hidden min-h-screen w-[45%] overflow-hidden bg-heading text-white lg:flex">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        src={loginImage}
      />
      <div className="absolute inset-0 bg-heading/55" />

      <div className="relative flex w-full flex-col justify-between p-8 xl:p-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t("login.brand.badge")}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight xl:text-5xl">
            Homio
          </h1>
          <p className="mt-2 text-sm text-white/85 xl:text-base">
            {t("login.brand.tagline")}
          </p>
          <ul className="mt-8 space-y-3">
            {[
              t("login.brand.benefits.professionals"),
              t("login.brand.benefits.prices"),
              t("login.brand.benefits.booking"),
            ].map((benefit) => (
              <li className="flex items-center gap-3 text-sm" key={benefit}>
                <img alt="" className="h-3.5 w-3.5 " src={verifiedIcon} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/30 pt-4 text-xs text-white/80">
          <span>{t("login.brand.trust")}</span>
          <span className="flex items-center gap-1">
            <img alt="" className="h-4 w-4" src={starIcon} />
            {t("login.brand.guarantee")}
          </span>
        </div>
      </div>
    </section>
  );
}
