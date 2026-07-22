type Props = {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  tech,
  featured,
}: Props) {
  return (
    <div
      className={`
      rounded-3xl
      border
      bg-white
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      ${
        featured
          ? "border-blue-500 ring-1 ring-blue-200"
          : "border-gray-200"
      }
      `}
    >
      {featured && (
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          ⭐ Featured Project
        </span>
      )}

      <h3 className="text-3xl font-bold mt-5">
        {title}
      </h3>

      <p className="mt-5 text-gray-600 leading-8">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-8">
        {tech.map((item) => (
          <span
            key={item}
            className="bg-gray-100 px-3 py-2 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-10">

        <button className="bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition">
          Case Study
        </button>

        <button className="border px-5 py-3 rounded-xl hover:bg-gray-100 transition">
          GitHub
        </button>

      </div>
    </div>
  );
}