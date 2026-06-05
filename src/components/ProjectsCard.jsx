import { FaGithubSquare, FaLock } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({
  img,
  title,
  subtitle,
  text,
  tags,
  date,
  icon,
  professional,
  url,
  github,
}) => {
  return (
    <article className="bg-emerald-900 rounded-2xl overflow-hidden flex flex-col">
      <div className="relative">
        {img ? (
          <img src={img} alt={title} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-emerald-800" />
        )}
        {icon && (
          <div className="absolute bottom-3 left-3 bg-emerald-900 rounded-lg p-2">
            {icon}
          </div>
        )}
        {date && (
          <span className="absolute top-3 right-3 bg-emerald-700/80 text-emerald-200 text-xs px-3 py-1 rounded-full">
            {date}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-bold text-white text-base leading-snug">{title}</h3>
          {subtitle && (
            <p className="text-emerald-400 text-xs mt-1">{subtitle}</p>
          )}
        </div>
        <p className="text-emerald-200/70 text-sm leading-relaxed">{text}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full text-xs bg-emerald-800 text-emerald-200 border border-emerald-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto pt-2">
          {professional ? (
            <p className="flex items-center gap-2 text-xs text-emerald-600">
              <FaLock className="h-3 w-3" />
              Projet professionnel
            </p>
          ) : (
            <div className="flex gap-x-3">
              {url && (
                <a href={url}>
                  <TbWorldWww className="h-7 w-7 text-emerald-400 hover:text-white duration-300" />
                </a>
              )}
              {github && (
                <a href={github}>
                  <FaGithubSquare className="h-7 w-7 text-emerald-400 hover:text-white duration-300" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
