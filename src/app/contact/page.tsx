"use client";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import SubHead from "@/components/shared/SubHead";
import Wrapper from "@/components/shared/Wrapper";
import { useState } from "react";

const ContactPage = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    console.log(data);
    setData({ email: "", fullName: "", phoneNumber: "", message: "" });
  };
  return (
    <Wrapper>
      <div>
        <div className="text-center">
          <Heading text="Get in touch" />
        </div>
        <div className="shadow-3xl bg-whiyte p-10 rounded-xl w-full sm:w-[900px] mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="text-xl font-semibold">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your full name"
                className="py-2 rounded-lg px-2 text-black"
                value={data.fullName}
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xl font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="py-2 rounded-lg px-2 text-black"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phoneNumber" className="text-xl font-semibold">
                Phone number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
                className="py-2 rounded-lg px-2 text-black"
                value={data.phoneNumber}
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-xl font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                className="py-2 rounded-lg px-2 text-black"
                placeholder="Enter your message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              ></textarea>
            </div>
            <Button text="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
