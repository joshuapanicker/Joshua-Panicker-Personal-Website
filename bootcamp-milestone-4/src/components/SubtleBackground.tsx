export default function SubtleBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 38% at 50% 0%, rgba(110,55,175,0.14) 0%, transparent 62%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(180,140,255,0.016) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,140,255,0.016) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
