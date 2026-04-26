import { Container } from "@/components/ui/Container";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 dark:bg-[#0F172A] py-24 md:py-28 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Talk to <span className="text-blue-600 dark:text-blue-500">our team</span>
            </h2>
            <p className="text-lg font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
              Have questions about our programs or want to discuss enterprise solutions? Our experts are here to help you navigate your learning journey.
            </p>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">Email us</div>
                <div className="text-slate-900 dark:text-slate-200 font-semibold">admissions@accredian.com</div>
              </div>
              <div>
                <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">Call us</div>
                <div className="text-slate-900 dark:text-slate-200 font-semibold">+91 98765 43210</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 dark:border-gray-800 transition-all duration-300">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="+91 00000 00000"
                    className="w-full rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
