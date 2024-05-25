import { heroes } from "../data/heroes";

const data = heroes;

export const getHeroesByName = (name: string) => {
  name = name.trim().toLocaleLowerCase();
  if (name.length === 0) return [];

  return data.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
