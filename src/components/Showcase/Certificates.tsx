

type certificatesProps = {
    title : string;
    description : string;
    skils : string[];
    image :string;
}

const Certificates = ({title, description, skils, image }: certificatesProps) => {
  return (
    <div className="grid w-full gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:grid-cols-[0.95fr_1.05fr] md:p-8">
        <div className="grid place-items-center rounded-3xl border border-white/10 bg-black/30 p-6">
            <div className="w-full rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-6 text-center shadow-inner shadow-black/30">
                    <img src={image} alt="certification image" />
            </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/5 to-cyan-500/10 p-6">
            <div>
                <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                    Certification
                </div>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                        {description}
                     </p>
                </div>

                <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
                    {skils.map( (skil) => (
                        <span key={skil} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{skil}</span>
                    )) }

                    
                </div>
            </div>
        </div>
  )
}

export default Certificates
