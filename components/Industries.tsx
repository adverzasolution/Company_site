export default function Industries() {
  const topItems = [
    {
      name: "Logistics & Supply Chain",
      img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Healthcare",
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sports",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1517649763962-0c623066013b&w=900&q=80"
    },
    {
      name: "Manufacturing",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Agriculture",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1501004318641-b39e6451bec6&w=900&q=80"
    },
    {
      name: "Real Estate",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1502672260266-1c1ef2d93688&w=900&q=80"
    },
    {
      name: "Ecommerce",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1522199755839-a2bacb67c546&w=900&q=80"
    },
    {
      name: "Fintech",
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Education",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1558021212-51b6ecfa0db9&w=900&q=80"
    },
    {
      name: "Travel & Tourism",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1500534623283-312aade485b7&w=900&q=80"
    }
  ];

  const bottomItems = [
    {
      name: "Food & Beverages",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Automobile",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Beauty & Wellness",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1522336572468-97b06e8ef143&w=900&q=80"
    },
    {
      name: "SaaS Platforms",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1551288049-bebda4e38f71&w=900&q=80"
    },
    {
      name: "Entertainment",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1518972559570-7cc1309f3229&w=900&q=80"
    },
    {
      name: "Cybersecurity",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1556157382-97eda2d62296&w=900&q=80"
    },
    {
      name: "Retail",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1526170375885-4d8ecf77b99f&w=900&q=80"
    },
    {
      name: "Energy & Oil",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1509395176047-4a66953fd231&w=900&q=80"
    },
    {
      name: "Hospitality",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1556740749-887f6717d7e4&w=900&q=80"
    },
    {
      name: "Media & Broadcasting",
      img: "https://images.weserv.nl/?url=images.unsplash.com/photo-1511671782779-c97d3d27a1d4&w=900&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#042255] to-[#03B8A0] text-white px-6 overflow-hidden">
      <h3 className="text-center text-[#66FFE5] uppercase text-sm">Industries we cater to</h3>

      <p className="max-w-4xl text-center mx-auto text-xl mt-4">
        We understand each industry has unique challenges. We design experiences for 20+ industry verticals.
      </p>

      {/* Top Row → Left to Right */}
      <div className="mt-16 overflow-hidden">
        <div className="inline-flex animate-slideRight gap-6">
          {[...topItems, ...topItems].map((item, i) => (
            <div key={i} className="relative min-w-[260px] rounded-xl overflow-hidden group">
              <img
                src={item.img}
                className="w-full h-[200px] object-cover opacity-80 group-hover:opacity-100 transition"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-lg font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row → Right to Left */}
      <div className="mt-10 overflow-hidden">
        <div className="inline-flex animate-slideLeft gap-6">
          {[...bottomItems, ...bottomItems].map((item, i) => (
            <div key={i} className="relative min-w-[260px] rounded-xl overflow-hidden group">
              <img
                src={item.img}
                className="w-full h-[200px] object-cover opacity-80 group-hover:opacity-100 transition"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-lg font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
