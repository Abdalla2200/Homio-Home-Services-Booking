import { useTranslation } from "react-i18next";
import { whyChooseHomioFeatures } from "../../constants";
import SectionTitle from "./SectionTitle";

export default function WhyChooseHomio() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface my-section-mobile sm:mt-section py-section-mobile sm:py-section">
      <div className="container">
        <SectionTitle
          eyebrow={t("whyChooseHomio.eyebrow")}
          title={t("whyChooseHomio.title")}
          description={t("whyChooseHomio.description")}
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {whyChooseHomioFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.titleKey}
                className="flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-6 sm:p-7 lg:p-8"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
