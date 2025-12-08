'use client'

import { ShoppingBag, MessageCircle, CheckCircle2 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

type HowToBuyProps = {
  instagramHandle: string
}

export function HowToBuy({ instagramHandle }: HowToBuyProps) {
  const cleanHandle = instagramHandle.replace(/^@/, '')

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-2 text-center">
          <Badge className="mx-auto rounded-full px-4 py-1 text-xs uppercase tracking-wide">
            How to Buy
          </Badge>
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">
            Same Instagram DMs. Just cleaner & faster.
          </h2>
          <p className="text-balance text-sm text-muted-foreground md:text-base">
            Browse drops here, place your order on Instagram DM, and we&apos;ll confirm + mark items as SOLD in real time.
          </p>
        </div>

        <Card className="border-border/60 bg-background/60 backdrop-blur">
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg md:text-xl">
              How it works
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm font-medium">1</span>
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Pick your piece
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Browse the drop, check size & price, and make sure the item isn&apos;t marked as{' '}
                <span className="font-medium text-foreground">SOLD</span>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm font-medium">2</span>
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  DM to order
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tap <span className="font-medium">“Buy via Instagram DM”</span> on the product. It opens a DM to{' '}
                <Link
                  href={`https://instagram.com/${cleanHandle}`}
                  target="_blank"
                  className="inline-flex items-center gap-1 font-medium underline underline-offset-4"
                >
                  @{cleanHandle}
                  <MessageCircle className="h-3 w-3" />
                </Link>
                {' '}with item details pre-filled.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm font-medium">3</span>
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Confirm & pay
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                We confirm availability on DM, share payment details, and once paid we mark the item{' '}
                <span className="inline-flex items-center gap-1 font-medium">
                  SOLD
                  <CheckCircle2 className="h-3 w-3" />
                </span>{' '}
                here & on Instagram.
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          This website does not process payments. All orders are placed and confirmed via Instagram DMs with{' '}
          <Link
            href={`https://instagram.com/${cleanHandle}`}
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            @{cleanHandle}
          </Link>.
        </p>
      </div>
    </section>
  )
}
