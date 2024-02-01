import CallToAction from '@/components/CallToAction';
import { projects } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Some of my projects are listed below. I have worked on a variety of
          projects, ranging from web development to cloud. I am always looking
          for new opportunities to learn and grow.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div key={project.name} className="lg:w-[400px] w-full">
            <div className="block-container h-12 w-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={project.iconUrl}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-semibold text-blue-500 hover:text-blue-800"
                >
                  Github
                </Link>

                <Image
                  src="/icons/arrow.svg"
                  alt="arrow"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CallToAction />
    </section>
  );
};

export default Projects;
