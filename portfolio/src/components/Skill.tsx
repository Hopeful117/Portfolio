type SkillProp={
    language:string,
    level:number,
    icone:string
}
const Skill:React.FC <SkillProp> =({language,level,icone})=>
  {return (
    <>
      <span className="text-white"><img className="w-10 h-10 mr-5" src={icone} alt={language}/></span>
     
      <span className="text-yellow-400 text-lg">
        {"⭐".repeat(level)}
      </span>
    </>
  );
}
export default Skill