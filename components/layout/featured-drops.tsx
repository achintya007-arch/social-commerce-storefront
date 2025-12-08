export default function FeaturedDrops() {
  const drops = [
    {
      id: 1,
      title: "Midnight Velvet Collection",
      season: "Winter 2024",
      image: "/dark-velvet-gothic-fashion.jpg",
      description: "Luxurious velvet pieces inspired by Victorian gothic aesthetics",
    },
    {
      id: 2,
      title: "Woodland Whispers",
      season: "Autumn 2024",
      image: "/vintage-woodland-fairy-tale-clothing.jpg",
      description: "Ethereal layered garments with forest-inspired tones",
    },
    {
      id: 3,
      title: "Candlelit Romance",
      season: "Spring 2025",
      image: "/romantic-vintage-lace-fashion.jpg",
      description: "Delicate lace and silk pieces for the romantic soul",
    },
  ]

  return (
    <section id="drops" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Latest Collections</p>
          <h2 className="font-serif text-5xl md:text-6xl text-foreground text-balance">Featured Drops</h2>
        </div>

        {/* Drops Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {drops.map((drop) => (
            <div key={drop.id} className="group">
              {/* Image Container */}
              <div className="mb-6 overflow-hidden bg-card h-96">
                <img
                  src={drop.image || "/placeholder.svg"}
                  alt={drop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Drop Info */}
              <div className="space-y-3">
                <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{drop.season}</p>
                <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                  {drop.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{drop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
