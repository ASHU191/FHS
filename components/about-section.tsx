import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Leading Solar Innovation</h2>
            <p className="text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
              For over a decade, FHS Zoom has been at the forefront of solar energy innovation, providing reliable and
              efficient solutions that power homes and businesses worldwide.
            </p>
            <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8">
              Our commitment to quality and sustainability has made us a trusted partner for installers and customers in
              over 100 countries.
            </p>

            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-2">2M+</div>
                <div className="text-xs lg:text-sm text-gray-600">Inverters Installed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-2">100+</div>
                <div className="text-xs lg:text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-2">13</div>
                <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <a
              href="/about"
              className="inline-flex items-center bg-red-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-red-700 transition-colors text-sm lg:text-base"
            >
              Learn More About Us
            </a>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="FHS Zoom solar installation"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
