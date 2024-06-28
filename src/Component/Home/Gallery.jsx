import { Slide } from 'react-awesome-reveal';
import pre1 from '../../assets/pre-1.jpeg'
import pre2 from '../../assets/pre-2.jpeg'
import pre3 from '../../assets/pre-3.jpeg'
import pre4 from '../../assets/pre-3jpeg.jpeg'
const Gallery = () => {
  return (
    <div id='gallery' className="mt-36">
      <div>
      <Slide direction="up" duration="2000" triggerOnce="false">
        <h2 className="text-center text-5xl font-bold text-blue-600 font-kanit underline">
          Gallery
        </h2>
        <p className="text-center text-blue-600">Photo Shoot of pre-wedding </p>
        </Slide>
       
      </div>
      <div className="mt-10 grid md:grid-cols-4 mx-auto gap-5 px-20">
        <Slide direction='up'>
        <img className='w-56 h-40' src={pre1} alt="" />
        <img className='w-56 h-40' src={pre2} alt="" />
        <img className='w-56 h-40' src={pre3} alt="" />
        <img className='w-56 h-40' src={pre4} alt="" />
      </Slide>
      </div>
    </div>
  );
};

export default Gallery;
