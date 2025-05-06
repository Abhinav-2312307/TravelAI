import Link from "next/link"
import { ArrowRight, Globe, Headphones, CreditCard, MapPin } from "lucide-react"
import ChatInterface from "@/components/chat-interface"

export default function Home() {
  // The rest of the component remains the same
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-primary" />
            <span>TravelAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#destinations" className="text-muted-foreground hover:text-foreground transition-colors">
              Destinations
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Book Your Perfect Trip with <span className="text-primary">AI Assistance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Plan and book your entire trip through a simple conversation. Our AI assistant helps you find flights,
            hotels, and activities tailored to your preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#chat"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Start Planning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              How It Works
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.jpg?height=500&width=500"
              alt="Travel destinations collage"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/50 py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose TravelAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
              <p className="text-muted-foreground">
                Communicate in your preferred language. Our AI understands and responds in multiple languages including
                English and Hindi.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Voice & Text Input</h3>
              <p className="text-muted-foreground">
                Speak or type your travel plans. Our AI assistant understands both voice and text inputs for a seamless
                experience.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Complete your entire booking process including secure payments, all within the chat interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Destinations</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Discover amazing places to visit. Just ask our AI assistant about any of these destinations to get started.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Manali", "Goa", "Shimla", "Kanpur", "Rajasthan", "Andaman"].map((destination, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={`/${destination}.jpeg?height=300&width=500&text=${destination}`}
                    alt={destination}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{destination}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">India</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-muted/50 py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Start a Conversation",
                description: "Begin by telling our AI what you're looking for - flights, hotels, or complete packages.",
              },
              {
                step: "2",
                title: "Get Personalized Options",
                description: "Our AI will ask questions to understand your preferences and show you the best options.",
              },
              {
                step: "3",
                title: "Make Your Selection",
                description: "Choose from the options presented and provide your booking details.",
              },
              {
                step: "4",
                title: "Secure Payment & Confirmation",
                description: "Complete payment securely within the chat and receive instant confirmation.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 shadow-md h-full">
                  <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section id="chat" className="py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Try Our AI Travel Assistant</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Ask about flights, hotels, or activities. Our AI will help you plan and book your perfect trip.
          </p>
          <div className="max-w-3xl mx-auto">
            <ChatInterface />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/40 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-xl mb-4 md:mb-0">
              <Globe className="h-6 w-6 text-primary" />
              <span>TravelAI</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TravelAI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
