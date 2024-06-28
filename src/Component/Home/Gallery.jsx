import pre1 from '../../assets/pre-1.jpeg'
import pre2 from '../../assets/pre-2.jpeg'
import pre3 from '../../assets/pre-3.jpeg'
import pre4 from '../../assets/pre-3jpeg.jpeg'
const Gallery = () => {
  return (
    <div className="mt-36">
      <div>
        <h2 className="text-center text-5xl font-bold text-blue-600 font-kanit underline">
          Gallery
        </h2>
        <p className="text-center text-blue-600">Photo Shoot of pre-wedding </p>
      </div>
      <div className="mt-10 grid md:grid-cols-4 mx-auto gap-5 px-20">
        <img className='w-56 h-40' src={pre1} alt="" />
        <img className='w-56 h-40' src={pre2} alt="" />
        <img className='w-56 h-40' src={pre3} alt="" />
        <img className='w-56 h-40' src={pre4} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
