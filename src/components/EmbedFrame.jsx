export function EmbedFrame({ title, src, ratio = "62%" }) {
  return (
    <div className="embed-shell" style={{ "--embed-ratio": ratio }}>
      <iframe src={src} title={title} loading="lazy" allowFullScreen />
    </div>
  );
}
