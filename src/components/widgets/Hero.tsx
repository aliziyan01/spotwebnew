import Image from "next/image";
import { introData } from "@/components/data/introData";
import Wrapper from "@/components/shared/Wrapper";

const Hero = () => {
  return (
    <section 
      style={{ 
        background: "linear-gradient(228deg, rgba(5,37,148,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(5,37,148,1) 100%)"
      }}
    
    id="about">
      <Wrapper>
        <div className="flex flex-col items-center   sm:flex-row item-center  pb-10  ">
            {/* left side */}
            {
                introData.map((item,i)=>(
          <div key={item.id} className=" flex-1 p-4 ">
            <Image src={item.img} alt="Hero Poster" className="rounded-3xl" />
          </div>
                ))
}
          {/* right side */}
          <div className="flex-1  p-4  ">
            <h1 className="font-bold   sm:text-3xl text-white text-5xl  md:text-4xl lg:text-5xl  flex justify-center ">
              OUR MISSION
            </h1>
            <p className="mt-6 sm:text-[14] text-slate-600 text-[16px] md:text-lg">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quam molestiae ipsam alias culpa incidunt voluptatibus cum optio. Vel natus eligendi ipsam odio eum sequi omnis quam perspiciatis, facilis magni.
            </p>
          </div>
          
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

