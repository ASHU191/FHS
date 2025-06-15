import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Zap, Grid3x3, Monitor, Shield } from "lucide-react"

export default function UtilityPVPage() {
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
            <span className="text-gray-900 font-medium">Utility PV Solutions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 mr-3" />
                <span className="text-lg font-semibold">Utility PV Solutions</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Reshaping Smart Energy</h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8">
                Large-scale solar power plants and grid-connected renewable energy systems for utilities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-yellow-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Discuss Your Project
              </Link>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Utility Scale Solar Farm"
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
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Utility-Scale Solar Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Utility Inverters</h3>
              <p className="text-gray-600 text-sm">MW-scale inverters for large solar installations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid3x3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Grid Integration</h3>
              <p className="text-gray-600 text-sm">Seamless connection to electrical grid infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">SCADA Systems</h3>
              <p className="text-gray-600 text-sm">Advanced monitoring and control systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Monitoring</h3>
              <p className="text-gray-600 text-sm">Real-time performance tracking and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Utility Scale Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                name: "GW1000K-HV Utility Inverter",
                power: "1MW",
                efficiency: "99.0%",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                name: "GW2500K-HV Utility Inverter",
                power: "2.5MW",
                efficiency: "99.1%",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
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
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
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
