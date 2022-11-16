import projectEditor from '@assets/project-editor.svg';
import { ProjectCard } from '@components/common/ProjectCard';
import rizalImage from '@assets/projects/jrizal.png';
import weddingImage from '@assets/projects/wedding.png';
import iconImage from '@assets/projects/icon.png';

// Projects array
const projects = [
  {
    name: 'Jose Rizal Website;',
    description: ['* Contains information about', '* Rizal life'],
    image: rizalImage,
  },
  {
    name: 'iCon Wi-fi;',
    description: ['* A Wi-fi vending', '* Machine'],
    image: iconImage,
  },
  {
    name: 'Wedding Website;',
    description: ['* Wedding invitation', '* website'],
    image: weddingImage,
  },
];

export const Projects = () => {
  return (
    <section className="h-screen relative flex justify-center items-center">
      <div className="flex flex-col md:px-4 lg:px-0">
        <p className="text-light-700 text-xl text-center mb-8">
          girish-daloso/
          <span className="text-white">projects</span>
          &gt;
        </p>

        <div className="grid grid-flow-row md:grid-flow-col gap-6">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>

      {/* Back image text editor */}
      <img
        className="absolute hidden md:block h-auto md:max-w-2xl lg:max-w-3xl -z-10 opacity-100"
        src={projectEditor}
        alt="Girish Daloso Projects"
      />
    </section>
  );
};
