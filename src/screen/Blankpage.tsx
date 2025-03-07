import { useParams, useSearchParams } from "react-router-dom";
export default function Blankpage() {
  const { name, child } = useParams();
  const [qetQueryParams, setQueryParams] = useSearchParams();
  const val = qetQueryParams.get("abc");

  return (
    <div>
      {name ? `blankpage is empty for ${name}` : `blankpage is empty `}
      <br />
      {child ? `blankpage is empty for ${val},${child}:` : `blankpage is empty`}
      <br />
      {val}
      <button onClick={() => setQueryParams({ abc: "10", val: "789" })}>
        set
      </button>
    </div>
  );
}
