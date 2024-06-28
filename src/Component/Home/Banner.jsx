import { FaClock, FaLocationDot } from "react-icons/fa6";
import banner from "../../assets/banner.png";
import { MdDateRange } from "react-icons/md";

const Banner = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="h-[500px] bg-cover bg-no-repeat bg-center opacity-100"

      >
        <div className="h-full flex items-center">
          <div className="md:w-1/2 mx-auto text-center">
          <h2 className="text-white text-5xl font-bold font-kanit text-opacity-100">Hari & Swathi's Wedding</h2>
          <p className="text-xl text-white font-bold text-center flex items-center justify-center mt-3">
          <FaLocationDot />
            Kurnool Town Hall, Andhra Pradesh, India</p>
            <p className="flex items-center justify-center text-xl font-bold text-white"><MdDateRange /> 7 July 2024 Sunday</p>
            <p className="flex items-center justify-center text-xl font-bold text-white"><FaClock /> 1.00 P.M</p>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default Banner;
