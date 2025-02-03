'use client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const Search = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const animalType = formData.get('animalType') as string;
    if (animalType !== 'all') {
      const query = '?type=' + animalType;
      router.push('/pets/search' + query);
    } else {
      router.push('/pets');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="animalType" id="animalType">
          <option value="all">All</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
        </select>
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

export default Search;
