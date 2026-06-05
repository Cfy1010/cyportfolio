const SkillsCard = ({ icon, title, text, tools, wide }) => {
  if (wide) {
    return (
      <article className="bg-emerald-900 rounded-2xl p-6 flex items-start gap-5">
        <span className="text-3xl shrink-0">{icon}</span>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          {tools && (
            <p className="text-sm font-medium text-emerald-400 mb-2">{tools}</p>
          )}
          <p className="text-sm leading-relaxed text-emerald-200/70 whitespace-pre-line">
            {text}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-emerald-900 rounded-2xl p-6">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-lg font-bold text-white mt-3 mb-2">{title}</h3>
      {tools && (
        <p className="text-sm font-medium text-emerald-400 mb-2">{tools}</p>
      )}
      <p className="text-sm leading-relaxed text-emerald-200/70 whitespace-pre-line">
        {text}
      </p>
    </article>
  );
};

export default SkillsCard;
