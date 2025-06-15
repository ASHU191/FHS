"use client"
import Image from "next/image"
import Link from "next/link"

const solutions = [
  {
    title: "Residential Solutions",
    description: "Complete solar energy systems designed for homes, bringing clean energy to every household.",
    image: "/placeholder.svg?height=150&width=250",
    href: "/solutions/residential",
  },
  {
    title: "Commercial & Industrial",
    description: "Scalable solar solutions for businesses to reduce energy costs and carbon footprint.",
    image: "/placeholder.svg?height=150&width=250",
    href: "/solutions/commercial-industrial",
  },
  {
    title: "Energy Storage",
    description: "Advanced battery storage systems for energy independence and grid stability.",
    image: "/placeholder.svg?height=150&width=250",
    href: "/solutions/energy-storage",
  },
  {
    title: "Utility Scale",
    description: "Large-scale solar power plants and grid-connected renewable energy systems.",
    image: "/placeholder.svg?height=150&width=250",
    href: "/solutions/utility-pv",
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">POWER SOLUTIONS</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions tailored for residential, commercial, and utility applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  width={250}
                  height={150}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 text-sm">{solution.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/solutions"
            className="inline-flex items-center bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors text-sm"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
