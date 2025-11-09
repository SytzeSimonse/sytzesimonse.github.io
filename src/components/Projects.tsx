import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  language: 'nl' | 'en';
}

const projectsData = {
  nl: {
    title: 'Digitale Projecten',
    projects: [
      {
        id: 1,
        title: 'Hoopzaaiers',
        description: 'Website voor DeGoedeZaak - een platform dat positieve verhalen en initiatieven verbindt.',
        image: 'community hope',
        link: 'https://hoopzaaiers.nl/',
        tech: ['Web Development', 'Design'],
      },
    ],
  },
  en: {
    title: 'Digital Projects',
    projects: [
      {
        id: 1,
        title: 'Hoopzaaiers',
        description: 'Website for DeGoedeZaak - a platform connecting positive stories and initiatives.',
        image: 'community hope',
        link: 'https://hoopzaaiers.nl/',
        tech: ['Web Development', 'Design'],
      },
    ],
  },
};

export function Projects({ language }: ProjectsProps) {
  const content = projectsData[language];

  return (
    <section id="projects" className="container mx-auto px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#4a7c7e] mb-12 transition-opacity duration-300">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tech={project.tech}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
