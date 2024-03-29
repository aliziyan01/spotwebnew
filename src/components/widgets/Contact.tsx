"use client"
import Wrapper from "@/components/shared/Wrapper";
//components
import Button from "@/components/shared/Button";
import React, { useState } from 'react';
const contact = () => {
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Phone: '',
    Servies: '',
    DES: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e.target.value )
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.56.1:8000/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({
          Fname: '',
          Lname: '',
          Email: '',
          Phone: '',
          Servies: '',
          DES: ''
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
    return (
    <section
      style={{
        background:
          "linear-gradient(32deg, rgba(0,0,0,1) 32%, rgba(2,25,111,1) 80%, rgba(7,52,206,1) 100%)",
      }}
      id="contact"
      className="pt-24"
    >
      <Wrapper>
        <div className="items-center   md:flex-row item-center text-white ">
          <div className="text-center ">
            <h1 className="text-center font-black text-3xl md:text-4xl "> CONTACT US</h1>
            <hr className="border-L_primary m-auto w-24 border-t-4 rounded-sm "></hr>
            <p className="mt-3 text-sm md:text-xl">
              Empowering people in a new digital journey
              <br></br>
              with my super services
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-10 basis-8/12  ">
              <div className="md:col-span-5 col-span-10 pt-10 px-4 md:p-4 md:pr-10 ">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  name="Fname"
                  value={formData.Fname}
                  onChange={handleChange}
                  className="text-white border-L_primary border-4 rounded-full px-6 py-[6px] md:py-2 w-full  bg-black  placeholder-white focus:outline-none    "
                  style={{ fontSize: "15Px" }}
                />
              </div>
              <br className="md:hidden"></br>

              <div className="md:col-span-5 col-span-10 px-4 md:p-4 md:pl-10">
                <input
                  type="text"
                  placeholder="LAST NAME"
                  name="Lname"
                  value={formData.Lname}
                  onChange={handleChange}
                  className="text-white border-L_primary border-4 rounded-full px-6 py-[6px] md:py-2 w-full bg-black  placeholder-white focus:outline-none  "
                  style={{ fontSize: "15px" }}
                />
              </div>
              <br className="md:hidden"></br>
              <div className="md:col-span-5 col-span-10  px-4 md:p-4 md:pr-10 ">
                <input
                  type="text"
                  placeholder="EMAIL ADDRESS"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="text-white border-L_primary border-4 rounded-full px-6 py-[6px] md:py-2 w-full  bg-black  placeholder-white focus:outline-none  "
                  style={{ fontSize: "15px" }}
                />
              </div>
              <br className="md:hidden"></br>
              <div className="md:col-span-5 col-span-10 px-4 md:p-4 md:pl-10">
                <input
                  type="text"
                  placeholder="PHONE NUMBER"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="text-white border-L_primary border-4 rounded-full px-6 py-[6px] md:py-2 w-full bg-black  placeholder-white focus:outline-none  "
                  style={{ fontSize: "15px" }}
                />
              </div>
              <br className="md:hidden"></br>
              <div className="col-span-10  p-4">
                <select
                  name="Servies"
                  value={formData.Servies}
                  onChange={handleChange}
                  className="text-white  border-L_primary border-4 rounded-full px-6 py-[6px] md:py-2 w-full  bg-black  placeholder-white focus:outline-none  "
                  style={{ fontSize: "15px" }}
                >
                  <option value="volvo">Choose Services</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>

              </div>
              <div className="p-4 col-span-10">
                <textarea
                  placeholder="Message"
                  name="DES"
                  value={formData.DES}
                  onChange={handleChange}
                  className="text-white border-L_primary border-4 rounded-3xl px-6 py-[6px] md:py-2 w-full h-32 bg-black resize-none  placeholder-white focus:outline-none  "
                  style={{ fontSize: "15px" }}
                /></div>

              <div className="mt-2 flex col-span-10 px-4 justify-center md:justify-end ">

                <input type="submit" value="Submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" />

              </div>
            </div>
          </form>
          {/* right */}
          <div className="basis-4/12  sm:pt-24 md:pt-10 md:pl-16 sm:pl-5  m-auto mt-8 items-center    ">
            {/* phone */}
            <div>
              <h3 className="text-gray-400 font-medium text-sm md:text-[16px]">Phone</h3>
              <p className="text-white font-bold text-sm md:text-[16px] ">666 888 000</p>
            </div>

            {/* address */}
            <div className="sm:mt-16 ">
              <h3 className="text-gray-400 font-medium text-sm md:text-[16px]">Address</h3>
              <p className="text-white font-bold text-sm md:text-[16px] ">1234 Street Name
                <br></br> City Name , country name</p>
            </div>

            {/* email */}
            <div className="sm:mt-16  ">
              <h3 className="text-gray-400 font-medium text-sm md:text-[16px]">Email Address</h3>
              <p className="text-white font-bold text-sm md:text-[16px] ">NEEDHELP@SPOTLINK.COM
              </p>
            </div>

          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default contact;
