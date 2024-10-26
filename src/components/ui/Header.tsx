import Link from 'next/link'
import { Separator } from "@/components/ui/separator"

export default function Header() {
  return (
    <header className="w-full py-6 bg-background">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-block">
          <h1 className="text-3xl font-bold text-primary hover:text-primary/90 transition-colors">
            Diffused-Med
          </h1>
        </Link>
        <Separator className="mt-2" />
      </div>
    </header>
  )
}