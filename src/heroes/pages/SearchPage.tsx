import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroeCard } from "../components/HeroeCard";
import queryString from "query-string";
import { getHeroesByName } from "../utils/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const { onInputChange, searchText } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`?q=${searchText.trim().toLowerCase()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
          <button
            className="btn btn-outline-primary mt-1"
            onClick={onSearchSubmit}
          >
            Search
          </button>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-primary">search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No heroe with <b>{q}</b>
              </div>
            )
          )}
          {heroes.map((hero) => (
            <HeroeCard key={hero.id} {...hero}></HeroeCard>
          ))}
        </div>
      </div>
    </>
  );
};
