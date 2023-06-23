"use client"
import { useEffect, useState } from 'react'
import fetchApi from '@/services/fetchApi'

export default function Home() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const handeClick = () => {
    fetchApi.get('characters', {
      params: {
        nameStartsWith: search
      }
    }).then(response => console.log(response.data)
    ).catch(err => console.log(err)
    )
  }
  return (
    <>
   <h1>Olá mundo</h1>
   <input type='text' onChange={({ target }) => setSearch(target.value)}/>
   <button type='button' onClick={handeClick}>Search</button>
   </>
  )
}
