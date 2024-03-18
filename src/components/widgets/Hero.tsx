import Image from "next/image";
import { introData } from "@/components/data/introData";
import Wrapper from "@/components/shared/Wrapper";
import '@/components/style/custom.css'

const Hero = () => {
  return (
    <section 
    className="pt-20"
      style={{ 
        background: "linear-gradient(228deg, rgba(5,37,148,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(5,37,148,1) 100%)"
      }}
    
    id="about">
      <Wrapper>
        <div className=" mission flex flex-col items-center   sm:flex-row item-center  pb-10  ">
            {/* left side */}
            {
                introData.map((item,i)=>(
          <div key={item.id} className=" flex-1 p-4 ">
            <Image src={item.img} alt="Hero Poster" className=" mission_imgs rounded-3xl" />
          </div>
                ))
}
          {/* right side */}
          <div className="mission-text flex-1 px-10 p-4  ">
            <h1 className="font-black   sm:text-3xl text-white text-5xl  md:text-4xl lg:text-5xl  flex justify-center ">
              OUR MISSION
            </h1>
            <p className=" text-center font-light mt-6 sm:text-[11px] text-white text-[12px] md:text-[13px] lg:text-[16px] " >
            At Spotlinks Innovations, our mission is twofold: to empower
            businesses with cutting-edge software solutions and to champion the
            creativity and ingenuity of today's youth. We believe in nurturing
            young talent and providing them with a platform to shape the future
            of technology. By fostering a culture of innovation and collaboration,
            we aim to set new trends in the market of software, web, and design,
            driving positive change and delivering unparalleled value to our clients
            and community alike
              
            </p>
          </div>
          
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

