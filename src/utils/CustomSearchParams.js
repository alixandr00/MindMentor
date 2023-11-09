import { useSearchParams as useBaseSearchParams } from 'react-router-dom'

export function useCustomSearchParams() {
   const [searchParams, setSearchParams] = useBaseSearchParams()

   const setParam = (key, value) => {
      const newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set(key, value)
      setSearchParams(newSearchParams)
   }

   const deleteParam = (key) => {
      const newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.delete(key)
      setSearchParams(newSearchParams)
   }

   return {
      params: searchParams,
      setParam,
      deleteParam,
   }
}
