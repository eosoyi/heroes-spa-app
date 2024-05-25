import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../utils/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

interface Props {
  publisher: string;
}

export const HeroeList: React.FC<Props> = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes &&
        heroes.map((item) => <HeroeCard key={item.id} {...item}></HeroeCard>)}
    </div>
  );
};
