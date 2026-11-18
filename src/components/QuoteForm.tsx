"use client";

import { useState } from "react";
import {
  iphonePrices,
  ipadPrices,
  appleWatchPrices,
} from "@/businessConfig";

const deviceTables: Record<string, Record<string, number>> = {
  iPhone: iphonePrices,
  iPad: ipadPrices,
  "Apple Watch": appleWatchPrices,
};

const repairTypes = [
  "Full Display Replacement",
  "Front Glass Restoration",
  "Battery Replacement",
  "Water Damage Recovery",
  "Motherboard / Chip-Level Repair",
  "Other / Not sure",
];

/**
 * Quotation form.
 *
 * The quotation context fields (device, model, repair, estimatedPrice) are
 * preserved exactly for the WhatsApp handoff — the customer contact sheet
 * format is unchanged.
 */
export function QuoteForm() {
  const [name, setName] = useState("");
  const [device, setDevice] = useState("iPhone");
  const [model, setModel] = useState("");
  const [repair, setRepair] = useState(repairTypes[0]);
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const models = Object.keys(deviceTables[device] ?? {});
  const estimatedPrice = deviceTables[device]?.[model];

  function buildWhatsAppUrl() {
    const lines = [
      "Hi Red Apple, I'd like a repair quote.",
      name ? `Name: ${name}` : "",
      `Device: ${device}`,
      `Model: ${model || "not selected"}`,
      `Repair: ${repair}`,
      `Estimated price: ${
        estimatedPrice != null ? `₹${estimatedPrice.toLocaleString("en-IN")}` : "to be quoted"
      }`,
      notes ? `Notes: ${notes}` : "",
      "",
      `Context: device=${device}&model=${model || "selected"}&repair=${repair}${
        estimatedPrice != null ? `&estimatedPrice=${estimatedPrice}` : "&estimatedPrice=quoteSource"
      }`,
    ].filter(Boolean);

    return `https://wa.me/919876543210?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <p className="eyebrow">Quotation</p>
      <h3 style={{ marginTop: 8, marginBottom: 16 }}>
        Send us your repair details
      </h3>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="q-name">Your name</label>
          <input
            id="q-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            autoComplete="name"
          />
        </div>

        <div className="field">
          <label htmlFor="q-device">Device</label>
          <select
            id="q-device"
            value={device}
            onChange={(e) => {
              setDevice(e.target.value);
              setModel("");
            }}
          >
            {Object.keys(deviceTables).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="q-model">Model</label>
          <select
            id="q-model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="">Select model</option>
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="q-repair">Repair type</label>
          <select
            id="q-repair"
            value={repair}
            onChange={(e) => setRepair(e.target.value)}
          >
            {repairTypes.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="field" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="q-notes">What&apos;s happening with the device?</label>
          <textarea
            id="q-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. screen cracked at the corner, touch still works"
          />
        </div>
      </div>

      <div
        className="callout"
        style={{ marginTop: 4, marginBottom: 16 }}
        aria-live="polite"
      >
        Estimated price:{" "}
        <strong>
          {estimatedPrice != null
            ? `₹${estimatedPrice.toLocaleString("en-IN")}`
            : "confirmed after inspection"}
        </strong>
        {repair === "Front Glass Restoration" &&
          " — subject to eligibility after inspection."}
      </div>

      <button type="submit" className="btn btn-whatsapp" style={{ width: "100%" }}>
        Continue on WhatsApp
      </button>

      {sent && (
        <p className="muted" style={{ fontSize: 12, marginTop: 10 }}>
          WhatsApp opened in a new tab with your details filled in. If it
          didn&apos;t open, call us on +91 98765 43210.
        </p>
      )}

      <p className="muted" style={{ fontSize: 12, marginTop: 10 }}>
        Your device, model, repair type and estimated price are carried into
        WhatsApp so nothing is lost in the handoff.
      </p>
    </form>
  );
}
