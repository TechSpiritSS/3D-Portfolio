import CallToAction from '@/components/CallToAction';
import Timeline from '@/components/Timeline';
import { awards, experiences, skills, volunteerings } from '@/constants';
import Image from 'next/image';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hi, I&apos;m{' '}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Sidharth Sethi
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Developer Student with hands on experience with MERN, NextJS,
          GCP and SQL
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  width={50}
                  height={50}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I&apos;ve worked with all sorts of companies, leveling up my skills
            and teaming up with smart people. Here&apos;s the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <Timeline experiences={experiences} />
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Volunteering</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Apart from my professional work, I also volunteer for various
            communities and organizations. Here&apos;s a list of my volunteer
            work:
          </p>
        </div>

        <div className="mt-12 flex">
          <Timeline experiences={volunteerings} />
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Awards</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I&apos;ve been lucky enough to receive a few awards and
            recognitions. Here&apos;s a list of them:
          </p>
        </div>

        <div className="mt-12 flex">
          <Timeline experiences={awards} />
        </div>
      </div>

      <hr className="border-slate-200" />
      <CallToAction />
    </section>
  );
};

export default About;
