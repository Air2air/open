import { COLOR_BASE } from "styles/Constants";
import BannerVideo from "components/Banner/bannerVideo";
import { BannerText } from "components/Banner/bannerText";
import { useQuery } from "react-query";
import BannerLoading from "components/Banner/bannerLoading";
import Button from "components/Button/button";
import Container from "components/Container/container";
import {
  ContactItemWrapper,
  ContactContent,
  ContactTitle,
  ContactItemDesc,
  ContactItemLink,
  ContactImageWrapper,
} from "components/Contact/contactComponents";
import Spacer from "components/Spacer/spacer";

const dataSource = "/data/dataContact.json";
const queryName = "contact";

const ContactPage = () => {
  const fetchData = async () => {
    const res = await fetch(dataSource, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.json();
  };
  const { data, status } = useQuery(queryName, fetchData);

  const backgroundImageString = (photo) => "url(/images/content/" + photo + ")";

  return (
    <>
      {status === "error" && (
        <>
          <BannerLoading />
          <BannerText text="error" />
        </>
      )}
      {status === "loading" && (
        <>
          <BannerLoading />
          <BannerText text="casestudies" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={769227014}
            overlayOpacity={0.1}
            overlayColor={COLOR_BASE}
            typing={true}
          />
          <BannerText text="contact" />

          {data && data.length > 0
            ? data.map((props) => (
                <Container
                  key={props.id}
                  backgroundColor={props.backgroundColor}
                >
                  <ContactItemWrapper>
                    <ContactContent>
                      <ContactTitle>{props.shortName}</ContactTitle>
                      <ContactItemDesc>{props.address}</ContactItemDesc>
                      <Spacer height={15} backgroundColor={props.backgroundColor}/>
                      <Button
                        to="https://www.linkedin.com/company/eleven-health"
                        text="LinkedIn"
                      />
                      <Spacer height={15} backgroundColor={props.backgroundColor}/>
                      <ContactItemLink href={`mailto:${props.email}`}>
                        {props.email}
                      </ContactItemLink>
                    </ContactContent>
                    <ContactImageWrapper
                      className="bgImage"
                      style={{
                        backgroundImage: backgroundImageString(props.photo),
                      }}
                    />
                  </ContactItemWrapper>
                </Container>
              ))
            : null}
        </>
      )}
    </>
  );
};

export default ContactPage;
