import Spinner from "react-bootstrap/Spinner";
import React from "react";
import { Nullable } from "src/types/types";

export function createSearchResultList<T>(
  loading: boolean,
  searchResults: Nullable<T[]>,
  formatter: (result: T, ...args: any[]) => JSX.Element,
) {
  if (loading) {
    return (
      <div>
        <Spinner animation="border" />
        <div>
          *note that the first search might take extra time while the Heroku
          dyno spins up.
        </div>
      </div>
    );
  }
  if (searchResults) {
    if (!searchResults.length) {
      return <div key="-1">No search results found.</div>;
    }
    return (
      <div className="result-list">
        {searchResults.map((result: T, index) => formatter(result, index))}
      </div>
    );
  }
  return null;
}
