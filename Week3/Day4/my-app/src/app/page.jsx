import Image from "next/image";

export const metadata = {
  title: "Day 4 – Responsive Landing Page",
  description:
    "A clean and responsive SaaS landing page with hero, features, testimonials and footer.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Powerful Admin Dashboard for Modern Businesses
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your data, track performance, and grow faster with a modern,
            responsive dashboard UI.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="https://assets.startbootstrap.com/img/meta/products/twitter/twitter-image-sb-admin.png"
            alt="Dashboard Image"
            width={650}
            height={450}
            className="rounded-xl shadow-lg w-full"
            priority
          />
        </div>
      </section>

      {/* ---------------- FEATURES GRID ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gray-100 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
            <p className="text-gray-600">
              Track your key metrics with live data and modern UI components.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
            <p className="text-gray-600">
              The layout adapts seamlessly to mobile, tablet, and desktop.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Fast & Optimized</h3>
            <p className="text-gray-600">
              Next.js Image Optimization ensures lightning-fast loading.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 mb-4">
              “Super clean UI and extremely easy to use. Made my workflow so
              much faster!”
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt="User"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">Amit Verma</h4>
                <p className="text-gray-500 text-sm">UI Designer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 mb-4">
              “The performance and layout are just perfect. Great job!”
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">Neha Singh</h4>
                <p className="text-gray-500 text-sm">Full-Stack Developer</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Dashboard Landing Page — All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

