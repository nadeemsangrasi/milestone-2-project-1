import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import Heading from "../shared/Heading";

const HomeSection = () => {
  return (
    <Wrapper>
      <div className="space-y-10 lg:flex justify-between w-full px-10 mt-16 gap-4">
        <div className="w-full lg:w-1/2  mt-16">
          <Heading text="Welcome to Our Website" className="text-5xl" />

          <p className="text-sm ms:text-lg font-medium py-2 pb-4">
            We are a team of passionate developers dedicated to creating
            innovative software solutions. With years of experience in the
            field, we specialize in building robust and user-friendly
            applications. Whether you need a custom web application, mobile app,
            or e-commerce platform, we have the expertise to deliver
            high-quality results.
          </p>
          <Button
            text="Get Started"
            className="mx-auto block my-2 ms:my-0 sm:inline sm:mx-0"
          />
        </div>
        <div className="lg:w-1/2 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="developers team image"
            className="w-full  rounded-xl hover:scale-110 duration-500 hover:duration-500 hover:rounded-lg"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
