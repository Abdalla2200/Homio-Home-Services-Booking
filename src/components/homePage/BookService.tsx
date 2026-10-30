import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BookService() {
  const { t } = useTranslation();

  return (
    <section className="bg-white pb-section-mobile sm:pb-section">
      <div className="container">
        <div className="rounded-3xl bg-accent px-6 py-12 text-center sm:px-10 sm:py-16 lg:py-20">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {t("bookService.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            {t("bookService.description")}
          </p>
          <Link
            to="/services"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-accent shadow-sm transition-colors hover:bg-accent-soft sm:text-base"
          >
            {t("bookService.cta")}
          </Link>
          <p className="mt-4 text-xs text-white/70 sm:text-sm">
            {t("bookService.note")}
          </p>
        </div>
      </div>
    </section>
  );
}
