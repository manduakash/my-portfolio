import confetti from "canvas-confetti";

type BurstType =
  | 1  // Basic burst
  | 2  // Directional
  | 3  // Firework
  | 4  // Pop / Sparkle (YouTube style)
  | 5  // Confetti shower
  | 6  // Side cannons
  | 7  // Pulse
  | 8  // Star shape
  | 9  // Heavy gravity
  | 10 // Fountain
  | 11 // Cursor origin
  | 12; // Full spread

export const fireConfetti = (
  type: BurstType,
  rect?: DOMRect,
  event?: React.MouseEvent
) => {
  const centerOrigin = rect
    ? {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      }
    : undefined;

  switch (type) {
    // 1️⃣ Basic burst
    case 1:
      confetti({
        particleCount: 30,
        spread: 60,
        origin: centerOrigin,
      });
      break;

    // 2️⃣ Directional burst
    case 2:
      confetti({
        particleCount: 25,
        angle: 90,
        spread: 45,
        origin: centerOrigin,
      });
      break;

    // 3️⃣ Firework
    case 3:
      confetti({
        particleCount: 60,
        spread: 360,
        startVelocity: 30,
        origin: centerOrigin,
      });
      break;

    // 4️⃣ Pop / Sparkle (YouTube-style) ⭐
    case 4:
      confetti({
        particleCount: 18,
        spread: 40,
        startVelocity: 18,
        scalar: 0.7,
        gravity: 0.6,
        origin: centerOrigin,
      });
      break;

    // 5️⃣ Confetti shower
    case 5:
      confetti({
        particleCount: 120,
        angle: 90,
        spread: 100,
        origin: { y: 0 },
      });
      break;

    // 6️⃣ Side cannons
    case 6:
      confetti({
        particleCount: 40,
        angle: 60,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 40,
        angle: 120,
        origin: { x: 1 },
      });
      break;

    // 7️⃣ Pulse burst
    case 7:
      for (let i = 0; i < 3; i++) {
        confetti({
          particleCount: 20,
          spread: 55,
          origin: centerOrigin,
        });
      }
      break;

    // 8️⃣ Star shape burst
    case 8:
      confetti({
        particleCount: 25,
        shapes: ["star"],
        spread: 70,
        origin: centerOrigin,
      });
      break;

    // 9️⃣ Heavy gravity
    case 9:
      confetti({
        particleCount: 40,
        gravity: 1.3,
        spread: 60,
        origin: centerOrigin,
      });
      break;

    // 🔟 Fountain
    case 10:
      confetti({
        particleCount: 30,
        angle: 270,
        spread: 60,
        gravity: 0.8,
        origin: centerOrigin,
      });
      break;

    // 1️⃣1️⃣ Cursor-origin burst
    case 11:
      if (!event) return;
      confetti({
        particleCount: 25,
        spread: 50,
        origin: {
          x: event.clientX / window.innerWidth,
          y: event.clientY / window.innerHeight,
        },
      });
      break;

    // 1️⃣2️⃣ Full spread explosion
    case 12:
      confetti({
        particleCount: 80,
        spread: 360,
        startVelocity: 25,
      });
      break;

    default:
      break;
  }
};
