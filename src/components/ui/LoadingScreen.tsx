export function LoadingScreen() {
  return (
    <div aria-live="polite" className="loading-screen" role="status">
      <span className="loading-screen__indicator" aria-hidden="true" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
