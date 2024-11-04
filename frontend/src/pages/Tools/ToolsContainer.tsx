import React, { useState, useEffect } from "react";

import { BookQuoteResponse } from "src/models/api/BookQuoteResponse";
import ToolsPresenter from "src/pages/Tools/ToolsPresenter";
import SpotifyApiService from "src/utils/api/SpotifyApiService/SpotifyApiService";

export const RubinContainer = () => {
  const spotifyApiService = new SpotifyApiService();

  const [rubinQuote, setRubinQuote] = useState("");
  const [bookQuote, setBookQuote] = useState({} as BookQuoteResponse);

  useEffect(() => {
    spotifyApiService.rubinQuote().then((data) => {
      setRubinQuote(data.quote);
    });
    spotifyApiService.bookQuote().then((data) => {
      setBookQuote(data);
    });
  }, [spotifyApiService]);

  return <ToolsPresenter bookQuote={bookQuote} rubinQuote={rubinQuote} />;
};

export default RubinContainer;
