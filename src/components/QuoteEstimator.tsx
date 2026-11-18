"use client";

import { useMemo, useState } from "react";
import {
  iphonePrices,
  ipadPrices,
  appleWatchPrices,
  frontGlassRestorationInfo,
  repairTypeDistinction,
} from "@/businessConfig";

type DeviceKey = "iPhone" | "iPad" | "Apple Watch";

const deviceDatasets: Record<DeviceKey, Record<string, number>> = {
  iPhone: iphonePrices,
  iPad: ipadPrices,
  "Apple Watch": appleWatchPrices,
};

const repairOptions = [
  { value: "full-display", label: "Full Display Replacement" },
  { value: "front-glass", label: "Front Glass Restoration" },
  { value: "other", label: "Another repair (battery, board, water damage…)" },
] as const;

export function QuoteEstimator() {
  const [device, setDevice] = useState<DeviceKey>("iPhone");
  const [model, setModel] = useState<string>("iPhone 16 Pro Max");
  const [repair, setRepair] = useState<string>("full-display");

  const models = useMemo(() => Object.keys(deviceDatasets[device]), [device]);
  const displayPrice = deviceDatasets[device][model];

  function handleDevice(next: DeviceKey) {
    setDevice(next);
    setModel(Object.keys(deviceDatasets[next])[0]);
  }

  const isFrontGlass = repair === "front-glass";
  const isOther = repair === "other";

  const priceLabel = isOther
    ? "Quoted after diagnosis"
    : isFrontGlass
      ? "Confirmed after inspection"
      : displayPrice != null
        ? `₹${displayPrice.toLocaleString("en-IN")}`
        : "Quoted after inspection";

  const whatsappMessage = encodeURIComponent(
    `Hi Red Apple, I'd like a quote.\nDevice: ${device}\nModel: ${model}\nRepair: ${
      repairOptions.find((r) => r.value === repair)?.label ?? repair
    }\nIndicative price shown: ${priceLabel}`,
  );

  return (
    <div className="card" id="estimator">
      <p className="eyebrow">Instant estimate</p>
      <h3 style={{ marginTop: 8, marginBottom: 16 }}>
        Get a transparent repair estimate
      </h3>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="est-device">Device</label>
          <select
            id="est-device"
            value={device}
            onChange={(e) => handleDevice(e.target.value as DeviceKey)}
          >
            {(Object.keys(deviceDatasets) as DeviceKey[]).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="est-model">Model</label>
          <select
            id="est-model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="field" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="est-repair">Repair type</label>
          <select
            id="est-repair"
            value={repair}
            onChange={(e) => setRepair(e.target.value)}
          >
            {repairOptions.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          padding: 18,
          borderRadius: 14,
          background: "var(--panel-2)",
          border: "1px solid var(--border)",
        }}
      >
        <p className="from">Indicative price</p>
        <p style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>
          {priceLabel}
        </p>

        {isFrontGlass && (
          <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            {frontGlassRestorationInfo.description}{" "}
            {frontGlassRestorationInfo.warrantyNote}
          </p>
        )}

        {!isFrontGlass && !isOther && (
          <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            {repairTypeDistinction.fullDisplayReplacement}
          </p>
        )}

        {isOther && (
          <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            Send us the details on WhatsApp and a technician will confirm the
            price and turnaround.
          </p>
        )}

        <div className="chip-list">
          <span className="chip">Warranty: 90 days – 6 months</span>
          <span className="chip">
            {isFrontGlass ? "6-month hardware warranty" : "Same-day where possible"}
          </span>
          <span className="chip">Final quote after inspection</span>
        </div>
      </div>

      <div className="hero-actions" style={{ marginTop: 18 }}>
        <a
          className="btn btn-whatsapp"
          href={`https://wa.me/919876543210?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send this to WhatsApp
        </a>
        <a className="btn btn-ghost" href="tel:+919876543210">
          Call a technician
        </a>
      </div>

      <p className="muted" style={{ fontSize: 12, marginTop: 14 }}>
        Prices are indicative and confirmed after technician inspection. Your
        device, model, repair type and shown price are carried into WhatsApp so
        you never have to repeat yourself.
      </p>
    </div>
  );
}
