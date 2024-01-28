import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface HomeInfoProps {
  currentStage: number;
}

interface InfoBoxProp {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox: React.FC<InfoBoxProp> = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link href={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <Image
        src="/icons/arrow.svg"
        className="w-4 h-4 object-contain"
        height={16}
        width={16}
        alt="Arrow"
      />
    </Link>
  </div>
);

const renderContent: Record<number, ReactNode> = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Sidharth Sethi</span>
      👋 <br />A software developer student
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with various companies and technologies"
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text="Developed various projects over the years. Curious to check out?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or a developer? I'm open to opportunities"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
