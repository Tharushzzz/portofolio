

const Project = () => {
  return (
    <div className="grid w-full gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:grid-cols-[1.1fr_0.9fr] md:p-8">
                            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-cyan-500/15 via-white/5 to-transparent p-6">
                                <div>
                                    <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                                        Featured Project
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">Interactive Portfolio Site</h3>
                                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                                        A responsive portfolio experience with animated sections, modern UI polish, and smooth content transitions.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">React</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">TypeScript</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Tailwind</span>
                                </div>
                            </div>

                            <div className="grid place-items-center rounded-3xl border border-white/10 bg-black/30 p-6">
                                <div className="w-full rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),rgba(255,255,255,0.05)_35%,rgba(0,0,0,0.25)_100%)] p-6 text-center shadow-inner shadow-black/30">
                                    <div className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Project Snapshot</div>
                                    <div className="mt-4 text-5xl font-bold text-white">01</div>
                                    <div className="mt-4 text-sm leading-6 text-slate-300">This area can later hold a screenshot, mockup, or live preview of the project.</div>
                                </div>
                            </div>
                        </div>
  )
}

export default Project
