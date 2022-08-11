import React from 'react'
import { ResultsInterface } from '../types/interface';
import { Thumbnail } from './Thumbnail';

interface IProps {
    results: any;
}

export const Results = ({ results }: IProps) => {
  return (
    <div>
      {results.map((result: ResultsInterface) => (
        <Thumbnail 
          key={result.id}
          result={result} 
        />
      ))}
    </div>
  )
}