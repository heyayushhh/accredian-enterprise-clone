"use client";

import { Container } from "@/components/ui/Container";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Benefits", href: "#benefits" },
  { label: "Expertise", href: "#expertise" },
  { label: "Who Should Join", href: "#who-should-join" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <Container className="flex items-center justify-between gap-4 py-4 px-6">
        <a
          href="#top"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <img
            src="/logo.png"
            alt="Accredian"
            className="h-9 w-auto object-contain dark:brightness-110"
          />
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-200 md:flex">
            {navItems.map((item) => (
              <a
                 key={item.href}
                 href={item.href}
                 className="transition-all duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-700 active:scale-95"
            >
              Talk to us
            </a>

            <details className="group md:hidden relative">
              <summary className="list-none rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-900 dark:text-white shadow-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-[16rem] rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 p-3 shadow-xl ring-1 ring-black/5">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700"
                  >
                    Talk to us
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
