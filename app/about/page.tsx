import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Globe, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">About FHS Zoom</h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8">
                Leading the future of renewable energy with innovative solar solutions for a sustainable tomorrow.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-2xl lg:text-3xl font-bold">2M+</div>
                  <div className="text-sm text-white/80">Inverters Installed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-2xl lg:text-3xl font-bold">100+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-2xl lg:text-3xl font-bold">13</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="FHS Zoom Company"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                Founded in 2010, FHS Zoom has been at the forefront of the renewable energy revolution. What started as
                a vision to make clean energy accessible to everyone has grown into a global mission that spans over 100
                countries.
              </p>
              <p className="text-gray-600 mb-6 text-sm lg:text-base">
                Our commitment to innovation, quality, and sustainability has made us a trusted partner for homeowners,
                businesses, and utilities worldwide. We believe that the future of energy is clean, smart, and
                accessible to all.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-sm lg:text-base">Industry-leading efficiency and reliability</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-sm lg:text-base">Comprehensive warranty and support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-sm lg:text-base">Sustainable manufacturing practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to a sustainable future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">
                We put our customers at the center of everything we do, ensuring their success is our success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Environmental responsibility is at the core of our business and product development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Continuous innovation drives us to develop cutting-edge solutions for tomorrow's challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We conduct business with honesty, transparency, and respect for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our company and the renewable energy industry.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

              <div className="space-y-8">
                {[
                  {
                    year: "2010",
                    title: "Company Founded",
                    desc: "FHS Zoom was established with a vision to democratize solar energy",
                  },
                  {
                    year: "2012",
                    title: "First Product Launch",
                    desc: "Launched our first residential solar inverter series",
                  },
                  {
                    year: "2015",
                    title: "Global Expansion",
                    desc: "Expanded operations to Europe, Australia, and Southeast Asia",
                  },
                  {
                    year: "2018",
                    title: "Energy Storage Revolution",
                    desc: "Introduced our groundbreaking energy storage solutions",
                  },
                  {
                    year: "2020",
                    title: "Smart Energy Platform",
                    desc: "Launched comprehensive smart energy management platform",
                  },
                  { year: "2023", title: "2M Milestone", desc: "Reached 2 million inverters installed globally" },
                ].map((milestone, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-6 text-sm relative z-10">
                      {milestone.year}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of the renewable energy revolution and help us create a sustainable future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-full transition-colors font-semibold"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
