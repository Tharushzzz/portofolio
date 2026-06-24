
const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-[#0f0c14] px-6 py-14 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl font-bold tracking-wide sm:text-4xl">
            Building clean, creative, and modern web experiences.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
            Explore my work, certifications, and learning journey. I enjoy turning ideas into polished interfaces that feel thoughtful and responsive.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Contact
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>
                Email:{" "}
                <a
                  href="mailto:tharushadilmin123@gmail.com"
                  className="text-cyan-200 transition hover:text-cyan-100 hover:underline"
                >
                  tharushadilmin123@gmail.com
                </a>
              </p>
              <p>Location: Sri Lanka</p>
              <p>Available for freelance and collaboration</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Links
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <a href="#home" className="block transition hover:text-cyan-200">Home</a>
              <a href="#about" className="block transition hover:text-cyan-200">About</a>
              <a href="#showcase" className="block transition hover:text-cyan-200">Showcase</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Portfolio. All rights reserved.</p>
        <p>Designed by TD.</p>
      </div>
    </footer>
  )
}

export default Footer
