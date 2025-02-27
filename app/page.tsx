import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#DDDDFB] bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#1418EB]"></div>
            <span className="text-xl font-bold text-[#141414]">CareerCompass</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-[#141414]">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#1418EB] text-white hover:bg-[#1418EB]/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#F5F5F5] py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-[#141414] md:text-5xl">
                  Discover Your Perfect Career Path
                </h1>
                <p className="text-lg text-[#141414]/80">
                  Our AI-powered platform analyzes your skills, interests, and experience to recommend the best career
                  paths and identify skills you need to develop.
                </p>
                <Link href="/signup">
                  <Button className="bg-[#1418EB] text-white hover:bg-[#1418EB]/90">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <div className="aspect-video rounded-md bg-[#00EDBE]/10 p-8">
                  <div className="flex h-full flex-col items-center justify-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-[#00EDBE]"></div>
                    <p className="text-center text-lg font-medium text-[#141414]">AI-Powered Career Guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#141414]">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Create Your Profile",
                  description: "Sign up and input your education, skills, interests, and past experiences.",
                  icon: "📝",
                },
                {
                  title: "Take Career Assessment",
                  description:
                    "Complete our comprehensive career interest test to help us understand your preferences.",
                  icon: "🧠",
                },
                {
                  title: "Get AI Recommendations",
                  description: "Receive personalized career path suggestions and skill development plans.",
                  icon: "🚀",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-lg border border-[#DDDDFB] bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5] text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#141414]">{item.title}</h3>
                  <p className="text-[#141414]/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#DDDDFB] bg-white py-8">
        <div className="container mx-auto px-4 text-center text-[#141414]/60">
          <p>© 2025 CareerCompass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

