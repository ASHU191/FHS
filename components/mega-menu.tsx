"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Users, Globe, Award, TrendingUp, Shield } from "lucide-react"

interface MegaMenuProps {
  activeMenu: string
  onMouseEnter: () => void
  onMouseLeave: () => void
  parentRef: React.RefObject<HTMLDivElement>
}

const productCategories = [
  {
    name: "Power Solutions",
    href: "/products?category=power-solutions",
    icon: "⚡",
    subcategories: [
      {
        name: "EV Charger",
        href: "/products?category=ev-charger",
        products: [
          {
            name: "EV Fast Charger 50kW",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ev-charger-50kw",
            price: "2,50,000",
          },
          {
            name: "EV Home Charger 7kW",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ev-charger-7kw",
            price: "45,000",
          },
          {
            name: "EV Portable Charger",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ev-portable-charger",
            price: "25,000",
          },
        ],
      },
      {
        name: "MV AVR",
        href: "/products?category=mv-avr",
        products: [
          {
            name: "MV AVR 11kV",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/mv-avr-11kv",
            price: "1,50,000",
          },
          {
            name: "MV AVR 33kV",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/mv-avr-33kv",
            price: "2,80,000",
          },
          {
            name: "MV AVR Controller",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/mv-avr-controller",
            price: "85,000",
          },
        ],
      },
    ],
  },
  {
    name: "Aviation Obstruction Lights",
    href: "/products?category=aviation-lights",
    icon: "✈️",
    subcategories: [
      {
        name: "LED Aviation Lights",
        href: "/products?category=led-aviation-lights",
        products: [
          {
            name: "LED Red Aviation Light",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/led-red-aviation-light",
            price: "15,000",
          },
          {
            name: "LED White Strobe Light",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/led-white-strobe-light",
            price: "25,000",
          },
          {
            name: "Dual Aviation Light",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/dual-aviation-light",
            price: "35,000",
          },
        ],
      },
    ],
  },
  {
    name: "Explosion-proof Equipment",
    href: "/products?category=explosion-proof",
    icon: "🔥",
    subcategories: [
      {
        name: "Coupler",
        href: "/products?category=coupler",
        products: [
          {
            name: "Ex-proof Coupler 16A",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-coupler-16a",
            price: "8,500",
          },
          {
            name: "Ex-proof Coupler 32A",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-coupler-32a",
            price: "12,500",
          },
        ],
      },
      {
        name: "Air Condition",
        href: "/products?category=air-condition",
        products: [
          {
            name: "Ex-proof AC Unit 2 Ton",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-ac-2ton",
            price: "1,25,000",
          },
          {
            name: "Ex-proof AC Unit 5 Ton",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-ac-5ton",
            price: "2,85,000",
          },
        ],
      },
      {
        name: "Distribution Box",
        href: "/products?category=distribution-box",
        products: [
          {
            name: "Ex-proof Distribution Panel",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-distribution-panel",
            price: "45,000",
          },
          {
            name: "Ex-proof Junction Box",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-junction-box",
            price: "15,000",
          },
        ],
      },
      {
        name: "Exhaust Fan",
        href: "/products?category=exhaust-fan",
        products: [
          {
            name: 'Ex-proof Exhaust Fan 12"',
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-exhaust-fan-12",
            price: "25,000",
          },
          {
            name: 'Ex-proof Exhaust Fan 18"',
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-exhaust-fan-18",
            price: "35,000",
          },
        ],
      },
      {
        name: "Lights",
        href: "/products?category=lights",
        products: [
          {
            name: "Ex-proof LED Light 50W",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-led-light-50w",
            price: "8,500",
          },
          {
            name: "Ex-proof LED Light 100W",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-led-light-100w",
            price: "15,000",
          },
        ],
      },
      {
        name: "Isolators",
        href: "/products?category=isolators",
        products: [
          {
            name: "Ex-proof Isolator 32A",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-isolator-32a",
            price: "12,000",
          },
          {
            name: "Ex-proof Isolator 63A",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-isolator-63a",
            price: "18,000",
          },
        ],
      },
      {
        name: "Plug and Sockets",
        href: "/products?category=plug-sockets",
        products: [
          {
            name: "Ex-proof Plug 16A",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-plug-16a",
            price: "5,500",
          },
          {
            name: "Ex-proof Socket 32A",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-socket-32a",
            price: "7,500",
          },
        ],
      },
      {
        name: "Terminal Box",
        href: "/products?category=terminal-box",
        products: [
          {
            name: "Ex-proof Terminal Box Small",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-terminal-box-small",
            price: "8,000",
          },
          {
            name: "Ex-proof Terminal Box Large",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-terminal-box-large",
            price: "15,000",
          },
        ],
      },
      {
        name: "Pipe Fittings",
        href: "/products?category=pipe-fittings",
        products: [
          {
            name: "Ex-proof Conduit Fitting",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-conduit-fitting",
            price: "2,500",
          },
          {
            name: "Ex-proof Cable Gland",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-cable-gland",
            price: "1,800",
          },
        ],
      },
      {
        name: "Control Button Switch",
        href: "/products?category=control-switch",
        products: [
          {
            name: "Ex-proof Push Button",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-push-button",
            price: "4,500",
          },
          {
            name: "Ex-proof Emergency Stop",
            image: "/placeholder.svg?height=80&width=80",
            href: "/products/ex-proof-emergency-stop",
            price: "6,500",
          },
        ],
      },
    ],
  },
]

