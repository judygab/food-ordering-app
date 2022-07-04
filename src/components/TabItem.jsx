export const TabItem = ({ title, index, active, setActive }) => {
  const className = active
    ? 'border-b-yellow-400'
    : 'border-none text-slate-400';

  return (
    <div className="nav-item px-2">
      <a href={`#${title}`}>
        <button onClick={() => setActive(index)} className="pt-7 pb-3">
          <span
            className={`hover:text-yellow transition-colors border-b-2 ${className}`}
          >
            {title.toUpperCase()}
          </span>
        </button>
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste vero
        eveniet dignissimos facilis perspiciatis ex inventore, necessitatibus
        rem nulla ad doloribus omnis laboriosam neque quaerat, voluptates nemo
        ipsa recusandae quod id. Sapiente voluptate aliquid rerum modi beatae
        molestiae, nobis eveniet. Exercitationem debitis libero nesciunt iusto,
        vitae officia molestiae ut facilis consequuntur impedit ab voluptatibus
        dolore, minima ea aperiam eveniet deserunt cum ullam recusandae
        doloremque reprehenderit at. Vitae, nisi beatae eius illo consectetur
      </p>
    </div>
  );
};
