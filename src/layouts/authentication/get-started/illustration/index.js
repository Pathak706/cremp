/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout/variant";

// Images
// import rocket from "assets/images/illustrations/rocket-white.png";
import getStarted from "assets/images/illustrations/get-started.png";
import BuyerOnboard from "assets/images/icons/buyer-onboard.svg";
import VendorOnboard from "assets/images/icons/vendor-onboard.svg";

function GetStartedIllustration() {
  const [agreement, setAgreemnet] = useState(true);

  // const handleSetAgremment = () => setAgreemnet(!agreement);

  return (
    <IllustrationLayout
      title="Get Started"
      description="Lorem Ipsum is simply dummy text of the"
      illustration={{
        image: getStarted,
        title: "Your journey starts here",
        description:
          "Just as it takes a company to sustain a product, it takes a community to sustain a protocol.",
      }}
    >
      <SoftBox
        mt={2}
        display={{ xs: "none", lg: "flex" }}
        justifyContent="center"
        alignItems="center"
        color="white"
        bgColor="white"
        borderRadius="lg"
        shadow="lg"
        opacity={1}
        p={2}
        sx={{ cursor: "pointer" }}
        component={Link}
        to="/authentication/buyer/signup"
      >
        <SoftBox
          component="img"
          src={BuyerOnboard}
          alt="chat-illustration"
          width="100%"
          maxWidth="80px"

        />
        <SoftBox p={1}>
          <SoftTypography variant="body2" color="secondary" fontWeight="bold">
            I’m a buyer
          </SoftTypography>
          <SoftTypography variant="subtitle2" color="secondary" fontWeight="regular">
            Lorem Ipsum is simply dummy text of the
          </SoftTypography>
        </SoftBox>
      </SoftBox>

      <SoftBox
        mt={2}
        display={{ xs: "none", lg: "flex" }}
        justifyContent="center"
        alignItems="center"
        color="white"
        bgColor="white"
        borderRadius="lg"
        shadow="lg"
        opacity={1}
        p={2}
        sx={{ cursor: "pointer" }}
        component={Link}
        to="/authentication/vednor/signup"
      >
        <SoftBox
          component="img"
          src={VendorOnboard}
          alt="chat-illustration"
          width="100%"
          maxWidth="80px"
        />
        <SoftBox p={1}>
          <SoftTypography variant="body2" color="secondary" fontWeight="bold">
            I’m a seller
          </SoftTypography>
          <SoftTypography variant="subtitle2" color="secondary" fontWeight="regular">
            Lorem Ipsum is simply dummy text of the
          </SoftTypography>
        </SoftBox>
      </SoftBox>

      <SoftBox mt={3} textAlign="center">
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Already have an account?&nbsp;
          <SoftTypography
            component={Link}
            to="/authentication/sign-in/illustration"
            variant="button"
            color="main"
            fontWeight="bold"
          >
            Log in
          </SoftTypography>
        </SoftTypography>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default GetStartedIllustration;
