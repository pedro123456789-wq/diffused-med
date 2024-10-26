import { Separator } from "@/components/ui/separator"

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary">Nillion Medical</h1>
        <Separator className="mt-2" />
      </div>
    </header>
  )
}