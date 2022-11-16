import { BaseButton } from '@components/base/BaseButton';

interface Props {
  project: {
    name: string;
    description: Array<string>;
    image: string;
  };
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-dark-300 rounded-lg max-w-xs md:max-w-[18rem] lg:max-w-xs border-dark-100 border grid gap-3 p-5">
      <img
        className="h-auto w-full rounded-lg"
        src={project.image}
        alt={project.name}
      />

      {/* Descriptions */}
      <div className="text-light-800">
        <p>/**</p>
        {project.description.map((item) => (
          <p className="ml-2" key={item}>
            {item}
          </p>
        ))}
        <p className="ml-2">*/</p>
      </div>

      <p className="text-white">
        <span className="text-secondary-500 mr-3">() =&gt;</span>
        {project.name}
      </p>

      <BaseButton />
    </div>
  );
};
