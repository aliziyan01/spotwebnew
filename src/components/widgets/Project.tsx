import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    id: number;
    name: string;
    description: string;
    imageUrl: string | StaticImageData;
    weburl: string;
}

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
    return (
        <section id="services">
            <Wrapper>
                
                    <div className="relative overflow-hidden rounded-lg bg-cover bg-center border-L_primary lg:border-4 md:border-2 border-2  h-36 w-44 sm:h-36 sm:w-48 sm:gap-x-4 md:h-52 md:w-[310px] lg:h-64  lg:w-[420px]">
                        <div className="">
                            <Image
                                src={project.imageUrl}
                                alt={project.name}
                                fill
                                className="rounded-md"
                            />
                        </div>
                        <div className="text-white absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-0 transition duration-300 opacity-0 hover:bg-opacity-75 hover:opacity-100">
    <h3 className="lg:text-xl font-bold md:text-lg sm:text-sm">{project.name}</h3>
    <p className="lg:text-sm text-[12px] overflow-y-auto lg:max-h-[140px] md:max-h-[110px] sm:max-h-[100px] break-all px-3 pt-2 "style={{ scrollbarWidth: 'none' }}>{project.description} </p>
    <div className="mt-2 flex flex-row gap-2 mb-2 lg:mb-0 md:mb-0 md:mt-4">
        <Link
            href={project.weburl}
            className="btn text-[11px] px-1 py-1 md:text-[12px] lg:text-[15px] bg-L_primary rounded-full lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-1"
        >
            PREVIEW
        </Link>
        <Link href="#contact" className="btn px-1 py-1 text-[11px] md:text-[12px] lg:text-[15px] bg-L_primary rounded-full lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-1">
            CONTACT US
        </Link>
    </div>
</div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Project;
