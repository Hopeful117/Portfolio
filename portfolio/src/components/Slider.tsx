// src/components/HomeSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider:React.FC = () => {
  return (
    <div className="w-full md:h-screen h-view">
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        mousewheel
        keyboard
        className="w-full h-view"
      >
        <SwiperSlide>
<section className="flex justify-center items-center h-full bg-gray-900 text-white md:w-3/6 flex-col ml-auto mr-auto mt-5">
  <h1 className="text-4xl font-bold mb-7 text-center">Bonjour, je suis Ludovic Brot</h1>
  <p className="text-lg mb-4 text-center">
    Développeur full-stack spécialisé dans le duo puissant <strong>Django</strong> et <strong>React</strong>.  
    J'aime construire des applications web robustes et performantes où le back-end Django assure la gestion efficace des données, la sécurité et l’API,  
    tandis que React offre une interface utilisateur dynamique et réactive.
  </p>
  <p className="text-lg mb-4 text-center">
    Grâce à cette combinaison, je crée des solutions modernes, évolutives et maintenables,  
    adaptées aux besoins métiers, avec une attention particulière portée à la qualité du code et à l’expérience utilisateur.
  </p>
  <p className="text-lg  mb-4 text-center">
    Explorez mes projets pour découvrir comment j’allie ces technologies pour transformer des idées en applications concrètes.  
    N’hésitez pas à me contacter pour collaborer sur vos prochains défis !
  </p>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-center items-center h-full bg-gray-900 text-white md:w-3/6 flex-col ml-auto mr-auto text-center mt-5">
  <h1 className="text-4xl font-bold mb-7">Mon parcours de reconversion</h1>
  <p className="text-lg mb-4">
    Après plusieurs années dans un autre domaine, j'ai entamé une reconversion vers le développement web avec une volonté claire :
    construire des solutions numériques modernes, utiles et sécurisées.
  </p>
  <p className="text-lg mb-4">
    J’ai commencé par suivre le célèbre cours <strong>CS50 de Harvard</strong>, une initiation exigeante à la pensée algorithmique, au C et au web.  
    Cette expérience m’a permis de poser des bases solides en programmation et en résolution de problèmes.
  </p>
  <p className="text-lg mb-4">
    J’ai poursuivi mon apprentissage avec une formation professionnelle chez <strong>OpenClassrooms</strong>,  
    où je développe des compétences concrètes en <strong>JavaScript, React, Django</strong> et dans la conception d'applications complètes,  
    tout en intégrant les bonnes pratiques de sécurité, d’accessibilité et de versioning.
  </p>
  <p className="text-lg mb-20">
    Cette reconversion est un véritable projet de vie. Elle me permet aujourd’hui d’unir logique, rigueur et créativité au service de projets web à fort impact.
  </p>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-center items-center h-full bg-gray-900 text-white  md:w-3/6 flex-col ml-auto mr-auto text-center mt-5">
  <h2 className="text-3xl font-bold mb-7">La suite de mon parcours</h2>
  <p className="text-lg mb-4">
    Mon objectif est de continuer à renforcer mes compétences et à élargir mon expertise.  
    Je vais prochainement intégrer une formation de <strong>Concepteur Développeur d’Applications (CDA)</strong>, avec une spécialisation Java.
  </p>
  <p className="text-lg mb-4">
    Ce cursus me permettra de consolider mes bases en programmation orientée objet, en architecture logicielle, et de monter en compétence vers un niveau Bac+3 reconnu.
  </p>
  <p className="text-lg mb-4">
    En parallèle, je poursuis une <strong>autoformation active</strong> sur des technologies essentielles dans le monde du développement et de la production :
    <strong> Linux, cybersécurité, Docker, réseaux, CI/CD</strong> et tout ce qui touche à l’écosystème DevOps et Cloud.
  </p>
  <p className="text-lg">
    Mon ambition est claire : devenir un développeur complet, capable de livrer des applications sécurisées, performantes, déployables,  
    et de m’orienter progressivement vers des rôles en <strong>DevSecOps</strong> ou en <strong>sécurité applicative</strong>.
  </p>
</section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
