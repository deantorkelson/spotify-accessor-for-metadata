import React from "react";

import { BookQuoteResponse } from "src/models/api/BookQuoteResponse";
import "./Tools.css";

interface Props {
  rubinQuote: string;
  bookQuote: BookQuoteResponse;
}
export const ToolsPresenter = (props: Props) => {
  const { rubinQuote, bookQuote } = props;

  return (
    <div className="page">
      <div className="header">Let the hands of fate guide you</div>
      <div>
        Rick Rubin keeps a library of books in his recording studio. If you're
        stuck, grab a book and find a random quote to inspire you. Rubin also
        said,
        <br />
        <i>{rubinQuote}</i>
        <br />
        <br />
        May this quote help you resolve your creative conundrum:
        <br />"{bookQuote.quote}" -{" "}
        <span>
          <i>{bookQuote.author}</i>
        </span>
      </div>
    </div>
  );
};

export default ToolsPresenter;
