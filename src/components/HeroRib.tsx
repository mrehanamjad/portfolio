"use client";

import { useRef } from "react";

import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";

export function HeroRib() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />

  );
}
