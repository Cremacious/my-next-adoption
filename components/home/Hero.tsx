import Image from 'next/image';
import heroimage from '@/assets/images/heroimage.jpg';
import Search from '@/components/home/Search';

const Hero = () => {
  return (
    <section className="bg-blue-400 text-black">
      <div className="flex flex-col md:flex-row justify-evenly">
        <h2>Find your next best friend!!</h2>
        <Search />
        <Image src={heroimage} alt="hero image" height={50} />
      </div>
    </section>
  );
};

export default Hero;
