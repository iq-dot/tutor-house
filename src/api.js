const API_KEY = 'D0567585E2E00732C930F17EC1373BA5A7CA9901';
const API_URL = 'https://api.intuitionapp.uk/api/v3/tutor/verbolia/?format=json';
const SUBJECT_API = 'https://api.intuitionapp.uk/api/v2/subject_levels/?format=json'

/**
* Search for tutors based on the provided filters
* @param {object} filters
* @returns {object}
*/
export async function searchTutors(filters) {

  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(_createPostBody(filters)),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(`${API_URL}&key=${API_KEY}`, fetchOptions);
  const json = await res.json();
  return json;
}


/**
 * Retrieve a list of available subjects
 */
export async function getSubjectLevels() {
  const res = await fetch(`${SUBJECT_API}&key=${API_KEY}`);
  const json = await res.json();
  return json;
}


/**
 * Convert filters object to a JSON post body accepted by the API
 * @param {object} filters
 */
function _createPostBody(filters) {
  const body = {};

  if (!filters) {
    return body;
  }

  // Conditionally add each filter if required
  // This could be better written based on more understanding of the API
  if (filters.subject) {
    body.subject = filters.subject;
  }

  if (filters.postcode) {
    body.postcode = filters.postcode;
  }

  if (filters.online !== 'all') {
    body.online = filters.online === 'yes' ? true : false;
  }

  if (filters.minPrice) {
    body.min_price = Number(filters.minPrice);
  }

  if (filters.maxPrice) {
    body.max_price = Number(filters.maxPrice);
  }

  if (filters.rating) {
    body.rating = Number(filters.rating);
  }

  return body;
}
