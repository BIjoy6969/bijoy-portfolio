"use client";

export function FraudResearchVisual() {
  return (
    <div className="research-visual-card">
      <div className="rv-header">
        <div className="rv-badge">
          <span className="rv-dot" />
          RESEARCH METHODOLOGY &amp; XAI PIPELINE
        </div>
        <span className="rv-meta">PyTorch · XGBoost · SHAP · LIME</span>
      </div>

      <div className="rv-body">
        {/* Pipeline Architecture Nodes */}
        <div className="rv-pipeline-strip">
          <div className="rv-node">
            <span className="rv-step">01</span>
            <span className="rv-title">Imbalanced Data</span>
            <span className="rv-sub">Fraud &lt; 0.2%</span>
          </div>
          <div className="rv-arrow">→</div>
          <div className="rv-node active">
            <span className="rv-step">02</span>
            <span className="rv-title">SMOTE + PCA</span>
            <span className="rv-sub">Synthetic Oversampling</span>
          </div>
          <div className="rv-arrow">→</div>
          <div className="rv-node">
            <span className="rv-step">03</span>
            <span className="rv-title">DNN / XGBoost</span>
            <span className="rv-sub">Ensemble Training</span>
          </div>
          <div className="rv-arrow">→</div>
          <div className="rv-node active-accent">
            <span className="rv-step">04</span>
            <span className="rv-title">SHAP &amp; LIME</span>
            <span className="rv-sub">Explainable Attribution</span>
          </div>
        </div>

        {/* Dynamic Interactive-style Visual Simulation */}
        <div className="rv-grid">
          {/* PR Curve & Threshold Box */}
          <div className="rv-panel">
            <div className="rv-panel-title">
              <span>Precision-Recall Boundary</span>
              <span className="rv-tag">Optimized Threshold</span>
            </div>
            <svg viewBox="0 0 240 120" className="rv-svg" aria-hidden="true">
              <path d="M20 100 L220 100" stroke="var(--border-2)" strokeWidth="1" />
              <path d="M20 20 L20 100" stroke="var(--border-2)" strokeWidth="1" />
              <path
                d="M20 25 C60 25 110 30 160 55 C190 70 210 95 215 100"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
              />
              <line x1="150" y1="20" x2="150" y2="100" stroke="var(--muted)" strokeDasharray="3 3" />
              <circle cx="150" cy="50" r="4.5" fill="var(--accent)" />
              <text x="156" y="44" fill="var(--accent-text)" fontSize="8.5" fontFamily="monospace">
                Optimal Cut (F1 Max)
              </text>
              <text x="25" y="112" fill="var(--faint)" fontSize="7.5" fontFamily="monospace">
                Recall →
              </text>
              <text x="5" y="28" fill="var(--faint)" fontSize="7.5" fontFamily="monospace" transform="rotate(-90 12,28)">
                Precision →
              </text>
            </svg>
          </div>

          {/* SHAP / LIME Feature Attribution */}
          <div className="rv-panel">
            <div className="rv-panel-title">
              <span>XAI Feature Attribution</span>
              <span className="rv-tag">SHAP Values</span>
            </div>
            <div className="rv-shap-list">
              <div className="rv-shap-row">
                <span className="rv-feature">V14 (PCA component)</span>
                <div className="rv-bar-track">
                  <div className="rv-bar rv-bar-pos" style={{ width: "88%" }} />
                </div>
                <span className="rv-val">+0.48</span>
              </div>
              <div className="rv-shap-row">
                <span className="rv-feature">V10 (Transaction skew)</span>
                <div className="rv-bar-track">
                  <div className="rv-bar rv-bar-pos" style={{ width: "72%" }} />
                </div>
                <span className="rv-val">+0.39</span>
              </div>
              <div className="rv-shap-row">
                <span className="rv-feature">V12 (Velocity signal)</span>
                <div className="rv-bar-track">
                  <div className="rv-bar rv-bar-neg" style={{ width: "45%" }} />
                </div>
                <span className="rv-val">-0.24</span>
              </div>
              <div className="rv-shap-row">
                <span className="rv-feature">Amount (Log-scaled)</span>
                <div className="rv-bar-track">
                  <div className="rv-bar rv-bar-pos" style={{ width: "38%" }} />
                </div>
                <span className="rv-val">+0.19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
