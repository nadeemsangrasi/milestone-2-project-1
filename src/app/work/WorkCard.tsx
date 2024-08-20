import SubHeading from "@/components/shared/subHeading";
import { ICard } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkCard = ({ data }: { data: ICard }) => {
  return (
    <div className="w-[60%] mx-auto my-4">
      <SubHeading text={data.title} />
      <h2 className="text-lg pb-4">{data.snug}</h2>
      <div className="overflow-hidden">
        <Link href={data.url}>
          <Image
            src={data.image}
            alt={data.title}
            className="rounded-lg hover:scale-110 hover:duration-500 duration-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
