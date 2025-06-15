import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home, Zap, Shield, Smartphone } from "lucide-react"

export default function ResidentialSolutionsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/solutions" className="hover:text-red-600">
              Solutions
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">Residential Solutions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 mr-3" />
                <span className="text-lg font-semibold">Residential Solutions</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Bringing Solar Energy Into Every Home</h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8">
                Transform your home into a clean energy powerhouse with our comprehensive residential solar solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Started Today
              </Link>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Residential Solar Installation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Complete Home Energy Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Grid-tied Inverters</h3>
              <p className="text-gray-600 text-sm">
                High-efficiency inverters that seamlessly connect your solar panels to the grid
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Energy Storage</h3>
              <p className="text-gray-600 text-sm">Store excess energy for use during peak hours or power outages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Monitoring</h3>
              <p className="text-gray-600 text-sm">Real-time monitoring and control through our mobile app</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Installation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation with minimal disruption to your daily life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Why Choose Our Residential Solutions?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-semibold">Reduce Energy Bills</h4>
                    <p className="text-gray-600 text-sm">Save up to 90% on your monthly electricity costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-semibold">Increase Home Value</h4>
                    <p className="text-gray-600 text-sm">Solar installations can increase property value by up to 4%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-semibold">Environmental Impact</h4>
                    <p className="text-gray-600 text-sm">
                      Reduce your carbon footprint and contribute to a cleaner planet
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-semibold">Energy Independence</h4>
                    <p className="text-gray-600 text-sm">Generate your own clean energy and reduce grid dependence</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Solar Benefits"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Residential Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "GW3000-NS Residential Inverter",
                power: "3kW",
                efficiency: "97.6%",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "GW5000-NS Residential Inverter",
                power: "5kW",
                efficiency: "97.8%",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Lynx Home F Energy Storage",
                power: "5kWh",
                efficiency: "95%",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Power: {product.power}</span>
                    <span>Efficiency: {product.efficiency}</span>
                  </div>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-lg mb-6 lg:mb-8">
            Join thousands of homeowners who have made the switch to clean, renewable energy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
