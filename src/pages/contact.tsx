import setBodyColor from "../utils/setBodyColor";
import {
  COLOR_BASE,
  COLOR_BASE_TEXT,
} from "../styles/Constants";
import Callout from "../components/Callout/callOut";
import BannerSpacer from "../components/BannerSpacer/bannerSpacer";


const ContactPage = () => {
  setBodyColor({ color: COLOR_BASE });

  return (
    <>
    <BannerSpacer />
      <Callout
        calloutTitle="Contact page, incomplete"
        calloutText="<p>Silicon Valley</p>

        <p>Stanford, California, United States</p>
        
        
        
        <p>Silicon Valley North</p>
        
        <p>Toronto, Ontario, Canada</p>
        
        
        
        <p>Silicon Hills</p>
        
        <p>Austin, Texas, United States</p>
        
        
        
        
        Email Address<br />
        
        Full Name<br />
        
        Company<br />
        
        Title<br />
        
        Who referred you or How you discovered us<br />
        
        Message<br />
        
        Submit Button</p>"
        backgroundColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        buttonText=""
        buttonTo=""
      />
    </>
  );
};

export default ContactPage;
