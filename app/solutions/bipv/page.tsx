import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Building2, Palette, Layers, Wrench } from "lucide-react"

export default function BIPVPage() {
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
            <span className="text-gray-900 font-medium">BIPV Solution</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 mr-3" />
                <span className="text-lg font-semibold">BIPV Solution</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Solarise Every Building</h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8">
                Building-integrated photovoltaics that combine architecture with solar energy generation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Explore BIPV Options
              </Link>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BIPV Building Integration"
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
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">
            Building-Integrated Photovoltaic Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrated Design</h3>
              <p className="text-gray-600 text-sm">Seamlessly integrated into building materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aesthetic Appeal</h3>
              <p className="text-gray-600 text-sm">Beautiful designs that enhance building architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dual Functionality</h3>
              <p className="text-gray-600 text-sm">Building material and energy generator in one</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">Tailored designs for specific architectural needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">BIPV Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Solar Facades",
                description: "Transform building walls into energy generators",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Solar Windows",
                description: "Transparent solar cells integrated into windows",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Solar Roofing",
                description: "Roof tiles that generate electricity",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((application, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={application.image || "/placeholder.svg"}
                  alt={application.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{application.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{application.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
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
