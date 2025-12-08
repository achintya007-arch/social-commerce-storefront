export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 bg-gradient-to-b from-background via-background to-card/30">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Subtitle */}
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Curated Vintage Pieces</p>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl leading-tight text-balance text-foreground">
          Ethereal Gothic Romance
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover handpicked vintage pieces imbued with woodland mystery, candlelit charm, and fairy-tale elegance.
          Each garment tells a story of dark romantic beauty.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors">
            Explore Drops
          </button>
          <button className="px-8 py-3 border border-accent text-accent font-sans text-sm tracking-widest uppercase hover:bg-accent/10 transition-colors">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
