import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-[#F8FAFC] dark:bg-[#0F172A] py-24 md:py-28 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="inline-block transition-opacity hover:opacity-90">
              <img
                src="/logo.png"
                alt="Accredian"
                className="h-10 w-auto object-contain dark:brightness-110"
              />
            </a>
            <p className="mt-6 max-w-xs text-base font-medium leading-relaxed text-slate-500 dark:text-slate-400">
              Transforming enterprise learning with role-based programs and 
              measurable outcomes for the modern workforce.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Programs
            </h3>
            <ul className="mt-6 space-y-4">
              {["Engineering", "Product", "Data Science", "Business Management", "Strategy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-slate-500 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {["About Us", "Our Team", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-slate-500 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-6 space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-slate-500 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-200 dark:border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
