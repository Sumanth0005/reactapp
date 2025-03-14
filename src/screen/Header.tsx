import ThemeSwitcher from '../Theme/ThemeSwitcher';

export default function Header({
  sendData,
}: {
  sendData: (data: string) => void;
}) {
  return (
    <div className="head">
      <div>
        <img className="logotl" src="/tl.svg" alt="logo" />
      </div>
      <div className="list">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onChange={(e) => sendData(e.target.value)}
        />
        {["Angular", "React", "HTML", "CSS", "NodeJs"].map((tech) => (
          <button key={tech} className="animate" onClick={() => sendData(tech)}>
            {tech}
          </button>
        ))}
      </div>
     
      <div className="image">
      <div className='theming'><ThemeSwitcher /></div>
        <img className="img-circle" src="/pic.jpg" alt="logo" />
      </div>
    </div>
  );
}
