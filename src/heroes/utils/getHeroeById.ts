import { heroes } from "../data/heroes";

const data = heroes;

export const getHeroeById = (id: string) => {
  return data.find((heroe) => heroe.id === id);
};
