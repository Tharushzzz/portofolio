

const Certificates = () => {
  return (
    <div className="grid w-full gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:grid-cols-[0.95fr_1.05fr] md:p-8">
                            <div className="grid place-items-center rounded-3xl border border-white/10 bg-black/30 p-6">
                                <div className="w-full rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-6 text-center shadow-inner shadow-black/30">
                                    <div className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Certificate Preview</div>
                                    <div className="mt-4 flex h-56 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-black/25 text-sm text-slate-400">
                                        Certificate image placeholder
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/5 to-cyan-500/10 p-6">
                                <div>
                                    <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                                        Certification
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">Web Development Certification</h3>
                                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                                        A clean card layout for certificates, achievements, and learning milestones.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Frontend</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">UI Design</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Achievement</span>
                                </div>
                            </div>
                        </div>
  )
}

export default Certificates
