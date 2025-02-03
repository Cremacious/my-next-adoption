'use client';
import { useSearchParams } from 'next/navigation';
import fetchAnimals from '@/lib/fetchAnimals';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const [searchedPets, setSearchedPets] = useState([]);

  const searchAnimals = async (type) => {
    try {
      const data = await fetchAnimals(type);
      const results = data.data;
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchSearchedAnimals = async () => {
      const cachedResults = localStorage.getItem(`animals_${type}`);
      if (cachedResults) {
        console.log('using cached results');
        setSearchedPets(JSON.parse(cachedResults));
      } else {
        const animals = await searchAnimals(type);
        console.log('results', animals);
        setSearchedPets(animals);
        localStorage.setItem(`animals_${type}`, JSON.stringify(animals));
      }
    };
    fetchSearchedAnimals();
  }, [type]);

  return <>search results page</>;
};

export default SearchPage;
