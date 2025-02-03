import { useSearchParams } from 'next/navigation';
import fetchAnimals from '@/lib/fetchAnimals';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const [searchedPets, setSearchedPets] = useState([]);

  useEffect(() => {


    
  }, [type])

  return (<>search results page</>);}


export default SearchPage;
