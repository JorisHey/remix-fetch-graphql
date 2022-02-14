import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <p>
        GO and <Link to={`/countries`}>get</Link> some countries...
      </p>
    </div>
  );
}
