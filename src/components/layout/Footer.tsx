import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import logo from "@/assets/images/Artboard 1.png";

const Footer = () => {
  return (
    <footer className=" pt-5 border border-black bg-black ">
      <Wrapper>
        <div className="text-white grid grid-cols-12  ">
          {/* left */}
          <div className=" justify-between   py-2 px-5 items-center col-span-12 md:col-span-6">
            {/* logo */}
            <Image className="w-52 h-32" src={logo} alt="SpotLinks" />
            <p className=" text-sm md:text-base pl-4 text-slate-600">
              PIONEERING EXCELLENCE IN<br></br> SOFTWARE SOLUTION
            </p>
            <div className="mt-10">
              <div className="h-full flex items-center  mb-5">
                <form className="w-96 relative">
                  <input
                    type="email"
                    placeholder=""
                    className="w-full text-gray-800 p-4 h-12 rounded-full focus:outline-none 
                         border-L_primary border-4 bg-black"
                  />
                  <button
                    type="submit" // Fix: Changed "Submit" to "submit"
                    className="bg-L_primary px-4 py-2  rounded-full text-white
                           absolute top-[6px]  right-[6px] text-sm">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* middle */}
          <div className="sm:hidden"></div>
          <div className=" col-span-6 md:col-span-3 md:px-2 py-4 px-6">
            <h3 className="font-bold text-lg mt-8">EXPLORE</h3>
    <ul className="mt-2  ml-auto w-full sm:w-auto">
      <li className="text-slate-400 mt-3">
        <span className="sm:inline-block h-2 w-2 bg-L_primary mr-2 rounded-full"></span>
        ABOUT US
      </li>
      <hr className="border-L_primary border-2 sm:border-none bg-none "></hr>
      <li className="text-slate-400 mt-3">
        <span className="sm:inline-block h-2 w-2 bg-L_primary mr-2 rounded-full"></span>
        SERVICES
      </li>
      <hr className="border-L_primary border-2 sm:border-none bg-none "></hr>
      <li className="text-slate-400 mt-3">
        <span className="sm:inline-block h-2 w-2 bg-L_primary mr-2 rounded-full"></span>
        PORTFOLIO
      </li>
      <hr className="border-L_primary border-2 sm:border-none bg-none "></hr>
      <li className="text-slate-400 mt-3">
        <span className="sm:inline-block h-2 w-2 bg-L_primary mr-2 rounded-full"></span>
        TESTIMONIALS
      </li>
      <hr className="border-L_primary border-2 sm:border-none bg-none "></hr>
      <li className="text-slate-400 mt-3">
        <span className="sm:inline-block h-2 w-2 bg-L_primary mr-2 rounded-full"></span>
        HELP & SUPPORT
      </li>
      <hr className="border-L_primary border-2 sm:border-none bg-none "></hr>
    </ul>


          </div>

          {/* end */}
          <div className="col-span-6 md:col-span-3 md:px-0 md:ml-0 md:pl-0 md:mr-20 py-4  ml-14 pl-6 sm:pl-0 sm:ml-0 w-full  ">
                   {/* output */}
                   <div className="basis-5/11 mt-8 ">
            {/* phone */}
            <div>
        <h3 className="text-gray-400 font-medium">Phone</h3>
        <p className="text-white font-bold ">666 888 000</p>
            </div>

        {/* address */}
        <div className="mt-6">
        <h3 className="text-gray-400 font-medium">Address</h3>
        <p className="text-white font-bold ">1234 Street Name
        <br></br> City Name , country name</p>
        </div>

        {/* email */}
        <div className="mt-6">
        <h3 className="text-gray-400 font-medium">Email Address</h3>
        <p className="text-white font-bold ">NEEDHELP@SPOTLINK.COM </p>
          </div>
          </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
