import { motion } from "framer-motion";

export default function BubbleEffect() {
  return (
    <>
      <div className="h-20">
        <motion.button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          whileHover={{
            y: -3, // Enlarges the button
            // rotateX: 15, // Tilts the button for a depth effect
            transition: { duration: 0.3 },
          }}
        >
          Hover Me
        </motion.button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:-translate-y-1 transition-all duration-200 hover:shadow-xl hover:shadow-blue-200 ml-10">
          click
        </button>
      </div>
    </>
  );
}
