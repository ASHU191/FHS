"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { featuredProducts } from "@/components/products-section"
import { ChevronRight } from "lucide-react"

const product = {
  id: 5,
  title: "GW10K-NS Residential Inverter",
  description: "10kW single-phase inverter for large homes",
  image: "/placeholder.svg?height=400&width=600",
  gallery: [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ],
  features: ["98.2% Efficiency", "Premium Monitoring", "10-Year Warranty", "Smart Grid Ready", "WiFi Built-in"],
  specifications: {
    power: "10kW",
    efficiency: "98.2%",
    warranty: "10 Years",
    monitoring: "WiFi Built-in",
    protection: "IP65",
    inputVoltage: "580-1000V",
    outputVoltage: "220/380V",
    frequency: "50/60Hz",
  },
  price: "1,15,999",
  originalPrice: "1,25,999",
  availability: "IN STOCK",
  sku: "GW10K-NS",
  href: "/products/gw10k-ns",
}

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("description")
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

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
            <Link href="/products" className="hover:text-red-600">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
              <div
                className="mb-4 border rounded-lg overflow-hidden relative cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className={`object-cover transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
                    style={{
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 lg:gap-4">
                {product.gallery.map((img, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h1>
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="text-gray-400 line-through text-base lg:text-lg mr-4">{product.originalPrice}</div>
                <div className="text-2xl lg:text-3xl font-bold text-red-600">{product.price}</div>
              </div>

              <div className="mb-4 lg:mb-6">
                <div className="text-blue-600 font-semibold mb-1 text-sm lg:text-base">
                  • 10 YEARS OFFICIAL WARRANTY
                </div>
                <div className="text-blue-600 font-semibold text-sm lg:text-base">• FREE INSTALLATION</div>
              </div>

              <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">{product.description}</p>

              <div className="mb-4 lg:mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm lg:text-base">Availability:</span>
                  <span className="text-green-600 font-semibold text-sm lg:text-base">{product.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm lg:text-base">SKU:</span>
                  <span className="text-sm lg:text-base">{product.sku}</span>
                </div>
              </div>

              <div className="mb-4 lg:mb-6">
                <h3 className="font-semibold mb-3 text-base lg:text-lg">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      <span className="text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4 lg:pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-red-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:bg-red-700 transition-colors text-sm lg:text-base"
                >
                  Contact for Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-300 mb-6 lg:mb-8">
            <div className="flex overflow-x-auto">
              <button
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base ${
                  activeTab === "description"
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-600 hover:text-red-600"
                }`}
                onClick={() => setActiveTab("description")}
              >
                DESCRIPTION
              </button>
              <button
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base ${
                  activeTab === "specification"
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-600 hover:text-red-600"
                }`}
                onClick={() => setActiveTab("specification")}
              >
                SPECIFICATION
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="pb-6 lg:pb-8">
            {activeTab === "description" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">{product.title}</h2>
                <p className="mb-4 lg:mb-6 text-sm lg:text-base">
                  The {product.title} is designed to provide maximum efficiency and reliability for your solar energy
                  system. With advanced technology and robust construction, it ensures optimal performance in all
                  conditions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                  <div>
                    <p className="mb-4 text-sm lg:text-base">
                      This high-performance 10kW inverter features state-of-the-art technology that maximizes energy
                      harvest and provides reliable operation year after year. The intuitive interface makes monitoring
                      and control simple, while the robust design ensures durability in all weather conditions.
                    </p>
                    <p className="text-sm lg:text-base">
                      With built-in smart features, the system optimizes energy flow and provides detailed performance
                      analytics accessible through our mobile app or web portal. Regular firmware updates ensure your
                      system always has the latest features and security enhancements.
                    </p>
                  </div>
                  <div>
                    <Image
                      src={product.gallery[0] || product.image}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3">Key Benefits</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-sm lg:text-base">
                  <li>High efficiency conversion for maximum energy harvest</li>
                  <li>Robust design for reliable operation in all conditions</li>
                  <li>Comprehensive monitoring and control capabilities</li>
                  <li>Easy installation and maintenance</li>
                  <li>Industry-leading warranty coverage</li>
                </ul>
              </div>
            )}

            {activeTab === "specification" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Technical Specifications</h2>

                <div className="mb-6 lg:mb-8">
                  <h3 className="text-base lg:text-lg font-bold mb-4">General Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="text-gray-700 capitalize text-sm lg:text-base">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </span>
                        <span className="font-semibold text-sm lg:text-base">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={relatedProduct.href} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.title}
                        width={300}
                        height={200}
                        className="w-full h-36 lg:h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                        -15%
                      </div>
                    </div>
                    <div className="p-3 lg:p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-red-600 transition-colors line-clamp-1 text-sm lg:text-base">
                        {relatedProduct.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-400 line-through text-xs lg:text-sm">
                            {relatedProduct.originalPrice}
                          </span>
                          <span className="text-red-600 font-bold ml-2 text-sm lg:text-base">
                            {relatedProduct.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
