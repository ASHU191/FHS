"use client"
import { useState, useRef } from "react"
import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { X, Eye, ChevronLeft, ChevronRight } from "lucide-react"

export const featuredProducts = [
  // Residential Inverters (5 products)
  {
    id: 1,
    title: "GW3000-NS Residential Inverter",
    description: "High-efficiency single-phase inverter for home solar systems",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
    features: ["97.6% Efficiency", "WiFi Monitoring", "10-Year Warranty"],
    specifications: {
      power: "3kW",
      efficiency: "97.6%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "45,999",
    originalPrice: "52,999",
    availability: "IN STOCK",
    sku: "GW3000-NS",
    href: "/products/gw3000-ns",
  },
  {
    id: 2,
    title: "GW5000-NS Residential Inverter",
    description: "5kW single-phase inverter with advanced monitoring",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["97.8% Efficiency", "Smart Monitoring", "10-Year Warranty"],
    specifications: {
      power: "5kW",
      efficiency: "97.8%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "65,999",
    originalPrice: "75,999",
    availability: "IN STOCK",
    sku: "GW5000-NS",
    href: "/products/gw5000-ns",
  },
  {
    id: 3,
    title: "GW6000-NS Residential Inverter",
    description: "6kW single-phase inverter with premium features",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["97.8% Efficiency", "Premium Monitoring", "10-Year Warranty"],
    specifications: {
      power: "6kW",
      efficiency: "97.8%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "75,999",
    originalPrice: "85,999",
    availability: "IN STOCK",
    sku: "GW6000-NS",
    href: "/products/gw6000-ns",
  },
  {
    id: 4,
    title: "GW8000-NS Residential Inverter",
    description: "8kW single-phase inverter for larger homes",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["98.0% Efficiency", "Advanced Monitoring", "10-Year Warranty"],
    specifications: {
      power: "8kW",
      efficiency: "98.0%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "95,999",
    originalPrice: "1,05,999",
    availability: "IN STOCK",
    sku: "GW8000-NS",
    href: "/products/gw8000-ns",
  },
  {
    id: 5,
    title: "GW10K-NS Residential Inverter",
    description: "10kW single-phase inverter for large homes",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["98.2% Efficiency", "Premium Monitoring", "10-Year Warranty"],
    specifications: {
      power: "10kW",
      efficiency: "98.2%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "1,15,999",
    originalPrice: "1,25,999",
    availability: "IN STOCK",
    sku: "GW10K-NS",
    href: "/products/gw10k-ns",
  },
  {
    id: 6,
    title: "GW25K-MT Commercial Inverter",
    description: "25kW three-phase inverter for commercial installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
    features: ["98.4% Efficiency", "Remote Monitoring", "5-Year Warranty"],
    specifications: {
      power: "25kW",
      efficiency: "98.4%",
      warranty: "5 Years",
      monitoring: "4G/WiFi/Ethernet",
      protection: "IP65",
    },
    price: "2,15,999",
    originalPrice: "2,45,999",
    availability: "IN STOCK",
    sku: "GW25K-MT",
    href: "/products/gw25k-mt",
  },
]

interface ProductModalProps {
  product: (typeof featuredProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Top Banner */}
          <div className="bg-primary-500 text-white py-2 px-6 flex justify-between items-center text-sm">
            <span>• {product.specifications.warranty || "10 YEARS"} OFFICIAL WARRANTY</span>
            <span>• FREE SHIPPING</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Left Side - Product Images */}
            <div>
              <div className="relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-secondary-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -15%
                </div>
              </div>

              {/* Dynamic Thumbnail Images */}
              {product.gallery && product.gallery.length > 0 && (
                <div
                  className={`grid gap-2 ${
                    product.gallery.length === 1
                      ? "grid-cols-1"
                      : product.gallery.length === 2
                        ? "grid-cols-2"
                        : product.gallery.length === 3
                          ? "grid-cols-3"
                          : "grid-cols-4"
                  }`}
                >
                  {product.gallery.map((img, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${product.title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-16 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Product Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-neutral-800">{product.title}</h2>

              {/* Warranty & Shipping Info */}
              <div className="mb-4">
                <div className="text-primary-600 font-semibold mb-1 text-sm">
                  • {product.specifications.warranty || "10 YEARS"} OFFICIAL WARRANTY
                </div>
                <div className="text-primary-600 font-semibold text-sm">• FREE SHIPPING</div>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability & SKU */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">AVAILABILITY:</span>
                  <span className="text-primary-600 font-semibold text-sm">{product.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">SKU:</span>
                  <span className="text-sm font-medium">{product.sku}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 line-through text-lg">{product.originalPrice}</span>
                  <span className="text-3xl font-bold text-primary-600">{product.price}</span>
                </div>
                <p className="text-accent-600 font-semibold text-sm mt-1">Only 13 left in stock - order soon.</p>
              </div>

              {/* View Full Details Button */}
              <Link
                href={product.href}
                onClick={onClose}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors font-semibold text-center block"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof featuredProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const openModal = (product: (typeof featuredProducts)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="py-10 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-neutral-800">Featured Products</h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Discover our range of high-quality solar inverters and energy storage solutions
            </p>
          </div>

          {/* Product Slider */}
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featuredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="flex-none w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={320}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-secondary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      -15%
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-neutral-600 mb-3 text-sm">{product.description}</p>
                    <ul className="space-y-1 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-gray-400 line-through text-xs">{product.originalPrice}</span>
                        <span className="text-base font-bold text-primary-600 ml-2">{product.price}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => openModal(product, e)}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-full transition-colors text-xs text-center cursor-pointer flex items-center justify-center"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Quick View
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center bg-neutral-800 hover:bg-neutral-900 text-white px-5 py-2 rounded-full transition-colors text-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}
