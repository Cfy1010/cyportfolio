const SkillsCard = ({ icon, title, text, tools }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <h3 className="mt-6 font-normal">{tools}</h3>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
