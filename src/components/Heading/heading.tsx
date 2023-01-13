import { FetchData } from "fetch/fetch";
import { useEffect, useState } from "react";
import {
  TitleContainer,
  TitleText,
  SubheadContainer,
  SubheadText,
  HeadingContainer,
} from "./headingComponents";

interface Data {
  id: number;
  title: string;
  subhead: string;
}

const Heading = ({ jsonFile }) => {
  const [data, setData] = useState<Data[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(jsonFile);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [data]);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <HeadingContainer key={index}>
      <TitleContainer>
        <TitleText className="animate__animated animate__fadeInDown">
          {data[index].title}
        </TitleText>
      </TitleContainer>
      <SubheadContainer>
        <SubheadText className="animate__animated animate__fadeInUp animate__delay-1s">
          {data[index].subhead}
        </SubheadText>
      </SubheadContainer>
    </HeadingContainer>
  );
};

export default Heading;
