"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "World Environment Day.",
    subtitle: "Every Day!",
    description: "Journey to Zero-Carbon Living",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    id: 2,
    title: "Smart Energy",
    subtitle: "Solutions",
    description: "Powering Tomorrow's World Today",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    id: 3,
    title: "Renewable Energy",
    subtitle: "Revolution",
    description: "Leading the Clean Energy Transition",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    id: 4,
    title: "Solar Innovation",
    subtitle: "Excellence",
    description: "Advanced Technology for Maximum Efficiency",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    id: 5,
    title: "Energy Storage",
    subtitle: "Solutions",
    description: "Power When You Need It Most",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    id: 6,
    title: "Sustainable Future",
    subtitle: "Today",
    description: "Building a Cleaner Tomorrow",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    id: 7,
    title: "Global Energy",
    subtitle: "Partnership",
    description: "Connecting Communities Worldwide",
    image: "/placeholder.svg?height=1080&width=1920",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden pt-14">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} ${slide.subtitle}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {slides[currentSlide].title}
            <br />
            {slides[currentSlide].subtitle}
          </h1>
          <div className="w-12 h-1 bg-emerald-500 mb-4"></div>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 font-light">{slides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full transition-colors text-sm font-semibold"
            >
              Discover Solutions
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 py-2 rounded-full transition-colors text-sm font-semibold"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentSlide ? "bg-emerald-500" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
