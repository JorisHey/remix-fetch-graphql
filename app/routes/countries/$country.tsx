import { LoaderFunction, useLoaderData } from "remix";
import { getCountry } from "~/lib/countries/countries";
import styles from "~/styles/countries.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async ({ params }) => {
  const code = params.country as string;
  const country = await getCountry(code);

  return {
    code: params.country,
    country,
  };
};

export default function Country() {
  const { code, country } = useLoaderData();

  return (
    <>
      {country === null ? (
        <h1>No country found with this code</h1>
      ) : (
        <>
          <h1>
            {country.name} -- {country.native}
          </h1>

          <table>
            <tbody>
              <tr>
                <td>CAPITAL:</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>CURRENCY:</td>
                <td>{country.currency}</td>
              </tr>
              <tr>
                <td>CONTINENT:</td>
                <td>{country.continent.name}</td>
              </tr>
            </tbody>
          </table>
          <div className="flag">
            {" "}
            <img
              src={`https://countryflagsapi.com/svg/${code}`}
              alt="Country Flag"
            />
          </div>
        </>
      )}
    </>
  );
}
