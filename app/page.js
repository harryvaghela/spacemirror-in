import Image from "next/image";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SpaceMirror - Premium LED Mirrors",
  description: "Luxury LED mirrors for homes, hotels, salons and modern interiors",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient=to=b from-zinc-950 via-black to zinc-900">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute top-20 right-10 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[140px]" />
  <div className="absolute bottom-20 left-10 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[120px]" />
</div>

      {/* HERO */}
      <section 
      id="home"className="max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center gap-16 px-6 py-20">

        <div>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
  Transform Your Space with
  <br />
  <span className="text-amber-400">Premium LED Mirrors</span>
</h1>

<p className="mt-6 max-w-xl text-lg text-gray-300 leading-8">
  Discover handcrafted LED mirrors designed to bring elegance, modern lighting,
  and luxury to every home, hotel, salon, and interior.
</p>
          <div className="mt-10 flex gap-4">
           <a
           href="#collection"
            className="rounded-xl bg-amber-400 px-8 py-3 font-semibold text-black hover:bg-amber-300 transition"
          >
            Explore Collection
           </a>
            <a
              href="https://wa.me/919601961414"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition"
            >
              WhatsApp Order
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/hero-mirror.png"
            alt="SpaceMirror Hero"
            width={1200}
            height={800}
            priority
            className="float-mirror w-full max-w-xl rounded-3xl shadow-[0_20px_80px_rgba(251,191,36,0.25)]"
          />
        </div>

      </section>
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-4 py-16 text-center lg:text-left"></section>

      {/* FEATURED */}
      <section id="collection" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="text-amber-400 uppercase tracking-[5px] font-semibold">
            Our Collection
          </p>
          <h2 className="mt-4 text-5xl font-bold text-white">
            Featured Mirrors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {[
            { id: "oval", link: "Oval LED Mirror" },
            { id: "round", link: "Round LED Mirror" },
            { id: "square", link: "Square LED Mirror" },
            { id: "unique", link: "Unique LED Mirror" },
            { id: "capsule", link: "Capsule LED Mirror" }
          ].map((item) => (
            <a
  key={item.id}
  href={`#${item.id}`}
  className="group block rounded-3xl bg-zinc-900/70 backdrop-blur-sm p-7 border border-zinc-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500"
>
  <div className="flex items-center justify-between">
    <h3 className="text-white text-2xl font-semibold">
      {item.link}
    </h3>

    <span className="text-amber-400 text-2xl transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </div>

  <div className="mt-4 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
    Custom Size Available
  </div>

  <p className="mt-4 text-gray-400 leading-7">
    Crafted with premium materials and made to your required dimensions.
  </p>
            </a>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section 
      id="about"className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-amber-400 uppercase tracking-[5px] font-semibold">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Why SpaceMirror?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {[
  {
    id: "manufacturer",
    title: "Direct Manufacturer",
    desc: "Manufactured in Ahmedabad with complete quality control and premium craftsmanship."
  },
  {
    id: "custom-size",
    title: "100% Custom Sizes",
    desc: "Every mirror is built to your exact dimensions for a perfect fit."
  },
  {
    id: "premium-material",
    title: "Premium Materials",
    desc: "High-quality mirror glass, LED components, and luxury finishing."
  },
  {
    id: "trusted",
    title: "Trusted by Professionals",
    desc: "Preferred by homeowners, interior designers, salons, hotels, and architects."
  }
].map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-gray-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">
          <p className="text-amber-400 uppercase tracking-[5px] font-semibold">
            Best Sellers
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Most Popular Mirrors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {[
            {
              id: "oval",
              link : "Oval LED Mirror",
              img: "/images/oval.png",
              desc: "Front LED • Touch Sensor • Anti-fog"
            },
            {
              id: "capsule",
              link: "Capsule LED Mirror",
              img: "/images/capsule.png",
              desc: "Minimal design • Soft lighting"
            },
            {
              id: "square",
              link: "Square LED Mirror",
              img: "/images/Square.png",
              desc: "Premium square frame • Hotel style",
            },
            {
              id: "round",
              link: "Round LED Mirror",
              img: "/images/round.png",
              desc: "Soft Light • Modern design"
            },
            {
              id: "unique",
              link: "Unique Mirror",
              img: "/images/unique.png",
              desc: "Unique design • Modern lighting"
            }
          
          ].map((p) => (
           <div
  id={p.id}
  key={p.id}
  className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)]"
>
           {/* Product Image */} 
         <div className="h-80 flex items-center justify-center bg-gradient-to-b from-zinc-950 to-black p-6">
    <Image
      src={p.img}
      alt={p.link}
      width={450}
      height={450}
      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
    />
         </div>

  {/* Product Details */}
  <div className="p-6 text-center">

    <h3 className="text-2xl font-bold text-white">
  {p.link}
</h3>

<div className="mt-4 flex flex-wrap justify-center gap-2">

  <span className="rounded-full bg-amber-400/10 border border-amber-400/30 px-3 py-1 text-xs font-semibold text-amber-300">
    ⭐ Best Seller
  </span>

  <span className="rounded-full bg-white/5 border border-zinc-700 px-3 py-1 text-xs font-semibold text-white">
    📐 Custom Made
  </span>

</div>

<p className="mt-5 text-gray-400 leading-7">
  {p.desc}
</p>
    <a
      href="https://wa.me/919601961414"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block w-full rounded-xl bg-amber-400 py-3 font-semibold text-black hover:bg-amber-300 transition"
    >
      Get a Free Quote
    </a>

  </div>
  <p className="mt-3 text-center text-sm text-gray-400">
  📐 Custom Sizes • 🏭 Direct Manufacturer
</p>
  </div>
          ))}
          </div>
        
      </section>
{/* GALLERY */}
<section id="gallery" className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center">
    <p className="text-amber-400 uppercase tracking-[5px] font-semibold">
      Our Recent Projects
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      Luxury LED Mirror Installations
    </h2>

    <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
      Explore some of our recently completed custom LED mirror installations
      for homes, salons, hotels and interior projects.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

    {[
  { img: "gallery1.jpg", title: "Dressing Room" },
  { img: "gallery2.jpg", title: "Luxury Bathroom" },
  { img: "gallery3.jpg", title: "Home Bathroom" },
  { img: "gallery4.jpg", title: "Home Bathroom" },
  { img: "gallery5.jpg", title: "Bathroom Vanity" },
  { img: "gallery6.jpg", title: "Backlit Mirror" },
  { img: "gallery7.jpg", title: "Mirror and Metal frame" },
  { img: "gallery8.jpg", title: "Mirror and Metal Frame" },
  { img: "gallery9.jpg", title: "Regular LED Mirror" },
  { img: "gallery10.jpg", title: "Luxury Bathroom" },
  { img: "gallery11new.jpg", title: "Custom Metal Frame Mirror" },
  { img: "gallery12new.jpg", title: "LED Mirror With Black Frame" },
].map((item, i) => (
      <div
        key={i}
        className="group relative overflow-hidden rounded-3xl border border-zinc-800 hover:border-amber-400 transition-all duration-500"
      >
        <Image src= {`/images/gallery/${item.img}`}
          alt= {item.title}
          width={600}
          height={800}
          className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition duration-500 p-5">
          <p className="text-white text-lg font-semibold">
            {item.title}
          </p>
        </div>
      </div>
    ))}

  </div>

