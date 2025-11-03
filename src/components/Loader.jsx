import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="border-4 border-blue-600 border-t-transparent rounded-full w-16 h-16"
      ></motion.div>
      <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold text-lg">Loading...</p>
    </motion.div>
  );
}
