

import setBodyColor from "../utils/setBodyColor";
// import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { BANNER_HEIGHT_STANDARD_PX, COLOR_BASE, COLOR_BASE_TEXT } from "../styles/Constants";

const pageVideo =
  "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NIHmZbghlilb1qj7b/videoblocks-bacteria-virus-or-germs-microorganism-cells-under-microscope-with-depth_huxxzteyi__85fcc74c9b372b7e15a77bcaa433e568__P360.mp4";

const ContactPage = () => {
  setBodyColor({ color: COLOR_BASE });

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   message: "",
  // };

  // const initialErrors = {
  //   name: false,
  //   email: false,
  //   message: false,
  // };

  // /**
  //  * Reducer function to useReducer hook
  //  * @param {name, email, message} currentState
  //  * @param {name, email, message} nextState
  //  * @returns next state of values,
  //  */
  // const reducer = (currentState, nextState) => ({
  //   ...currentState,
  //   ...nextState,
  // });

  // const [values, setValues] = useReducer(reducer, initialValues);
  // const [errors, setErrors] = useReducer(reducer, initialErrors);

  // /**
  //  * onChange handler
  //  * @param element
  //  *
  //  */
  // const onChange = (e) => {
  //   setValues({ [e.target.id]: e.target.value });
  // };

  // /**
  //  * focus handler
  //  * @param element
  //  */
  // const onFocus = (e) => {
  //   setErrors({ [e.target.id]: false });
  // };

  // /**
  //  *
  //  * @param data
  //  * @returns URI string encoded
  //  */
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // };

  // /**
  //  * onSubmit handler
  //  * @param element
  //  */
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   /**
  //    * Validation
  //    */
  //   for (const key in values) {
  //     if (!values[key]) {
  //       setErrors({ [key]: true });
  //       return;
  //     }
  //     setErrors({ [key]: false });
  //   }

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": e.target.getAttribute("name"),
  //       ...values,
  //     }),
  //   })
  //     .then(() => console.log("success"))
  //     .catch((e) => console.log("Error :", e));
  // };

  return (
    <>
      <BannerVideo
        pageTitle="Contact Eleven.ai"
        pageDescription="Still completing the contact form validation, filtering and success state"
        pageVideo={pageVideo}
        overlayOpacity={0.8}
        overlayColor={COLOR_BASE}
        textColor={COLOR_BASE_TEXT}
        typing={true}
        height={BANNER_HEIGHT_STANDARD_PX}
      />
{/* 
      <form
        onSubmit={onSubmit}
        name="contact"
        action="/contactSuccess"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>Name</label>
        <input
          type="text"
          id="name"
          onChange={onChange}
          onFocus={onFocus}
          // error={errors.name}
          value={values.name}
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          onChange={onChange}
          onFocus={onFocus}
          // error={errors.email}
          value={values.email}
        />
        <label>Message</label>
        <input
          type="text"
          id="message"
          onChange={onChange}
          onFocus={onFocus}
          // error={errors.message}
          value={values.message}
        />
        <br />
        <button type="submit" color="primary">
          Send
        </button>
      </form> */}
    </>
  );
};

export default ContactPage;
