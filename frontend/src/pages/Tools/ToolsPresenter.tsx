import React from "react";
import { Checkbox } from "@material-ui/core";

import { BookQuoteResponse } from "src/models/api/BookQuoteResponse";
import "./Tools.css";

interface Props {
  rubinQuote: string;
  bookQuote: BookQuoteResponse;
  scaleDegree: number;
  tonality: string;
  randomEnabled: boolean;
  setRandomEnabled: (value: boolean) => void;
  shouldUseFullScale: boolean;
  setShouldUseFullScale: (value: boolean) => void;
}

export const ToolsPresenter = (props: Props) => {
  const {
    rubinQuote,
    bookQuote,
    scaleDegree,
    tonality,
    randomEnabled,
    setRandomEnabled,
    shouldUseFullScale,
    setShouldUseFullScale,
  } = props;

  return (
    <div className="page">
      <h1 className="header">Let the hands of fate guide you</h1>
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
        <hr />
        <h1 className="header">Music tools</h1>
        <p>
          A small set of tools that I use for music practice. I use these random
          values for different freboard/scale/mode exercises, like "Play the
          pentatonic minor scale in the given key starting on the given scale
          degree"
        </p>
        <div>
          <Checkbox
            onClick={(event) => {
              setRandomEnabled(!randomEnabled);
            }}
            value={randomEnabled}
            color="primary"
          />
          Enable random values?
        </div>
        <div>
          <Checkbox
            onClick={(event) => {
              setShouldUseFullScale(!shouldUseFullScale);
            }}
            value={shouldUseFullScale}
            color="primary"
          />
          Enable full scale? (default is pentatonic)
        </div>
        <div className="main-content">
          <div className="column">
            <div></div>
            <h4>Random Key</h4>
            <div className="random-value">{tonality}</div>
          </div>
          <div className="column">
            <div></div>
            <h4>Random Scale Degree</h4>
            <div className="random-value">{scaleDegree}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPresenter;
