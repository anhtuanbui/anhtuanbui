import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  url: string
  image: StaticImageData,
  name: string,
  description: string
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link href={props.url} className="transform transition-transform duration-300 hover:scale-105">
      <div className="h-30 object-cover sm:w-auto">
        <Image src={props.image} alt="Paxform screenshot"/>
        <h3 className="font-bold mt-2">{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};