</section>
{/* REVIEWS */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center">
    <p className="text-amber-400 uppercase tracking-[5px] font-semibold">
      Customer Reviews
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      Trusted by Our Customers
    </h2>

    <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
      Rated 5.0 ⭐ on Google by our happy customers for premium quality,
      custom manufacturing and excellent service.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 mt-16">

    {[
      {
        review:
          "Looks beautiful and gives a rich look to the bathroom. Excellent quality and finishing.",
      },
      {
        review:
          "Superb quality product. The owner is humble, professional and very supportive. Great value for money.",
      },
      {
        review:
          "Very knowledgeable team with excellent workmanship. Highly satisfied with the overall experience.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 hover:border-amber-400 transition-all duration-500"
      >
        <div className="text-amber-400 text-2xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-6 text-gray-300 leading-7">
          "{item.review}"
        </p>

        <div className="mt-8">
          <h4 className="text-white font-semibold">
            Reviewed by Google User 
          </h4>

          <p className="text-gray-500 text-sm">
            Google Review
          </p>
        </div>
      </div>
    ))}

  </div>

  <div className="text-center mt-14">

    <a
      href="https://maps.app.goo.gl/xmyT2fU3x7hLnCJW9"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-xl bg-amber-400 px-8 py-4 font-semibold text-black hover:bg-amber-300 transition"
    >
      ⭐ Read All Google Reviews
    </a>

  </div>

</section>
      {/* CONTACT */}
      <section 
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="text-amber-400 uppercase tracking-[5px] font-semibold">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Visit Our Showroom
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We manufacture premium LED mirrors for homes, hotels, salons and luxury interiors.
            Visit our showroom or contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* LEFT */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white">SpaceMirror</h3>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-amber-400 font-semibold">📍 Address</p>
                <p className="text-gray-300 mt-2 leading-7">
                  11, Ambavadi, Behind Emica Panels LLP,
                  Near Fungrito Fun Forever,
                  New Science City Road,
                  Ognaj,
                  Ahmedabad,
                  Gujarat – 380060.
                </p>
              </div>

              <div>
                <p className="text-amber-400 font-semibold">📞 Phone</p>
                <a href="tel:+919601961414" className="text-gray-300 hover:text-amber-400">
                  +91 96019 61414
                </a>
              </div>

              <div>
                <p className="text-amber-400 font-semibold">📧 Email</p>
                <a href="mailto:chauhanjogesh9@gmail.com" className="text-gray-300 hover:text-amber-400">
                  chauhanjogesh9@gmail.com
                </a>
              </div>

              <div>
                <p className="text-amber-400 font-semibold">🕒 Working Hours</p>
                <p className="text-gray-300">
                  Monday – Saturday
                  <br />
                  10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.01755860589122!2d72.5102691598423!3d23.102121983176502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1783164234132!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl border border-zinc-800"
            ></iframe>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919601961414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-xl bg-amber-400 py-4 font-semibold text-black hover:bg-amber-300 transition"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:+919601961414"
                className="flex-1 text-center rounded-xl border border-white py-4 text-white hover:bg-white hover:text-black transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    
      {/* CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold text-white">
          Ready to Upgrade Your Space?
        </h2>

        <p className="text-gray-400 mt-4">
          Premium LED mirrors delivered all over India
        </p>

        <a
          href="https://wa.me/919601961414"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-amber-400 text-black px-10 py-4 rounded-xl font-semibold hover:bg-amber-300 transition"
        >
          Contact Us on whatsapp
        </a>
      </section>

    </main>
  );
}