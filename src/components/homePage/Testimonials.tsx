import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { testimonials } from "../../constants";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      id="testimonials"
      className="bg-surface-soft my-section-mobile sm:mt-section py-section-mobile sm:py-section"
    >
      <div className="container">
        <SectionTitle
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          description={t("testimonials.description")}
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.nameKey}
              className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm sm:p-7"
            >
              <div
                className="flex items-center gap-1 text-star"
                aria-label={t("testimonials.rating")}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-body sm:text-base">
                {t(testimonial.quoteKey)}
              </blockquote>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-heading">
                    {t(testimonial.nameKey)}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {t(testimonial.roleKey)}
                  </p>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                  {testimonial.initials}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
