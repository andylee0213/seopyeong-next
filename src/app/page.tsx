// filename: src/app/page.tsx

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [korOpacity, setKorOpacity] = useState(1);
  const [chiOpacity, setChiOpacity] = useState(0);

  useEffect(() => {
    const fadeOut = setTimeout(() => setKorOpacity(0), 1000);
    const fadeIn = setTimeout(() => setChiOpacity(1), 1900);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(fadeIn);
    };
  }, []);

  return (
    <div className="home-hero">
      <div
        className="home-logo-layer"
        style={{
          opacity: korOpacity,
          transition: "opacity 1500ms ease",
        }}
      >
        <Image
          src="/images/logo_home_hangul.png"
          alt="서평"
          width={326}
          height={116}
          priority
        />
      </div>

      <div
        className="home-logo-layer"
        style={{
          opacity: chiOpacity,
          transition: "opacity 2500ms ease",
        }}
      >


        <Image
          src="/images/logo_home.png"
          alt="瑞平"
          width={480}
          height={310}
          priority
        />
      </div>
    </div>
  );
}
