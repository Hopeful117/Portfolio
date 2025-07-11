import React from 'react';

type ProjectProps = {
  title: string;
  description: string;
  technologies: string;
  github_link?: string;
  demo_link?: string;
  preview: string;
  categorie:string;
};

const Projets: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  github_link,
  demo_link,
  preview,
  categorie
}) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
      <img
        src={`${preview}`}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm mb-2 text-white">{description}</p>
      <p className="text-xs text-gray-400 mb-2">Techs : {technologies}</p>
       <p className="text-xs text-gray-400 mb-2">Categorie : {categorie}</p>

      <div className="flex gap-4">
        {github_link && (
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {demo_link && (
          <a
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Démo
          </a>
        )}
      </div>
    </div>
  );
};

export default Projets;
