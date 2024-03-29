import React from 'react';

import { BookQuoteResponse } from 'src/models/api/BookQuoteResponse';
import './Rubin.css';

interface Props {
  rubinQuote: string;
  bookQuote: BookQuoteResponse;
}
export const RubinPresenter = (props: Props) => {
  const { rubinQuote, bookQuote} = props;

  return (
    <div className='page'>
      <div className='header'>
        Let the hands of fate guide you
      </div>
      <div>
        Rick Rubin keeps a library of books in his recording studio. If you're stuck, grab a book and find a random quote
        and let it inspire you. Rubin also said,
        <br/>
        {rubinQuote}
        <br/>
        <br/>
        May this quote help you resolve your creative conundrum:
        <br/>
        "{ bookQuote.quote }" - <span><i>{ bookQuote.author }</i></span>
      </div>
    </div>
  )
}

export default RubinPresenter;
