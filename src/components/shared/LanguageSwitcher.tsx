import { useTranslation } from "react-i18next";

type LanguageSwitcherProps = {
  variant?: "overlay" | "light";
};

export default function LanguageSwitcher({
  variant = "overlay",
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? "en";
  const isLight = variant === "light";

  return (
    <div
      className={`flex h-8 w-24 shrink-0 items-center rounded-full p-1 shadow-inner ${
        isLight
          ? "border border-border bg-surface text-body"
          : "bg-white/35 text-white"
      }`}
      dir="ltr"
      role="group"
    >
      <button
        className={`flex h-full flex-1 items-center justify-center rounded-full text-xs  font-semibold transition-colors cursor-pointer ${
          currentLanguage === "en"
            ? isLight
              ? "bg-white shadow-sm"
              : "bg-white/30"
            : ""
        }`}
        onClick={() => i18n.changeLanguage("en")}
        type="button"
      >
        EN
      </button>
      <button
        className={`flex h-full flex-1 items-center justify-center rounded-full text-xs font-medium transition-colors cursor-pointer ${
          currentLanguage === "ar"
            ? isLight
              ? "bg-white shadow-sm"
              : "bg-white/30"
            : ""
        }`}
        onClick={() => i18n.changeLanguage("ar")}
        type="button"
      >
        العربية
      </button>
    </div>
  );
}
