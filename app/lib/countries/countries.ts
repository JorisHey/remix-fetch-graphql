import { getSdk } from '../../generated/graphql'
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://countries.trevorblades.com')
const sdk = getSdk(client)

export async function getAllCountries() {
  const { countries } = await sdk.GetAllCountries()

  return countries
}

export async function getCountry(countryCode: string) {
  const { country } = await sdk.GetCountry({code: countryCode})

  return country
}
