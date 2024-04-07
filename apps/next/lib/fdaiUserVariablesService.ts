import { getOrCreateFdaiAccessToken } from '@/lib/fdaiUserService';

export async function getUserVariables(yourUserId: string, queryParams: object) {
  const accessToken = await getOrCreateFdaiAccessToken(yourUserId);
  const options = {method: 'GET',
    headers: {Authorization: 'Bearer ' + accessToken}};
// Convert queryParams object to URL search parameters
  const urlParams = new URLSearchParams(queryParams).toString();

  const fetchUrl = `https://safe.fdai.earth/api/v3/variables?${urlParams}`;

  const userVariablesResponse = await fetch(fetchUrl, options);
  const vars = await userVariablesResponse.json();
  return vars;
}
