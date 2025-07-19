import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Code,
  Github,
  Play,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/components/design/ToggleDarkMode";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Navigation */}
      <nav className="border-b justify-center items-center border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src={"/logo.png"}
                  alt="InsightMetrics Logo"
                  width={120}
                  height={120}
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  TrackMint
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#features"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Docs
                </Link>
                {/* <ModeToggle/> */}
                <SignedOut>
                  <Button variant="primary" asChild>
                    <SignInButton mode="modal" />
                  </Button>
                  <Button className="bg-indigo-500" asChild>
                    <SignUpButton mode="modal" />
                  </Button>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  Analytics Made Simple
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-bold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">
                    Real-time insights
                  </span>
                  <span className="block text-indigo-600">for your apps</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Track custom events, monitor user behavior, and get actionable
                insights with our plug-and-play analytics platform. Perfect for
                developers, startups, and product managers.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="primary" className="bg-indigo-600 text-white rounded-2xl cursor-pointer" asChild>
                      <SignUpButton mode="modal">
                        Start Free Trial
                      </SignUpButton>
                    </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#demo">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/dashboard.png"
                    alt="InsightMetrics Dashboard"
                    width={700}
                    height={200}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to understand your users
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Powerful analytics tools that grow with your business, from
              startup to enterprise.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-indigo-600" />
                  <CardTitle className="text-lg">Real-Time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track events as they happen with sub-second latency. See
                    user actions in real-time.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                  <CardTitle className="text-lg">Custom Dashboards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Build beautiful dashboards with drag-and-drop widgets.
                    Visualize your data your way.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Bell className="h-8 w-8 text-indigo-600" />
                  <CardTitle className="text-lg">Smart Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get notified when metrics cross thresholds. Never miss
                    important changes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-indigo-600" />
                  <CardTitle className="text-lg">Easy Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Simple APIs and SDKs for all major languages. Get started in
                    minutes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Trusted by developers worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              See what our customers are saying about InsightMetrics
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;InsightMetrics helped us understand our user behavior
                  better than any other tool. The real-time insights are
                  game-changing.&quot;
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">JS</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      John Smith
                    </p>
                    <p className="text-sm text-gray-500">CTO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;The API is incredibly easy to use. We had our analytics
                  up and running in less than 30 minutes.&quot;
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-medium">MJ</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Maria Johnson
                    </p>
                    <p className="text-sm text-gray-500">
                      Lead Developer, StartupXYZ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Finally, an analytics platform that doesn&apos;t break
                  the bank. Perfect for our growing startup.&quot;
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">AD</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Alex Davis
                    </p>
                    <p className="text-sm text-gray-500">
                      Product Manager, InnovateLab
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600">
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of developers who trust InsightMetrics for their
            analytics needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                      <SignUpButton mode="modal">
                        Start Free Trial
                      </SignUpButton>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-indigo-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-500">
              Privacy
            </Link>
            <Link href="/docs" className="text-gray-400 hover:text-gray-500">
              Docs
            </Link>
            <Link href="/support" className="text-gray-400 hover:text-gray-500">
              Support
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-gray-500">
              Contact
            </Link>
            <Link
              href="https://github.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <div className="flex items-center justify-center md:justify-start">
                              <Image
                  src={"/logo.png"}
                  alt="InsightMetrics Logo"
                  width={120}
                  height={120}
                  className="h-8 w-8 rounded-full"
                />
              <span className="ml-2 text-base font-medium text-gray-900">
                TrackMint
              </span>
            </div>
            <p className="mt-2 text-center text-xs text-gray-400 md:text-left">
              &copy; 2024 TrackMint. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
