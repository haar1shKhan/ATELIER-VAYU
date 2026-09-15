
const Journal = () => {
    return (
        <div>      <section
            className="py-24 sm:py-32 bg-surface"
            id="journal"
        >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/60">

                    <div>
                        <span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
                            06 / JOURNAL
                        </span>

                        <h2 className="font-display-lg text-3xl sm:text-4xl text-primary mt-2">
                            ESSAYS &amp; DISPATCHES
                        </h2>
                    </div>

                    <a
                        className="text-xs uppercase tracking-[0.2em] text-primary hover:text-secondary mt-4 md:mt-0 font-medium inline-flex items-center gap-1"
                        href="#"
                    >
                        VIEW ALL DISPATCHES

                        <span
                            className="material-symbols-outlined text-sm"
                            data-icon="east"
                        >
                            east
                        </span>
                    </a>
                </div>

                {/* Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

                    {/* Article 1 */}
                    <article className="group cursor-pointer">

                        <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-surface-container mb-6 border border-outline-variant/50">

                            <img
                                alt="The New Language of Indian Formalwear"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB02-22CILRVGBMyUbAingVBuwJlcJE1JNkUxt_CHHjq3R66Jb55HshHqrNCUUm5MeT4yQfmI41UlTjvFhYMzIxfrChqqH9m5SnFfBTq5JpO3lUXo0UwwlpS5hnRMUwHPN2sKp0qozvK_ze5K88vr8H8sCI6iVQEsSxypLCEpny2lmiVv72KbFWKgRkcY142dQA7hGvq6NeLRDfTYXW6qlkp3-_zSbalKtJcv8iT6EXC4DNQFOT6dpt"
                            />
                        </div>

                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-outline mb-2">
                            <span>SARTORIAL THOUGHT</span>
                            <span>·</span>
                            <span>OCTOBER 2025</span>
                        </div>

                        <h3 className="font-display-lg text-2xl text-primary group-hover:text-secondary transition-colors leading-snug">
                            The New Language of Indian Formalwear: Rejecting The Costume
                        </h3>

                        <p className="text-sm text-on-surface-variant font-light mt-3 leading-relaxed">
                            How contemporary tailoring is untethering traditional silhouettes from ornamental excess, returning to architectural line and pure material integrity.
                        </p>

                        <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5">
                            READ ESSAY →
                        </span>
                    </article>

                    {/* Article 2 */}
                    <article className="group cursor-pointer">

                        <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-surface-container mb-6 border border-outline-variant/50">

                            <img
                                alt="Craft, Culture &amp; The Modern Wardrobe"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlS-hP9cU0-qbawOqR46wT74RXsKNR3i-0bh1jEQqfsl3PAMu5811Wt1iyhRKxuZXZM7rGl3jvjIlvYXTSNzUHMRxXnYrORmcH7jcWLs4we9t-1rZqG6xnqoBcdtxpPbd5s0pOsSbvd0Dt-lc6BJAD3t30_uPgthkALZGNbJBYqZgJSPNhWZsRYh_qojqlxLna26bmQYEiwIKmB6uNluanhJQDCZBrQQbpt3J08OKDmgOD8JCXMoPU"
                            />
                        </div>

                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-outline mb-2">
                            <span>ATELIER NOTES</span>
                            <span>·</span>
                            <span>SEPTEMBER 2025</span>
                        </div>

                        <h3 className="font-display-lg text-2xl text-primary group-hover:text-secondary transition-colors leading-snug">
                            Craft, Culture &amp; The Modern Wardrobe: Inside The Weaving Sheds
                        </h3>

                        <p className="text-sm text-on-surface-variant font-light mt-3 leading-relaxed">
                            A journey through the narrow lanes of Varanasi and Jaipur, where artisan guilds maintain the rare craft of hand-guided metallic bullion work.
                        </p>

                        <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5">
                            READ ESSAY →
                        </span>
                    </article>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Journal