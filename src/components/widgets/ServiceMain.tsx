// pages/portfolio.js

import Services from "@/components/widgets/Services";
import Wrapper from "../shared/Wrapper";
import { servicesData } from "@/components/data/servicesData";



const serviceMain = () => {
  return (
    <section 
    id="services"
    className="pt-14 pb-10 bg-black"
    >
      <Wrapper>

        <div className="pt-10 pb-10">
      <div className="items-center   md:flex-row item-center text-white ">
            <div className="text-center ">
            <h1 className="text-center font-bold md:text-4xl  text-3xl"> Services</h1>
            <hr className="border-L_primary m-auto w-24 border-t-4 rounded-sm "></hr>
            </div>
        </div>



          
    <div className="pt-10">
        {servicesData.map((services) => (
            <Services key={services.id} services={services} />
        ))}
    </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default serviceMain;
