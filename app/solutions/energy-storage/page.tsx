import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Battery, Zap, Shield, Clock } from "lucide-react"

export default function EnergyStoragePage() {
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
            <span className="text-gray-900 font-medium">Energy Storage Solutions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Battery className="h-8 w-8 mr-3" />
                <span className="text-lg font-semibold">Energy Storage Solutions</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Power Whenever You Need</h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8">
                Store solar energy for use anytime with our advanced battery storage systems.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Explore Storage Options
              </Link>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Energy Storage System"
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
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Advanced Energy Storage Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Battery Systems</h3>
              <p className="text-gray-600 text-sm">High-capacity lithium batteries with long lifespan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Hybrid Inverters</h3>
              <p className="text-gray-600 text-sm">Seamless integration between solar and storage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Control</h3>
              <p className="text-gray-600 text-sm">Intelligent energy management and optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Long Lifespan</h3>
              <p className="text-gray-600 text-sm">15+ years of reliable energy storage performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Energy Storage Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Lynx Home F Energy Storage",
                capacity: "5kWh",
                warranty: "15 Years",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Lynx Home U Energy Storage",
                capacity: "10kWh",
                warranty: "15 Years",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Lynx Commercial Energy Storage",
                capacity: "50kWh",
                warranty: "10 Years",
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
                    <span>Capacity: {product.capacity}</span>
                    <span>Warranty: {product.warranty}</span>
                  </div>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
