export type Product = {
  id: string
  name: string
  image?: string
  size: string
  price: number
  availability: "available" | "sold"
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Vintage Leather Jacket",
    image: "/placeholder.jpg",
    size: "M",
    price: 2999,
    availability: "available",
  },
  {
    id: "2",
    name: "Oversized Band Tee",
    image: "/placeholder.jpg",
    size: "L",
    price: 1299,
    availability: "sold",
  },
]
