"use client";

import { useState, type FormEvent } from "react";
import { home } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Arrow } from "@/components/Icons";

/**
 * Messages are delivered by Web3Forms (https://web3forms.com) to the inbox the
 * access key was created for. The key is public by design: it can only send to
 * that inbox. Set it in .env.local as NEXT_PUBLIC_WEB3FORMS_KEY, then rebuild.
 * Without a key, the form falls back to opening the visitor's mail app.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type State = "idle" | "sending" | "ok" | "error";

export function ContactForm({ locale: l, fallbackEmail }: { locale: Locale; fallbackEmail: string }) {
  const t = home.contact.form;
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!ACCESS_KEY) {
      const body = `${message}\n\n${name} · ${email}`;
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(t.subject[l])}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `${t.subject.en} · ${name}`,
          from_name: "Portfolio",
          name,
          email,
          message,
          language: l,
          botcheck: data.get("botcheck") ? true : "",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (res.ok && json.success) {
        setState("ok");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} aria-labelledby="contact-form-h">
      <h3 id="contact-form-h">{t.title[l]}</h3>
      <div className="row">
        <div className="field">
          <label htmlFor="cf-name">{t.name[l]}</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor="cf-email">{t.email[l]}</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={200} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">{t.message[l]}</label>
        <textarea id="cf-message" name="message" required maxLength={5000} placeholder={t.messagePlaceholder[l]} />
      </div>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <div className="hp" aria-hidden="true">
        <label>
          Leave empty
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="actions">
        <button className="btn primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? t.sending[l] : t.send[l]} <Arrow />
        </button>
        <p className={`msg${state === "ok" ? " ok" : state === "error" ? " err" : ""}`} role="status" aria-live="polite">
          {state === "ok" ? t.success[l] : state === "error" ? t.error[l] : ""}
        </p>
      </div>
    </form>
  );
}
