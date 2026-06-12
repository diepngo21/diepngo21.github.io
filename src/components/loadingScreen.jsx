import React, { useState, useEffect, useRef } from "react";
import "../style/components/loadingScreen.css";

const messages = [
  "shh, loading quietly…",
  "almost ready, don't wake the cat…",
  "just a little longer…",
  "nearly there…",
];

const LoadingScreen = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const valRef = useRef(0);

  useEffect(() => {
    let raf;
    let last = performance.now();

    const step = (now) => {
      const dt = now - last;
      last = now;
      const inc = (Math.random() * 8 + 4) * (dt / 150);
      valRef.current = Math.min(valRef.current + inc, 100);
      setProgress(valRef.current);
      if (valRef.current < 100) {
        raf = setTimeout(() => requestAnimationFrame(step), 30 + Math.random() * 50);
      } else {
        setTimeout(() => onDone?.(), 200);
      }
    };

    const t = setTimeout(() => requestAnimationFrame(step), 200);
    return () => { clearTimeout(t); clearTimeout(raf); };
  }, []);

  const pct = Math.floor(progress);
  const msgIndex = Math.min(Math.floor(progress / 26), messages.length - 1);

  return (
    <div className="nap-loader">
      <div className="nap-inner">

        <div className="nap-header">
          <div className="nap-header-rule" />
          <span className="nap-header-text">Diep Ngo</span>
          <div className="nap-header-rule" />
        </div>

        <div className="nap-scene-wrap">
          <div className="cat-scene">
            <div className="zzz">
              <span>z</span>
              <span>z</span>
              <span>Z</span>
            </div>

            <svg className="cat-tail" width="50" height="60" viewBox="0 0 50 60">
              <path
                d="M44 55 Q38 40 28 28 Q18 16 22 6 Q25 0 30 4"
                fill="none" stroke="#D4C4A8" strokeWidth="6"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>

            <div className="cat-body" />
            <div className="cat-belly" />
            <div className="cat-collar" />
            <div className="cat-head" />
            <div className="cat-ear cat-ear-l" />
            <div className="cat-ear cat-ear-r" />
            <div className="cat-eyes">
              <div className="eye-closed" />
              <div className="eye-closed" />
            </div>
            <div className="cat-nose" />
            <div className="whiskers">
              <span className="wl1" /><span className="wl2" />
              <span className="wr1" /><span className="wr2" />
            </div>
            <div className="paw paw-l" />
            <div className="paw paw-r" />
          </div>

          <div className="pillow" />
        </div>

        <div className="nap-progress">
          <div className="nap-progress-meta">
            <span className="nap-progress-label">Loading</span>
            <span className="nap-progress-pct">{pct}%</span>
          </div>
          <div className="nap-progress-track">
            <div className="nap-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="nap-sub">{messages[msgIndex]}</div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
