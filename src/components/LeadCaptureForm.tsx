"use client";

import { useMemo, useState } from "react";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
};

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function LeadCaptureForm() {
  const [payload, setPayload] = useState<LeadPayload>({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const isDisabled = useMemo(
    () => status.type === "submitting",
    [status.type],
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "submitting" });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          phone: normalizePhone(payload.phone),
        } satisfies LeadPayload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Failed to submit. Please try again.");
      }

      setPayload({ name: "", email: "", phone: "" });
      setStatus({
        type: "success",
        message: "Thanks! We’ll reach out shortly.",
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ type: "error", message });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-4">
        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Full Name
          </span>
          <input
            value={payload.name}
            onChange={(e) =>
              setPayload((p) => ({ ...p, name: e.target.value }))
            }
            required
            disabled={isDisabled}
            className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 disabled:opacity-50"
            placeholder="John Doe"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Work Email
          </span>
          <input
            value={payload.email}
            onChange={(e) =>
              setPayload((p) => ({ ...p, email: e.target.value }))
            }
            required
            type="email"
            disabled={isDisabled}
            className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 disabled:opacity-50"
            placeholder="john@company.com"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Phone Number
          </span>
          <input
            value={payload.phone}
            onChange={(e) => setPayload((p) => ({ ...p, phone: e.target.value }))}
            required
            inputMode="tel"
            disabled={isDisabled}
            className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 disabled:opacity-50"
            placeholder="+1 (555) 000-0000"
          />
        </label>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isDisabled}
          className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg active:translate-y-0 active:scale-[0.98] disabled:opacity-50"
        >
          {status.type === "submitting" ? "Submitting..." : "Send Request"}
        </button>
      </div>

      <div className="mt-4 min-h-[40px]">
        {status.type === "success" ? (
          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/10">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            {status.message}
          </div>
        ) : null}

        {status.type === "error" ? (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-600/10">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
            {status.message}
          </div>
        ) : null}
      </div>
    </form>
  );
}
