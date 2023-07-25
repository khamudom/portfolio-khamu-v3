'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { delay, motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import styles from './Experience.module.css';
import { ExperienceType, experiences } from '../../constants';
import { SectionWrapper } from '../HOC';
import { textVariant } from '../../utils/motion';
import Image from 'next/image';

interface ExperienceCardProps {
  experience: ExperienceType;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#ffffff',
        color: '#000000',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={styles.icon}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            width={30}
            height={30}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const variantsProps = {
    delay: 4,
  };

  return (
    <>
      <motion.div variants={textVariant(variantsProps)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h1 className={styles.sectionHeadText}>Work Experience</h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
