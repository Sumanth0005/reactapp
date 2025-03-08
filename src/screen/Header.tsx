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
        <label className="animate" onClick={() => sendData("Angular")}>
          Angular
        </label>
        <label className="animate" onClick={() => sendData("React")}>
          React
        </label>
        <label className="animate" onClick={() => sendData("Html")}>
          HTML
        </label>
        <label className="animate" onClick={() => sendData("Css")}>
          CSS
        </label>
        <label className="animate" onClick={() => sendData("NodeJs")}>
          Node Js
        </label>
      </div>
      <div className="image">
        <img className="img-circle" src="/tl.svg" alt="logo" />
      </div>
    </div>
  );
}
