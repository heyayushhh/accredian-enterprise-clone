import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const normalized = phone.replace(/[^\d+]/g, "");
  return normalized.length >= 8 && normalized.length <= 16;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const { name, email, phone } = (body ?? {}) as Partial<LeadPayload>;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json({ error: "Valid phone is required." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}

