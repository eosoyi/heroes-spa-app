import { heroes } from "../data/heroes";

const data = heroes;

export const getHeroesByPublisher = (publisher: string) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return data.filter((heroe) => heroe.publisher === publisher);
};
