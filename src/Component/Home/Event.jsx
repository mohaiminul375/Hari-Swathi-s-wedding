import { Slide } from "react-awesome-reveal";

const Event = () => {
  return (
    <section id="event" className="mt-36">
      <div>
        <Slide direction="up" duration="2000" triggerOnce="false">
          <h2 className="text-center text-5xl font-bold text-blue-600 font-kanit underline">
            Event Details
          </h2>
        </Slide>
      </div>
      {/* event */}
      <div className="flex flex-col gap-10 md:flex-row justify-evenly mt-10 ">
        <Slide direction="left" duration="2000" triggerOnce="false">
          <div className="md:w-96 border border-blue-600 bg-blue-600 text-white p-5 text-center font-bold rounded-md space-y-2">
            <h3 className="text-xl">Marriage Ceremony:</h3>
            <p className="text-base">
              Date&Time: 7 July 2024 Sunday at 1.00 P.M
            </p>
            <p className="text-base">
              Location: Kurnool Town Hall, Andhra Pradesh, India
            </p>
          </div>
        </Slide>
        <Slide direction="right" duration="2000" triggerOnce="false">
          <div className="md:w-96 border border-blue-600 bg-blue-600 text-white p-5 text-center font-bold rounded-md space-y-2">
            <h3 className="text-xl">Reception Ceremony:</h3>
            <p className="text-base">
              Date&Time: 9 July 2024 Tuesday at 5.00 P.M
            </p>
            <p className="text-base">
              Location: Guntur Town Hall, Andhra Pradesh, India
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Event;
