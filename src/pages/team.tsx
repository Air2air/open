
import PageBanner from "../components/PageBanner/pageBanner";
import Team from "../components/Team/team";

const pageTitle = "Elevens Team";
const pageSubTitle =
  "We're a team of seasoned cyber entrepreneurs, operators and investors offering first-hand experience, global perspective and rare connections for transformative cybersecurity companies.";
const video =
"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rsUQQw39cl52esufb/videoblocks-abstract-dna-pack-2021-09-08-19-33-23-utc-3_sfgtv1cpc__a58044aee90f7390d9e398a567ab69e8__P360.mp4";
const overlayOpacity = 0.7
const overlayColor = 'blue'

const TeamPage = (section) => {
  return (
    <>
      <PageBanner
        pageTitle={pageTitle}
        pageSubTitle={pageSubTitle}
        video={video}
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
      />
      <Team />

    </>
  );
};

export default TeamPage;

