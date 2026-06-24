const PageLoader = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#120F17] backdrop-blur-2xl backdrop-saturate-150"
    >
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-[#120F17]/55 px-8 py-10 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20" />
          <div className="absolute inset-0 rounded-full border-2 border-t-cyan-300 border-r-cyan-300 border-b-transparent border-l-transparent animate-spin" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)] animate-pulse" />
        </div>

        <div className="text-center">
          <p className="font-[MonumentExtended] text-xs uppercase tracking-[0.45em] text-white/60">
            Loading
          </p>
          <p className="mt-2 text-sm text-white/80">
            Preparing the experience...
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageLoader