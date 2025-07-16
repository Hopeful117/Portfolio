// src/pages/Contact.tsx

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex justify-center items-center pb-1000 bg-gray-900 text-white">
      <div className="w-4/5 max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-6 mt-5">Me contacter</h1>
        <p className="text-lg mb-8">
          Vous souhaitez collaborer, discuter d’un projet ou simplement échanger ?
          Retrouvez-moi sur les plateformes ci-dessous.
        </p>

        <div className="flex justify-center gap-10 text-4xl">
          <a
            href="https://github.com/hopeful117"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="Lien GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ludovicbrot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Lien LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Ou contactez-moi directement par mail :{" "}
          <a
            href="mailto:ludovic.brot@gmail.com"
            className="text-blue-300 hover:underline"
          >
            ludovic.brot@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
