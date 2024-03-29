import React, { useState, useEffect } from 'react';

import { BookQuoteResponse } from 'src/models/api/BookQuoteResponse';
import RubinPresenter from 'src/pages/Rubin/RubinPresenter';
import SpotifyApiService from 'src/utils/api/SpotifyApiService/SpotifyApiService';
import './Rubin.css';

export const RubinContainer = () => {
  const spotifyApiService = new SpotifyApiService();

  const [rubinQuote, setRubinQuote] = useState('');
  const [bookQuote, setBookQuote] = useState({} as BookQuoteResponse);

  useEffect(() => {
    spotifyApiService.rubinQuote().then(data => {
      setRubinQuote(data.quote);
    });
    spotifyApiService.bookQuote().then(data => {
      setBookQuote(data);
    })
  }, []);


  return (
    <RubinPresenter
      bookQuote={bookQuote}
      rubinQuote={rubinQuote}
    />
  )
}

export default RubinContainer;
