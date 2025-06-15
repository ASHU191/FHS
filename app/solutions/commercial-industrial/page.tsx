import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Building, TrendingUp, Settings, BarChart } from "lucide-react"

export default function CommercialIndustrialPage() {
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
            <span className="text-gray-900 font-medium">Commercial & Industrial Solutions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 mr-3" />
                <span className="text-lg font-semibold">Commercial & Industrial Solutions</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Boost Your Power & Profit</h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8">
                Scalable solar solutions designed to reduce operational costs and meet sustainability goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Business Quote
              </Link>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Commercial Solar Installation"
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
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Enterprise-Grade Solar Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">High Power Systems</h3>
              <p className="text-gray-600 text-sm">Scalable systems from 25kW to multi-MW installations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Energy Management</h3>
              <p className="text-gray-600 text-sm">Advanced control systems for optimal energy usage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cost Optimization</h3>
              <p className="text-gray-600 text-sm">Reduce operational costs by up to 70%</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Remote Monitoring</h3>
              <p className="text-gray-600 text-sm">Real-time performance tracking and analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Commercial & Industrial Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "GW25K-MT Commercial Inverter",
                power: "25kW",
                efficiency: "98.4%",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "GW50K-MT Commercial Inverter",
                power: "50kW",
                efficiency: "98.5%",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "GW100K-MT Commercial Inverter",
                power: "100kW",
                efficiency: "98.7%",
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
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
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
