export default function ServiceCard({ name, description, icon }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-xl border border-line bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 sm:h-12 sm:w-12">
        {icon}
      </div>
      <h3 className="mt-4 break-words text-base font-semibold text-ink sm:mt-5 sm:text-lg">{name}</h3>
      <p className="mt-2 break-words text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
