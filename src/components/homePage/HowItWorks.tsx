import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { howItWorksSteps } from "../../constants";
import SectionTitle from "./SectionTitle";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      className=" bg-white my-section-mobile sm:mt-section py-section-mobile sm:py-section"
    >
      <div className="container">
        <SectionTitle
          eyebrow={t("howItWorks.eyebrow")}
          title={t("howItWorks.title")}
          description={t("howItWorks.description")}
        />

        <div className="mt-10 rounded-3xl border border-border bg-white p-6 sm:mt-14 sm:p-8 lg:p-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.titleKey}>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-heading">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(step.descriptionKey)}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                    <Check className="size-4 shrink-0" />
                    {t(step.highlightKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
