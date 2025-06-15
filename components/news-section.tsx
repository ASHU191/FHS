import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    title: "GoodWe Launches Revolutionary Energy Storage System",
    date: "December 15, 2023",
    excerpt: "New Lynx Home series offers unprecedented efficiency and reliability for residential applications.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/community/news/energy-storage-launch",
  },
  {
    title: "Partnership with Leading Solar Installers",
    date: "December 10, 2023",
    excerpt: "Expanding our network to better serve customers across North America and Europe.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/community/news/installer-partnership",
  },
  {
    title: "Innovation Award at Solar Power International",
    date: "December 5, 2023",
    excerpt: "Recognition for breakthrough inverter technology and smart energy management solutions.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/community/news/innovation-award",
  },
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-xl text-gray-600">Stay updated with our latest developments and industry insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/community"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}
