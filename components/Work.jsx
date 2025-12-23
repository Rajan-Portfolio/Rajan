import { motion } from "framer-motion";

const projects = [
  {
    title: "Multi-Brand Marketing System",
    impact: "Increased campaign engagement & brand consistency",
    image: "/case1.jpg",
  },
  {
    title: "Website UI Revamp",
    impact: "Improved visual trust & conversion clarity",
    image: "/case2.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Selected Case Studies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-[var(--card)] rounded-xl overflow-hidden border border-gray-800"
            >
              <img src={p.image} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{p.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}