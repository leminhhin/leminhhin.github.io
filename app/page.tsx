import { Suspense } from 'react';
import Badge from './components/organization-badge'
import ProjectBadge from './components/project-badge'


export default function Page() {
  return (
    <section>
      <div className='flex flex-row space-x-8 items-end justify-between'>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Introducing Minh-Hien Le</h1>

        {/* contact details */}
        <div className='text-sm tracking-tight mb-8 prose prose-neutral dark:prose-invert space-x-2'>
            <a href="mailto:minh.hin.le@gmail.com" className=''>Gmail</a>
            <a>|</a>
            <a href="https://www.linkedin.com/in/leminhhin/">LinkedIn</a>
            <a>|</a>
            <a href="http://github.com/leminhhin">GitHub</a>


        </div>
      </div>
   
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I'm an enterprising and self-driven AI engineer.
          Developing AI features for wellness applications at `}

          <Badge href="https://www.fossilgroup.com/">
            <img
              alt="Fossil Group logo"
              src="/fossil-group-logo.svg"
              className="!mr-1"
              width="14"
              height="14"
            />
            Fossil Group
          </Badge>

          {`, I introduced a novel sleep cycle-based smart alarm,
          optimized battery usage through user motion detection,
          and transformed signal collection with ML algorithms.`}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I graduated with Honors in Computer Science from `}

          <Badge href="https://vnuhcm.edu.vn/">
            <img
              alt="VNUHCM logo"
              src="/vnuhcm-logo.png"
              className="!mr-1"
              width="14"
              height="14"
            />
            Vietnam National University, HCMC
          </Badge>

          {`. My thesis focuses on building a generative AI-based system for interior design
          utilizing natural language instructions and user interactions,
          received the highest score and was accepted to `}

          <Badge href="https://ismar23.org/">
            <img
              alt="ISMAR23 logo"
              src="/ismar-logo.png"
              className="!mr-1"
              width="14"
              height="14"
            />
            IEEE ISMAR 2023
          </Badge>

          {`.`}
        </p>
      </div>


      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I&apos;m deeply interested in generative models, including LLMs,
          and enjoy building AI products. Below are some of my recent projects.
        </p>
      </div>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <Suspense>
          <ProjectBadge
            name="VIDES"
            url="https://arxiv.org/abs/2308.13795"
            desc="Multimodal generative AI-based system for interior design generation and modification utilizing natural language instructions and user interactions"
          />
          <ProjectBadge
            name="ML Interview Warmup"
            url="https://github.com/leminhhin/ml-interview-warmup"
            desc="LLM-based web application offering personalized ML interview prep experience"
          />
          <ProjectBadge
            name="TabsAI"
            url="https://github.com/leminhhin/tabsai"
            desc="AI-based Chrome extension that groups browser tabs based on content similarity and generates descriptive names for each tab group"
          />
        </Suspense>
      </div>

    </section>
  );
}