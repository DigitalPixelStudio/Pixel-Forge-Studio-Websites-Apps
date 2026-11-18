"use client";

import { useState } from "react";

type SafeJob = {
  jobId: string;
  device?: string;
  model?: string;
  repairType?: string;
  status?: string;
  statusTimeline?: Array<{ at: string; label: string }>;
  estimatedCompletion?: string;
  collectionStatus?: string;
  totalAmount?: number;
  amountPaid?: number;
  amountDue?: number;
  warranty?: string;
};

export function RepairTracker() {
  const [jobId, setJobId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [job, setJob] = useState<SafeJob | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = jobId.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setJob(null);

    try {
      const res = await fetch("/api/repair-tracking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          data?.message ??
            "We couldn't find that Job ID. Please check your receipt or contact us.",
        );
        return;
      }

      setJob(data.job as SafeJob);
    } catch {
      setError(
        "Something went wrong reaching our system. Please try again or message us on WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <p className="eyebrow">Repair tracking</p>
      <h3 style={{ marginTop: 8, marginBottom: 10 }}>Check your repair status</h3>
      <p className="muted" style={{ marginBottom: 18, fontSize: 14 }}>
        Enter the Job ID / Receipt ID from your service receipt to see status,
        collection details and payment summary.
      </p>

      <form onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="job-id">Job ID / Receipt ID</label>
          <input
            id="job-id"
            name="jobId"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            placeholder="e.g. RA-000123"
            autoComplete="off"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
          disabled={loading}
        >
          {loading ? "Checking…" : "Check status"}
        </button>
      </form>

      {error && (
        <p
          className="callout"
          role="alert"
          style={{ marginTop: 18, borderLeftColor: "var(--brand)" }}
        >
          {error}
        </p>
      )}

      {job && (
        <div style={{ marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <h4 style={{ fontSize: 16 }}>Job {job.jobId}</h4>
            <span className="status-pill">{job.status ?? "In progress"}</span>
          </div>

          <ul className="clean" style={{ marginTop: 12 }}>
            {job.device && (
              <li>
                <span className="tick">•</span>
                <span>
                  {job.device}
                  {job.model ? ` — ${job.model}` : ""}
                </span>
              </li>
            )}
            {job.repairType && (
              <li>
                <span className="tick">•</span>
                <span>{job.repairType}</span>
              </li>
            )}
            {job.estimatedCompletion && (
              <li>
                <span className="tick">•</span>
                <span>Estimated completion: {job.estimatedCompletion}</span>
              </li>
            )}
            {job.collectionStatus && (
              <li>
                <span className="tick">•</span>
                <span>Collection: {job.collectionStatus}</span>
              </li>
            )}
            {job.warranty && (
              <li>
                <span className="tick">•</span>
                <span>Warranty: {job.warranty}</span>
              </li>
            )}
            {typeof job.amountDue === "number" && (
              <li>
                <span className="tick">•</span>
                <span>
                  Amount due: ₹{job.amountDue.toLocaleString("en-IN")}
                  {typeof job.amountPaid === "number"
                    ? ` (paid ₹${job.amountPaid.toLocaleString("en-IN")} of ₹${(
                        job.totalAmount ?? 0
                      ).toLocaleString("en-IN")})`
                    : ""}
                </span>
              </li>
            )}
          </ul>

          {job.statusTimeline && job.statusTimeline.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <p className="from">Timeline</p>
              <ul className="clean">
                {job.statusTimeline.map((step, i) => (
                  <li key={`${step.at}-${i}`}>
                    <span className="tick">•</span>
                    <span>
                      {step.label}{" "}
                      <span className="muted" style={{ fontSize: 12 }}>
                        ({step.at})
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <p className="muted" style={{ fontSize: 12, marginTop: 16 }}>
        Only customer-safe details are shown. Internal notes, staff information
        and cost margins are never exposed.
      </p>
    </div>
  );
}
