import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="FHS Zoom Logo"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm lg:text-base mb-4">
              Leading the future of renewable energy with innovative solar solutions for a sustainable tomorrow.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-red-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">About FHS Zoom</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/about/milestones" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Milestones
                </Link>
              </li>
              <li>
                <Link
                  href="/about/global-presence"
                  className="hover:text-red-400 transition-colors text-sm lg:text-base"
                >
                  Global Presence
                </Link>
              </li>
              <li>
                <Link href="/about/quality" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Quality & Certificates
                </Link>
              </li>
              <li>
                <Link href="/about/csr" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  CSR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/residential"
                  className="hover:text-red-400 transition-colors text-sm lg:text-base"
                >
                  Residential Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/commercial" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Commercial Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/products/energy-storage"
                  className="hover:text-red-400 transition-colors text-sm lg:text-base"
                >
                  Energy Storage
                </Link>
              </li>
              <li>
                <Link href="/products/smart-home" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products/accessories"
                  className="hover:text-red-400 transition-colors text-sm lg:text-base"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact/sales" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="/contact/service" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/contact/media" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact/careers" className="hover:text-red-400 transition-colors text-sm lg:text-base">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} FHS Zoom. All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
