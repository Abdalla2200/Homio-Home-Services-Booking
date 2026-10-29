import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../store/useAuth";
import { useLogout } from "../../hooks/useLogut";

export default function Header() {
  const { t } = useTranslation();

  const user = useAuth((s) => s.user);
  const isLoading = useAuth((s) => s.isLoading);
  const { mutate, isPending } = useLogout();

  return (
    <header className="bg-white/20 backdrop-blur-md absolute w-full top-0">
      <div className="container flex items-center justify-between py-4">
        <img className="w-24" src="../../logo.png" alt="Homio logo" />
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link className="text-white text-lg" to={link.href} key={link.href}>
              {t(link.label)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {isLoading ? null : user ? (
            <button
              disabled={isPending}
              onClick={() => mutate()}
              className="bg-accent hover:bg-accent-hover py-2 px-5 cursor-pointer text-sm font-medium text-white rounded-lg"
            >
              {t("login.tabs.logout")}
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-accent hover:bg-accent-hover py-2 px-5 cursor-pointer text-sm font-medium text-white rounded-lg"
            >
              {t("login.tabs.login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
