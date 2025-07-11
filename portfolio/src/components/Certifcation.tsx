import React from 'react';

type CertificationProps = {
    title:string,
    preview:string,
    link:string,
    description:string,
}

const Certification:React.FC<CertificationProps> = ({
    title,preview,link,description
}) => {return(
      <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
      <img
        src={`${preview}`}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4 "
      />
      <h3 className="text-xl font-semibold mb-2 text-white" >{title}</h3>
      <p className="text-sm mb-2 text-white">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Lien
          </a>
        
        )}
        </div>

)}

export default Certification
