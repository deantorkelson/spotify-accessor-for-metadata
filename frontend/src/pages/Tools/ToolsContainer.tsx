import React, { useState, useEffect } from "react";

import { BookQuoteResponse } from "src/models/api/BookQuoteResponse";
import ToolsPresenter from "src/pages/Tools/ToolsPresenter";
import SpotifyApiService from "src/utils/api/SpotifyApiService/SpotifyApiService";
import { keyNumberToString } from "../../utils/helpers";

const MINOR_PENTATONIC_DEGREES = [1, 3, 4, 5, 7];

export const RubinContainer = () => {
  const spotifyApiService = new SpotifyApiService();

  const [rubinQuote, setRubinQuote] = useState("");
  const [bookQuote, setBookQuote] = useState({} as BookQuoteResponse);
  const [scaleDegree, setScaleDegree] = useState(1);
  const [tonality, setTonality] = useState("E");
  const [randomEnabled, setRandomEnabled] = useState(false);
  const [shouldUseFullScale, setShouldUseFullScale] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (randomEnabled) {
        setTonality(keyNumberToString(Math.floor(Math.random() * 11)));
        if (shouldUseFullScale) {
          setScaleDegree(Math.floor(Math.random() * 7) + 1);
        } else {
          setScaleDegree(
            MINOR_PENTATONIC_DEGREES[Math.floor(Math.random() * 5)]
          );
        }
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [randomEnabled, shouldUseFullScale]);

  useEffect(() => {
    spotifyApiService.rubinQuote().then((data) => {
      setRubinQuote(data.quote);
    });
    spotifyApiService.bookQuote().then((data) => {
      setBookQuote(data);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToolsPresenter
      bookQuote={bookQuote}
      rubinQuote={rubinQuote}
      scaleDegree={scaleDegree}
      tonality={tonality}
      randomEnabled={randomEnabled}
      setRandomEnabled={setRandomEnabled}
      shouldUseFullScale={shouldUseFullScale}
      setShouldUseFullScale={setShouldUseFullScale}
    />
  );
};

export default RubinContainer;
