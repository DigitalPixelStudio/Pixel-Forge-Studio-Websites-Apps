"use client";

import { useRef, useState } from "react";
import { chatbotConfig } from "@/businessConfig";

type Msg = { role: "user" | "assistant"; text: string; handoff?: boolean };

const GREETING: Msg = {
  role: "assistant",
  text: "Hi! I'm the Red Apple repair assistant. Ask me about prices, front glass restoration, warranty, hours or pickup — or tap a quick action.",
};

export function ChatAssistant() {
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const clean = text.trim();
    if (!clean || busy) return;

    setMessages((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean }),
      });
      const data = await res.json();

      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text:
            data?.reply ??
            "I couldn't reach the assistant just now. Please message us on WhatsApp and a technician will help.",
          handoff: Boolean(data?.handoff),
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "Network hiccup on my side. You can reach a technician instantly on WhatsApp.",
          handoff: true,
        },
      ]);
    } finally {
      setBusy(false);
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
    }
  }

  return (
    <div className="card">
      <div
        ref={scrollRef}
        style={{
          maxHeight: 340,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          paddingRight: 4,
        }}
        aria-live="polite"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
              padding: "10px 14px",
              borderRadius: 14,
              fontSize: 14,
              lineHeight: 1.5,
              background:
                m.role === "user" ? "var(--brand)" : "var(--panel-2)",
              color: m.role === "user" ? "#fff" : "var(--text)",
              border:
                m.role === "user"
                  ? "1px solid transparent"
                  : "1px solid var(--border)",
              whiteSpace: "pre-wrap",
            }}
          >
            {m.text}
            {m.handoff && (
              <div style={{ marginTop: 8 }}>
                <a
                  className="btn btn-whatsapp"
                  style={{ padding: "6px 12px", fontSize: 12 }}
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continue on WhatsApp
                </a>
              </div>
            )}
          </div>
        ))}
        {busy && (
          <div
            style={{
              alignSelf: "flex-start",
              color: "var(--muted)",
              fontSize: 13,
            }}
          >
            Assistant is typing…
          </div>
        )}
      </div>

      <div className="chip-list" style={{ marginTop: 16 }}>
        {chatbotConfig.quickActions.map((action) => (
          <button
            key={action}
            type="button"
            className="chip"
            onClick={() => send(action)}
            disabled={busy}
            style={{
              cursor: "pointer",
              background: "transparent",
              color: "var(--text)",
            }}
          >
            {action}
          </button>
        ))}
      </div>

      <form
        style={{ display: "flex", gap: 8, marginTop: 14 }}
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a repair, price or your device…"
          aria-label="Chat message"
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={busy}
          style={{ whiteSpace: "nowrap" }}
        >
          Send
        </button>
      </form>

      <p className="muted" style={{ fontSize: 12, marginTop: 12 }}>
        Answers use our live pricing data. For anything unusual, a technician
        takes over on WhatsApp.
      </p>
    </div>
  );
}
