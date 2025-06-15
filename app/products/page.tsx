"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, Eye, X } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { featuredProducts } from "@/components/products-section"

const allProducts = [
  // Power Solutions - EV Charger
  {
    id: 101,
    category: "EV Charger",
    title: "EV Fast Charger 50kW",
    description: "High-speed electric vehicle charging station",
    image: "/placeholder.svg?height=200&width=250",
    features: ["50kW Fast Charging", "CCS & CHAdeMO", "Smart Payment"],
    price: "250000",
    originalPrice: "280000",
    availability: "IN STOCK",
    sku: "EV-CHARGER-50KW",
    href: "/products/ev-charger-50kw",
  },
  {
    id: 102,
    category: "EV Charger",
    title: "EV Home Charger 7kW",
    description: "Residential electric vehicle charging solution",
    image: "/placeholder.svg?height=200&width=250",
    features: ["7kW AC Charging", "WiFi Enabled", "Weather Resistant"],
    price: "45000",
    originalPrice: "52000",
    availability: "IN STOCK",
    sku: "EV-CHARGER-7KW",
    href: "/products/ev-charger-7kw",
  },
  // Power Solutions - MV AVR
  {
    id: 103,
    category: "MV AVR",
    title: "MV AVR 11kV",
    description: "Medium voltage automatic voltage regulator",
    image: "/placeholder.svg?height=200&width=250",
    features: ["11kV Rating", "Automatic Control", "High Reliability"],
    price: "150000",
    originalPrice: "175000",
    availability: "IN STOCK",
    sku: "MV-AVR-11KV",
    href: "/products/mv-avr-11kv",
  },
  // Aviation Obstruction Lights
  {
    id: 104,
    category: "LED Aviation Lights",
    title: "LED Red Aviation Light",
    description: "High-intensity LED aviation obstruction light",
    image: "/placeholder.svg?height=200&width=250",
    features: ["LED Technology", "Weather Resistant", "Low Power"],
    price: "15000",
    originalPrice: "18000",
    availability: "IN STOCK",
    sku: "LED-RED-AVIATION",
    href: "/products/led-red-aviation-light",
  },
  // Explosion-proof Equipment
  {
    id: 105,
    category: "Coupler",
    title: "Ex-proof Coupler 16A",
    description: "Explosion-proof electrical coupler",
    image: "/placeholder.svg?height=200&width=250",
    features: ["16A Rating", "Explosion Proof", "IP66 Protection"],
    price: "8500",
    originalPrice: "10000",
    availability: "IN STOCK",
    sku: "EX-COUPLER-16A",
    href: "/products/ex-proof-coupler-16a",
  },
  {
    id: 106,
    category: "Air Condition",
    title: "Ex-proof AC Unit 2 Ton",
    description: "Explosion-proof air conditioning unit",
    image: "/placeholder.svg?height=200&width=250",
    features: ["2 Ton Capacity", "Explosion Proof", "Energy Efficient"],
    price: "125000",
    originalPrice: "145000",
    availability: "IN STOCK",
    sku: "EX-AC-2TON",
    href: "/products/ex-proof-ac-2ton",
  },
  // Add existing products from featuredProducts
  ...featuredProducts.map((product) => ({
    ...product,
    category: "Residential Inverters", // Default category for existing products
  })),
]

const categories = [
  "All",
  "EV Charger",
  "MV AVR",
  "LED Aviation Lights",
  "Coupler",
  "Air Condition",
  "Distribution Box",
  "Exhaust Fan",
  "Lights",
  "Isolators",
  "Plug and Sockets",
  "Terminal Box",
  "Pipe Fittings",
  "Control Button Switch",
  "Residential Inverters",
  "Commercial Inverters",
  "Energy Storage",
  "Utility Products",
  "Batteries",
  "Solar Panels",
  "Monitoring Systems",
  "Accessories",
]

const categoryMapping: { [key: string]: string } = {
  "power-solutions": "All",
  "ev-charger": "EV Charger",
  "mv-avr": "MV AVR",
  "aviation-lights": "LED Aviation Lights",
  "led-aviation-lights": "LED Aviation Lights",
  "explosion-proof": "All",
  coupler: "Coupler",
  "air-condition": "Air Condition",
  "distribution-box": "Distribution Box",
  "exhaust-fan": "Exhaust Fan",
  lights: "Lights",
  isolators: "Isolators",
  "plug-sockets": "Plug and Sockets",
  "terminal-box": "Terminal Box",
  "pipe-fittings": "Pipe Fittings",
  "control-switch": "Control Button Switch",
  "residential-inverters": "Residential Inverters",
  "commercial-inverters": "Commercial Inverters",
  "energy-storage": "Energy Storage",
  "utility-products": "Utility Products",
  batteries: "Batteries",
  "solar-panels": "Solar Panels",
  monitoring: "Monitoring Systems",
  accessories: "Accessories",
}

interface ProductModalProps {
  product: (typeof allProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null

  const fullProduct = featuredProducts.find((p) => p.sku === product.sku) || product

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
            <span>• 10 YEARS OFFICIAL WARRANTY</span>
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

              {/* Fixed Size Thumbnail Images */}
              {fullProduct.gallery && fullProduct.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {fullProduct.gallery.map((img, index) => (
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
                <div className="text-primary-600 font-semibold mb-1 text-sm">• 10 YEARS OFFICIAL WARRANTY</div>
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

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categoryMapping[categoryParam]) {
      setSelectedCategory(categoryMapping[categoryParam])
    }
  }, [searchParams])

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const openModal = (product: (typeof allProducts)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <div className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Our Products</h1>
            <p className="text-base max-w-2xl mx-auto">
              High-quality solar inverters and energy storage solutions designed for reliability and efficiency
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-4 text-center text-gray-600 text-sm">
              {selectedCategory === "All"
                ? `Showing all ${filteredProducts.length} products`
                : `Showing ${filteredProducts.length} products in "${selectedCategory}"`}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={250}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-secondary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      -15%
                    </div>
                    <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
                    <ul className="space-y-1 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                        <span className="text-base font-bold text-primary-600 ml-2">{product.price}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => openModal(product, e)}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-full transition-colors text-xs flex items-center justify-center"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Quick View
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All")
                    setSearchTerm("")
                  }}
                  className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Show All Products
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