const aboutData = [
  {
    title: "Company Profile",
    description: "Learn about our mission and vision",
    href: "/about/company",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Milestones",
    description: "Our journey and achievements",
    href: "/about/milestones",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Global Presence",
    description: "Worldwide operations and offices",
    href: "/about/global",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Quality & Certificates",
    description: "Our commitment to quality",
    href: "/about/quality",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "CSR",
    description: "Corporate social responsibility",
    href: "/about/csr",
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

export default function MegaMenu({ activeMenu, onMouseEnter, onMouseLeave, parentRef }: MegaMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedSubcategory, setSelectedSubcategory] = useState(0)
  const categoryContainerRef = useRef<HTMLDivElement>(null)
  const productContainerRef = useRef<HTMLDivElement>(null)

  const scrollCategories = (direction: "up" | "down") => {
    if (!categoryContainerRef.current) return

    const container = categoryContainerRef.current
    const scrollAmount = 100

    if (direction === "up") {
      container.scrollTop -= scrollAmount
    } else {
      container.scrollTop += scrollAmount
    }
  }

  const scrollProducts = (direction: "left" | "right") => {
    if (!productContainerRef.current) return

    const container = productContainerRef.current
    const scrollAmount = 200

    if (direction === "left") {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
    }
  }

  const renderProducts = () => (
    <div className="grid grid-cols-12 gap-4">
      {/* Product Categories Column */}
      <div className="col-span-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900">Categories</h3>
          <div className="flex space-x-1">
            <button onClick={() => scrollCategories("up")} className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="h-3 w-3 rotate-90" />
            </button>
            <button onClick={() => scrollCategories("down")} className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="h-3 w-3 rotate-90" />
            </button>
          </div>
        </div>
        <div className="h-64 overflow-y-auto pr-2 scrollbar-thin" ref={categoryContainerRef}>
          <div className="space-y-2">
            {productCategories.map((category, index) => (
              <div key={category.name}>
                <button
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full flex items-center p-2 rounded-md transition-colors text-left text-sm font-semibold ${
                    selectedCategory === index
                      ? "bg-primary-50 text-primary-600 border border-primary-200"
                      : "hover:bg-gray-50 hover:text-primary-600"
                  }`}
                >
                  <span className="text-sm mr-2">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
                {selectedCategory === index && (
                  <div className="ml-6 mt-1 space-y-1">
                    {category.subcategories.map((sub, subIndex) => (
                      <button
                        key={sub.name}
                        onClick={() => setSelectedSubcategory(subIndex)}
                        className={`w-full text-left p-1 rounded text-xs transition-colors ${
                          selectedSubcategory === subIndex
                            ? "text-primary-600 bg-primary-25"
                            : "text-gray-600 hover:text-primary-600"
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-xs"
          >
            View All Products
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>

      {/* Products Column */}
      <div className="col-span-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900">
            {productCategories[selectedCategory]?.subcategories[selectedSubcategory]?.name || "Products"}
          </h3>
          <div className="flex items-center space-x-2">
            <Link
              href={productCategories[selectedCategory]?.subcategories[selectedSubcategory]?.href || "/products"}
              className="text-xs text-primary-600 hover:text-primary-700 font-medium"
            >
              View All →
            </Link>
            <div className="flex space-x-1">
              <button onClick={() => scrollProducts("left")} className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-3 w-3" />
              </button>
              <button onClick={() => scrollProducts("right")} className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto max-h-64" ref={productContainerRef}>
          <div className="grid grid-cols-3 gap-2 min-w-[600px]">
            {productCategories[selectedCategory]?.subcategories[selectedSubcategory]?.products.map((product, index) => (
              <Link key={index} href={product.href} className="group">
                <div className="bg-white rounded-md border hover:border-primary-200 transition-colors p-2">
                  <div className="aspect-square bg-gray-50 rounded-md mb-2 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xs font-medium text-neutral-900 group-hover:text-primary-600 transition-colors leading-tight mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs font-semibold text-primary-600">{product.price}</p>
                </div>
              </Link>
            )) || []}
          </div>
        </div>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="grid grid-cols-12 gap-6">
      {/* About Links */}
      <div className="col-span-5">
        <div className="flex items-center mb-4">
          <Link href="/about" className="flex items-center hover:text-primary-600 transition-colors">
            <h3 className="text-lg font-semibold text-neutral-900">About FHS Zoom</h3>
            <ArrowRight className="h-4 w-4 ml-2 text-neutral-600" />
          </Link>
        </div>
        <div className="space-y-2">
          {aboutData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-start group p-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center bg-primary-100 rounded-lg text-primary-600">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-1 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Company Highlights */}
      <div className="col-span-7">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 h-full">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-neutral-900">Leading Solar Innovation</h3>
          </div>

          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=120&width=300"
              alt="FHS Zoom Innovation"
              width={300}
              height={120}
              className="w-full h-24 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-neutral-600 leading-relaxed">
              For over a decade, FHS Zoom has been at the forefront of solar energy innovation, providing reliable and
              efficient solutions that power homes and businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-primary-600 mb-1">2M+</div>
              <div className="text-xs text-neutral-600">Inverters Installed</div>
            </div>
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-secondary-600 mb-1">100+</div>
              <div className="text-xs text-neutral-600">Countries</div>
            </div>
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-accent-600 mb-1">15</div>
              <div className="text-xs text-neutral-600">Years Experience</div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )

  const getMenuContent = () => {
    switch (activeMenu) {
      case "Products":
        return renderProducts()
      case "About FHS Zoom":
        return renderAbout()
      default:
        return null
    }
  }

  return (
    <div
      className="fixed top-14 left-0 right-0 bg-white shadow-xl border-t z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 py-6">{getMenuContent()}</div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  )
}
