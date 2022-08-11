import React from 'react'
import { ResultsInterface } from '../types/interface';
import { Thumbnail } from './Thumbnail';

import FlipMove from 'react-flip-move'

interface IProps {
    results: any;
}

export const Results = ({ results }: IProps) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result: ResultsInterface) => (
        <Thumbnail 
          key={result.id}
          result={result} 
        />
      ))}
    </FlipMove>
  )
}