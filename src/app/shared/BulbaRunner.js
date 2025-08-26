// src/components/BulbaRunner.jsx
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import bulbaJson from '../assets/lottie/bulbasaur.json';

export default function BulbaRunner() {
  const ref = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: !prefersReduced, // play only if not reduced motion
      animationData: bulbaJson
    });

    // Toggle the CSS animation for sliding across
    if (!prefersReduced) {
      ref.current.classList.add('is-running');
    }

    return () => anim.destroy();
  }, []);

  return (
    <div className="header-runner d-none d-md-block">
      {/* Using an id to match your existing CSS. You could switch to a class if you prefer. */}
      <div id="bulbaLottie" ref={ref} />
    </div>
  );
}
