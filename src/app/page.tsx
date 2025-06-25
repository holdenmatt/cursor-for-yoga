import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-6xl font-bold tracking-tight">ZenCursor</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl text-xl">
            Code your way to inner peace while building the perfect yoga
            business
          </p>
          <Button size="lg" className="rounded-full px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </Container>

      {/* Features Section */}
      <Container>
        <div className="py-24">
          <div className="text-center">
            <h2 className="mb-16 text-4xl font-bold">
              Built for Yoga Professionals
            </h2>

            <div className="grid gap-12 md:grid-cols-3">
              <div className="rounded-2xl bg-white/60 p-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-primary mb-4 text-2xl font-semibold">
                  Breathe-Driven Coding
                </h3>
                <p className="text-muted-foreground">
                  Code completion syncs with your breathing pattern for maximum
                  flow state
                </p>
              </div>

              <div className="rounded-2xl bg-white/60 p-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-primary mb-4 text-2xl font-semibold">
                  Chakra-Aligned Deployment
                </h3>
                <p className="text-muted-foreground">
                  Automatically schedules app releases based on lunar cycles and
                  energy alignment
                </p>
              </div>

              <div className="rounded-2xl bg-white/60 p-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-primary mb-4 text-2xl font-semibold">
                  Namaste-Based Error Handling
                </h3>
                <p className="text-muted-foreground">
                  All bugs are gently acknowledged with gratitude before being
                  peacefully resolved
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Pricing Section */}
      <Container>
        <div className="py-24">
          <div className="text-center">
            <h2 className="mb-16 text-4xl font-bold">Choose Your Path</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white/60 p-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-primary mb-2 text-2xl font-bold">
                  Inner Peace
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-3 text-left">
                  <li>• Basic breathe-driven coding</li>
                  <li>• 3 lunar deployments/month</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Start Free
                </Button>
              </div>

              <div className="relative rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
                <div className="bg-primary text-primary-foreground absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-primary mb-2 text-2xl font-bold">
                  Enlightenment
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-3 text-left">
                  <li>• Unlimited chakra deployments</li>
                  <li>• Advanced namaste error handling</li>
                  <li>• Priority meditation support</li>
                </ul>
                <Button className="w-full">Choose Enlightenment</Button>
              </div>

              <div className="rounded-2xl bg-white/60 p-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-primary mb-2 text-2xl font-bold">
                  Nirvana
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-3 text-left">
                  <li>• Multi-instructor dashboard</li>
                  <li>• Custom mantras & affirmations</li>
                  <li>• Dedicated spiritual tech support</li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Achieve Nirvana
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container>
        <div className="py-24">
          <div className="text-center">
            <h2 className="mb-8 text-4xl font-bold">Ready to build?</h2>
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Start Free Trial
            </Button>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="border-border/20 border-t py-8">
        <Container>
          <div className="text-muted-foreground text-center">
            © 2024 ZenCursor
          </div>
        </Container>
      </footer>
    </div>
  );
}
