import { labeledLogger } from '../../../lib/labeled-logger.js';
import { origin } from '../origin.js';

const log = labeledLogger();

/**
 * Fetches the pokemon with a specific name.
 *
 * @async
 * @param {string} name - The name of the pokemon to fetch.
 * @returns {Promise<object>} The requested pokemon object.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
const pokemonByName = async (name = '') => {
  // --- declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#pokemon-section
  const URL = `${origin}/pokemon/${name}`;
  log(URL);

  // --- fetch, validate and parse the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  // --- return the final data ---
  return data;
};

// --- fetch and log the data ---

pokemonByName('pikachu')
  .then(data => log('pikachu', data))
  .catch(err => log('pikachu', err));

pokemonByName('mew')
  .then(data => log('mew', data))
  .catch(err => log('mew', err));

pokemonByName('lickitung')
  .then(data => log('lickitung', data))
  .catch(err => log('lickitung', err));

log('= = = =  the call stack is empty  = = = =');
