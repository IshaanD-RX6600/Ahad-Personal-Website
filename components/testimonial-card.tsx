import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  imageUrl: string
}

export function TestimonialCard({ quote, name, title, imageUrl }: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex-1 pt-6">
        <QuoteIcon className="mb-4 h-8 w-8 text-primary/40" />
        <p className="mb-4 text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
