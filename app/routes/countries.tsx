import {
  ActionFunction,
  Form,
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
  useTransition,
} from "remix";
import { GetAllCountriesQuery } from "~/generated/graphql";
import { getAllCountries } from "~/lib/countries/countries";

export let loader: LoaderFunction = async () => {
  const countries = await getAllCountries();

  return countries;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const country = formData.get("country");

  return redirect(`/countries/${country}`);
};

export default function CountriesPage() {
  const countries: GetAllCountriesQuery["countries"] = useLoaderData();
  const transition = useTransition();

  return (
    <>
      <h2>Let&apos;s search for it:</h2>
      <Form method="post">
        <p>
          <label>
            Search country:{" "}
            <input type="text" name="country" list="countriesList" />
          </label>
          <datalist id="countriesList">
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </datalist>
        </p>
        <p>
          <button type="submit" disabled={transition.submission !== undefined}>
          {transition.submission
            ? "Searching..."
            : "Search"}
          </button>
        </p>
      </Form>
      <Outlet />
    </>
  );
}
