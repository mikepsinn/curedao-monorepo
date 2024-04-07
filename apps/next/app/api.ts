import type { paths } from './fdai';
import createClient from 'openapi-fetch';
import { getCurrentUser } from '@/lib/session';

let bearerToken = "demo"

export let { GET, POST, PATCH, PUT, DELETE, HEAD, TRACE } = createClient<paths>(
  {
    baseUrl: 'https://safe.fdai.earth/api/v3',
    headers: { authorization: `Bearer ${bearerToken}` } //Add your auth here, not needed for public APIs like petstore in this example
  },
);

const options = {
  method: 'POST',
  headers: {
    'X-CLIENT-ID': '<api-key>',
    'X-CLIENT-SECRET': '<api-key>',
    'Content-Type': 'application/json'
  },
  body: '{"clientUserId":"<string>"}'
};

fetch('https://safe.fdai.earth/api/v3/user', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
