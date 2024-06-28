import groom from "../../assets/groom.jpeg";
import bride from "../../assets/bride.jpeg";
const AboutUs = () => {
  return (
    <section className="mt-36">
      <div>
        <h2 className="text-center text-5xl font-bold text-blue-600 font-kanit underline">
          About Us
        </h2>
      </div>
      <div className="mt-20">
        {/* bride and groom */}
        <div className="flex flex-col md:flex-row items-center justify-around">
          {/* groom */}
          <div className="flex flex-col items-center">
            <h4 className="text-center text-2xl text-blue-600 underline mb-5 font-kanit">
              Groom
            </h4>
            <img className="w-52 h-60 rounded-md" src={groom} alt="" />
            <div className="mt-5 text-xl">
              <h3> Name: Hari Prasad</h3>
              <p>Address: Guntur, Andhra Pradesh, India</p>
              <p>Phone: +91 98708765410</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-center text-2xl text-blue-600 underline mb-5 font-kanit">
              Bride
            </h4>
            <img className="w-52 h-60 rounded-md" src={bride} alt="" />
            <div className="mt-5 text-xl">
              <h3> Name: Swathi Deekshith</h3>
              <p>Address: Kurnool, Andhra Pradesh, India</p>
              <p>Phone: +91 98703303030</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-center text-xl text-blue-600 font-bold underline italic font-kanit mb-10">
            Love Story
          </h2>
          <div className="px-20 space-y-3">
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                A Chance Meeting
              </h2>
              <p>
                Hari and Swathi first met at a bustling café during a sudden
                rainstorm. With no seats left, they shared a table and quickly
                found common ground in their love for books and music.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                The First Date
              </h2>
              <p>
                Hari and Swathi first met at a bustling café during a sudden
                rainstorm. With no seats left, they shared a table and quickly
                found common ground in their love for books and music.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                Growing Together
              </h2>
              <p>
                From coffee dates to weekend getaways, Hari and Swathi's
                connection grew deeper with each passing day. Their love was
                built on shared dreams, endless laughter, and mutual respect.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-600">The Proposal</h2>
              <p>
                On a quiet evening at their favorite spot by the lake, Hari
                proposed with a heartfelt speech that left Swathi in tears of
                joy. She said yes, marking the beginning of their forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
