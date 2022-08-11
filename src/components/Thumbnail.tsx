import Image from 'next/image'
import React from 'react'

import { ResultsInterface } from '../types/interface'
import { ThumbUpIcon } from "@heroicons/react/outline"

interface IProps { 
    result: ResultsInterface
}

export const Thumbnail = ({ result }: IProps) => {
  const BASE_POSTER_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <div className="group cursor-pointer p-2 transiton duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image 
            layout="responsive"
            height={1080}
            width={1920}
            src={
                `${BASE_POSTER_URL}${result.backdrop_path || result.poster_path} ` || 
                `${BASE_POSTER_URL}${result.poster_path}`
            }
            alt="Movie poster"
        />
        <div className="p-2">
            <p className="truncate max-w-md">
                {result.overview}
            </p>

            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                {result.title || result.original_title}
            </h2>

            <p className="flex items-center opacity-0 capitalize group-hover:opacity-100">
                {result.media_type && `${result.media_type} •`}{" "}

                {result.release_date || "Soon"} •{" "}

                <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
            </p>
        </div>
    </div>
  )
}