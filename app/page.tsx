import { Suspense } from 'react';


function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}


function ProjectBadge({ name, url, desc }) {

  return (
    <a
      href={url}
      target='_blank'
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-semibold prose prose-neutral dark:prose-invert">
          {name}
        </p>
        <p className="prose prose-sm prose-neutral dark:prose-invert">
          {desc}
        </p>
      </div>
    </a>
  );
}



export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Introducing Minh-Hien Le</h1>
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
          I'm deeply interested in generative models, including LLMs,
          and enjoy building AI products. Below are some of my recent projects.
        </p>
      </div>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <Suspense>
          <ProjectBadge
            name="VIDES: Virtual Interior Design via Natural Language and Visual Guidance"
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
