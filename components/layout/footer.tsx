import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-foreground">Vintage Winn</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating timeless pieces with gothic romance and woodland charm.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Drops", "How to Order", "About"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">DM for inquiries</p>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-foreground">Info</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">© 2025 Vintage Winn. All rights reserved.</p>

          {/* Instagram Note */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Follow @vintagewinn on Instagram for new drops and exclusive updates
          </p>
        </div>
      </div>
    </footer>
  )
}
