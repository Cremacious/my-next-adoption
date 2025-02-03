

async function fetchAnimals(animalType: string) {
    try {
      console.log('fetching animals');
      const response = await fetch(
        `https://api.rescuegroups.org/v5/public/animals/search/available/${animalType}`,
        {
          method: 'POST',
          headers: {
            Authorization: process.env.NEXT_PUBLIC_PET_API_KEY || '',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filterRadius: {
              postalcode: '34233',
              distance: 10,
              units: 'miles',
            },
          }),
        }
      );
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error;
    }
  }
  
  export default fetchAnimals;