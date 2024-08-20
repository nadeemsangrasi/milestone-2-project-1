import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/images/about-img.jpg";
const AboutPage = () => {
  return (
    <Wrapper>
      <div className=" text-center">
        <Heading text="Explore About Us" />
        <div className="space-y-10 lg:flex justify-between w-full px-10  gap-4">
          <div className="w-full lg:w-1/2  lg:mt-20 pt-4">
            <p className="text-sm sm:text-lg font-medium py-2 pb-4">
              At our company, we're a team of innovative thinkers and passionate
              developers dedicated to crafting exceptional digital experiences.
              With a deep understanding of the latest technologies and trends,
              we specialize in designing and developing custom software
              solutions that drive business growth and success. From bespoke web
              applications to mobile apps and e-commerce platforms, our
              expertise is focused on delivering tailored solutions that meet
              the unique needs of our clients.
            </p>
            <Button
              text="More Information"
              className="mx-auto block my-2 ms:my-0 sm:inline sm:mx-0"
            />
          </div>
          <div className="lg:w-1/2 overflow-hidden hover:rounded-xl rounded-xl">
            <Image
              src={aboutImage}
              alt="developers team image"
              className="w-full  rounded-xl hover:scale-110 duration-500 hover:duration-500 hover:rounded-xl"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
