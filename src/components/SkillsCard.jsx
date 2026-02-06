const SkillsCard = ({ icon, title, text, tools }) => {
  return (
    <article aria-labelledby={`skill-${title}`}>
      {/* Icône décorative */}
      <span aria-hidden="true" className="text-primary text-4xl">
        {icon}
      </span>

      {/* Titre de compétence */}
      <h3
        id={`skill-${title}`}
        className="text-lg font-semibold text-slate-900"
      >
        {title}
      </h3>

      {/* Outils (si présents) */}
      {tools && (
        <p className="text-sm font-medium text-slate-600">
          <span className="sr-only">Outils utilisés :</span>
          {tools}
        </p>
      )}

      {/* Description */}
      <p className="text-base leading-relaxed text-slate-600">{text}</p>
    </article>
  );
};
export default SkillsCard;
