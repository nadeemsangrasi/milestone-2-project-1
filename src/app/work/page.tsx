import Heading from "@/components/shared/Heading";
import Wrapper from "@/components/shared/Wrapper";
import { cardData } from "@/data/data";
import { ICard } from "@/types/types";
import React from "react";
import WorkCard from "./WorkCard";

const AboutPage = () => {
  return (
    <Wrapper>
      <div>
        <div className="text-center my-10">
          <Heading text="Check out our work" />
        </div>
        <div className="space-y-8">
          {cardData.map((card: ICard, index: number) => (
            <WorkCard key={index} data={card} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
