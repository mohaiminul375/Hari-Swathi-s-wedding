const Contact = () => {
  return (
    <div id="contact" className="mt-36">
      <div>
        <h2 className="text-center text-5xl font-bold text-blue-600 font-kanit underline">
          Contact Us
        </h2>
        <p className="mt-10 text-xl text-blue-600 text-center">
          If you have any query fell free to submit your message or call
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-12 gap-5">
        <div className="md:col-span-9 border-2 border-blue-600 p-5 bg-blue-600 rounded-md">
          <form className="">
            {/* row1 */}
            <div className="w-full flex flex-col md:flex-row gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="input your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="input your email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="w-full mt-5">
                <label className="label">
                    <span className="text-white">Your Message</span>
                </label>
              <textarea
              placeholder="write your message"
              className="input input-bordered w-full" name="" id=""></textarea>
            </div>
            <button className="mt-5 px-3 py-2 border-2 bg-white rounded-md">Submit</button>
          </form>
        </div>
        <div className="md:col-span-3 text-white space-y-5">
            <div className="bg-blue-600 w-full p-4 text-center rounded-md">
              <h2>Email</h2>
              <p>Hari-swathi@gmail.com</p>
            </div>
            <div className="bg-blue-600 w-full p-4 text-center rounded-md">
              <h2>Phone
              </h2>
              <p>+91 9876543210</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
