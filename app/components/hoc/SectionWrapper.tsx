import React from 'react';
import { motion } from 'framer-motion';

import styles from './SectionWrapper.module.scss';
import { staggerContainer } from '@/app/utils/motion';

interface SectionWrapperProps {
  Component: React.FC;
  idName: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ Component, idName }) =>
  function HOC() {
    return (
      <motion.section
        // variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {Component}
      </motion.section>
    );
  };

export default SectionWrapper;
