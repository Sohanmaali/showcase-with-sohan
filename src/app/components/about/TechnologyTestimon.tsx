"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { technologyTestimonials } from "@/helpers/constFile";

// Add categories for filtering
const categories = ["All", "Frontend", "Backend", "Tools", "Cloud"] as const;
type Category = typeof categories[number];

export default function TechnologyShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedTech, setSelectedTech] = useState<number | null>(null);
  const [isGridView, setIsGridView] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);

  // Add categories to tech items
  const techWithCategories = technologyTestimonials.map(tech => ({
    ...tech,
    category: getTechCategory(tech.name)
  }));

  // Filter technologies based on search and category
  const filteredTechs = techWithCategories.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tech.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Auto-focus search on mount
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  function getTechCategory(techName: string): Category {
    const frontend = ["React", "Nextjs", "Vue", "Svelte", "TypeScript", "JavaScript", "Tailwind", "CSS"];
    const backend = ["Node", "Express", "NestJS", "Django", "Flask", "Spring"];
    const cloud = ["AWS", "Azure", "GCP", "Firebase", "Vercel"];

    if (frontend.some(term => techName.includes(term))) return "Frontend";
    if (backend.some(term => techName.includes(term))) return "Backend";
    if (cloud.some(term => techName.includes(term))) return "Cloud";
    return "Tools";
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center p-6 max-w-7xl mx-auto">


      {/* Search and Filter Bar */}
      <motion.div
        className="w-full max-w-3xl mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >

        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => setIsGridView(!isGridView)}
            className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title={isGridView ? "Switch to list view" : "Switch to grid view"}
          >
            {isGridView ? "☰" : "⏹"}
          </button>
        </div>
      </motion.div>

      {/* Technology Grid */}
      <motion.div
        className={`w-full ${isGridView ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6' : 'flex flex-col max-w-2xl w-full'}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {filteredTechs.length > 0 ? (
            filteredTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                variants={item}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`  bg-gray-100  p-4 m-1 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedTech === index
                    ? 'bg-gradient-to-br from-indigo-50 to-blue-50 scale-105 shadow-lg border-2 border-indigo-200'
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                  } ${isGridView ? 'flex flex-col items-center' : 'flex items-center space-x-4'}`}
                onClick={() => setSelectedTech(selectedTech === index ? null : index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={` relative ${isGridView ? 'w-16 h-16 mb-2' : 'w-12 h-12'}`}>
                  <Image
                    src={tech.url}
                    alt={tech.name}
                    fill
                    className="object-contain filter invert-0"
                    style={{
                      filter: selectedTech === index
                        ? 'invert(0.5) sepia(1) saturate(5) hue-rotate(210deg)'
                        : 'none'
                    }}
                  />
                </div>
                <span
                  className={`text-sm font-medium text-center ${selectedTech === index
                      ? 'text-indigo-700 font-semibold'
                      : 'text-gray-700'
                    }`}
                >
                  {tech.name}
                </span>
                {!isGridView && (
                  <span className="ml-auto px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                    {tech.category}
                  </span>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-12 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No technologies found matching your search.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tech Details Modal */}
      <AnimatePresence>
        {selectedTech !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={filteredTechs[selectedTech]?.url || ''}
                      alt={filteredTechs[selectedTech]?.name || ''}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {filteredTechs[selectedTech]?.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Category</h4>
                  <p className="text-gray-600">{filteredTechs[selectedTech]?.category}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Experience Level</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${Math.floor(Math.random() * 60) + 40}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Description</h4>
                  <p className="text-gray-600">
                    {`${filteredTechs[selectedTech]?.name} is a powerful technology used in modern web development. It provides robust solutions for building scalable applications.`}
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(filteredTechs[selectedTech]?.name || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Learn more about {filteredTechs[selectedTech]?.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
