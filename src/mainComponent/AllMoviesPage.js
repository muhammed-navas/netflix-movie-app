import React from 'react'
import Poster from '../moviesPage/poster/Poster'
function AllMoviesPage() {
  return (
    <div>
      <Poster names='Action' />
      <Poster names='Triller' />
      <Poster  names='Comedy' />
      <Poster names='Investication' />
      <Poster names='Others' />
    </div>
  )
}

export default AllMoviesPage
