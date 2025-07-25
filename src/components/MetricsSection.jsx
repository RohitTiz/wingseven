import React, { useEffect, useRef, useState } from 'react';

const metrics = [
  { value: 1000000, suffix: '+', label: 'Happy Students' },
  { value: 5000, suffix: '+', label: 'Top Selections' },
  { value: 100, suffix: '+', label: 'Centers' },
  { value: 300, suffix: '+', label: 'Expert Teachers' },
];

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
};

const MetricsSection = () => {
  const [counts, setCounts] = useState(metrics.map(m => m.value));
  const sectionRef = useRef(null);
  const animationRunning = useRef(false);
  const shouldLoop = useRef(false);
  const intervalId = useRef(null);

  const startCounting = () => {
    if (animationRunning.current) return;
    animationRunning.current = true;

    setCounts(metrics.map(() => 0));
    let progress = metrics.map(() => 0);
    const increments = metrics.map(m => Math.ceil(m.value / 100));

    intervalId.current = setInterval(() => {
      let updated = [...progress];
      let done = true;

      for (let i = 0; i < metrics.length; i++) {
        if (updated[i] < metrics[i].value) {
          updated[i] = Math.min(updated[i] + increments[i], metrics[i].value);
          done = false;
        }
      }

      setCounts(updated);
      progress = updated;

      if (done) {
        clearInterval(intervalId.current);
        setTimeout(() => {
          animationRunning.current = false;
          if (shouldLoop.current) {
            startCounting(); // Restart
          }
        }, 2000); // Delay before looping
      }
    }, 30);
  };

  const handleMouseEnter = () => {
    shouldLoop.current = true;
    startCounting();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          shouldLoop.current = true;
          startCounting();
        }
      },
      {
        threshold: 0.3, // 30% of section visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      style={{
        padding: '60px 20px',
        background: '#fff',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {metrics.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: '200px',
              padding: '30px 20px',
              background: '#f9f9ff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
            }}
          >
            <h2 style={{ color: '#0072ff', fontSize: '2rem', marginBottom: '10px' }}>
              {formatNumber(counts[idx])}
              {item.suffix}
            </h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
