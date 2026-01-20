import React from "react";
import { motion } from "framer-motion";
//styles will be imported from shell - for standalone dev work styles are imported in main.tsx
// import "./styles.css";

/**
 * TestPage Component - Micro Frontend Module
 *
 * This component is exposed via Webpack Module Federation
 * and can be consumed by the host application.
 */
const TestPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 text-accent">
            StayStrong by Hari
          </h1>
          <p className="text-xl mb-8 text-text-light dark:text-text-dark">
            This is a standalone micro frontend module using Webpack Module
            Federation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-secondary-light dark:bg-secondary p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                Module Features
              </h2>
              <ul className="space-y-2 text-text-light dark:text-text-dark">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Independent deployment capability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Shared theme context support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Isolated business logic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Framework-agnostic design</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-secondary-light dark:bg-secondary p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                MFE Benefits
              </h2>
              <ul className="space-y-2 text-text-light dark:text-text-dark">
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>Independent team ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>Technology flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>Faster deployment cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>Scalable architecture</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-text-light dark:text-text-dark italic">
              "Dedication has no limitation!" - Hariharan Mohan
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestPage;
