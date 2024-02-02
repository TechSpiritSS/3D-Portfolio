'use client';

import Image, { StaticImageData } from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface TimelinProps {
  experiences: {
    title: string;
    company_name: string;
    icon: StaticImageData;
    iconBg: string;
    date: string;
    points: string[];
  }[];
}

const Timeline: React.FC<TimelinProps> = (props) => {
  const { experiences } = props;
  return (
    <VerticalTimeline>
      {experiences.map((experience) => (
        <VerticalTimelineElement
          key={experience.company_name}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={32}
                height={32}
                objectFit="contain"
              />
            </div>
          }
          iconStyle={{
            background: 'white',
            boxShadow: 'none',
            border: 'none',
          }}
          contentStyle={{
            borderBottom: '8px',
            borderStyle: 'solid',
            borderBottomColor: experience.iconBg,
            boxShadow: 'none',
          }}
          visible={true}
        >
          <div>
            <h3 className="text-black text-lg font-poppins font-semibold">
              {experience.title}
            </h3>
            <p
              className="text-black-500 font-medium font-base"
              style={{
                margin: 0,
              }}
            >
              {experience.company_name}
            </p>

            <h4
              className="text-black-500/50 font-medium font-base"
              style={{
                margin: 0,
              }}
            >
              {experience.date}
            </h4>
          </div>

          <ul className="my-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, idx) => (
              <li
                className="text-black-500/80 font-normal pl-1 text-md"
                key={`exp-point-${idx}`}
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
