"use client"
import { useEffect } from 'react'
import fetchApi from '@/services/fetchApi'

export default function Home() {
  useEffect(() => {
    fetchApi.get('characters', {
      params: {
        nameStartsWith: 'Iron'
      }
    }).then(response => console.log(response.data)
    ).catch(err => console.log(err)
    )
  },[])
  return (
   <h1>Olá mundo</h1>
  )
}
