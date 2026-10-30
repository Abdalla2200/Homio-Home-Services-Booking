import { Home, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { footerLinkGroups, footerSocials } from "../../constants";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent-soft">
      <div className="container pt-section-mobile sm:pt-section pb-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-white">
                <Home className="size-5" />
              </span>
              <span className="text-2xl font-bold tracking-tight text-heading">
                Homio
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {t("footer.description")}
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href="tel:+201001234567"
                className="flex items-center gap-2 text-body transition-colors hover:text-accent"
              >
                <Phone className="size-4 shrink-0 text-accent" />
                {t("footer.phone")}
              </a>
              <a
                href="mailto:hello@homio.com"
                className="flex items-center gap-2 text-body transition-colors hover:text-accent"
              >
                <Mail className="size-4 shrink-0 text-accent" />
                {t("footer.email")}
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2">
              {footerSocials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.labelKey}
                    href={social.href}
                    aria-label={t(social.labelKey)}
                    className="flex size-9 items-center justify-center rounded-full bg-white text-muted transition-colors hover:bg-accent hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.titleKey}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-heading">
                {t(group.titleKey)}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted text-center">
            {t("footer.copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
