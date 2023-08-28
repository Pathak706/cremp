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
import { Link, useNavigate } from "react-router-dom";

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
import buyerSignup from "assets/images/illustrations/buyer-signup.png";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  userName: Yup.string().required("Required"),
  registeredTradeName: Yup.string().required("Required"),
  registeredOfficeAddress: Yup.string().required("Required"),
  contactNumber: Yup.string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(10, "it must br 10 digit long only"),
  email: Yup.string().required("Required").email("Invalid email address"),
  contactNumberOTP: Yup.string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(6, "it must br 6 digit long only"),
  emailOTP: Yup.string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(6, "it must br 6 digit long only"),
});

function BuyerIllustration() {
  const [isContactOTPSent, setIsContactOTPSent] = useState(false);
  const [isEmailOTPSent, setIsEmailOTPSent] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      registeredTradeName: "",
      registeredOfficeAddress: "",
      contactNumber: "",
      email: "",
      emailOTP: "",
      contactNumberOTP: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        userName: values.userName,
        registeredTradeName: values.registeredTradeName,
        registeredOfficeAddress: values.registeredOfficeAddress,
        contactNumber: values.contactNumber,
        email: values.email,
        emailOTP: values.contactNumberOTP,
        contactNumberOTP: values.emailOTP,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://cremp-json-server-production.up.railway.app//buyer/signup", requestOptions)
        .then((response) => response.text())
        .then((result) => navigate('/authentication/sign-in/illustration'))
        .catch((error) => console.log("error", error));
    },
  });

  return (
    <IllustrationLayout
      title="Create your account as a buyer"
      description="Lorem Ipsum is simply dummy text of the"
      illustration={{
        image: buyerSignup,
        title: "Your journey starts here",
        description:
          "Just as it takes a company to sustain a product, it takes a community to sustain a protocol.",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xl={12} sx={{ mx: "auto" }}>
            <SoftBox>
              <SoftInput
                size="medium"
                onIconClick={() => formik.setFieldValue("userName", "")}
                placeholder="Name of user"
                icon={
                  !(formik.touched.userName && Boolean(formik.errors.userName)) && {
                    component: "clear",
                    direction: "right",
                  }
                }
                type="text"
                {...formik.getFieldProps("userName")}
                error={formik.touched.userName && Boolean(formik.errors.userName)}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <SoftTypography variant="caption" color="error">
                  {formik.errors.userName}
                </SoftTypography>
              ) : (
                <SoftTypography variant="caption">Supporting Text</SoftTypography>
              )}
            </SoftBox>
          </Grid>
          <Grid item xl={12} sx={{ mx: "auto" }}>
            <SoftBox>
              <SoftInput
                size="medium"
                onIconClick={() => formik.setFieldValue("registeredTradeName", "")}
                placeholder="Registered Trade Name"
                icon={
                  !(
                    formik.touched.registeredTradeName && Boolean(formik.errors.registeredTradeName)
                  ) && { component: "clear", direction: "right" }
                }
                type="text"
                {...formik.getFieldProps("registeredTradeName")}
                error={
                  formik.touched.registeredTradeName && Boolean(formik.errors.registeredTradeName)
                }
              />
              {formik.touched.registeredTradeName && formik.errors.registeredTradeName ? (
                <SoftTypography variant="caption" color="error">
                  {formik.errors.registeredTradeName}
                </SoftTypography>
              ) : (
                <SoftTypography variant="caption">Supporting Text</SoftTypography>
              )}
            </SoftBox>
          </Grid>
          <Grid item xl={12} sx={{ mx: "auto" }}>
            <SoftBox>
              <SoftInput
                size="medium"
                onIconClick={() => formik.setFieldValue("registeredOfficeAddress", "")}
                placeholder="Registered Office Address"
                icon={
                  !(
                    formik.touched.registeredOfficeAddress &&
                    Boolean(formik.errors.registeredOfficeAddress)
                  ) && { component: "clear", direction: "right" }
                }
                type="text"
                {...formik.getFieldProps("registeredOfficeAddress")}
                error={
                  formik.touched.registeredOfficeAddress &&
                  Boolean(formik.errors.registeredOfficeAddress)
                }
              />
              {formik.touched.registeredOfficeAddress && formik.errors.registeredOfficeAddress ? (
                <SoftTypography variant="caption" color="error">
                  {formik.errors.registeredOfficeAddress}
                </SoftTypography>
              ) : (
                <SoftTypography variant="caption">Supporting Text</SoftTypography>
              )}
            </SoftBox>
          </Grid>
          <Grid item xl={12} sx={{ mx: "auto" }}>
            <SoftBox>
              <SoftInput
                size="medium"
                onIconClick={() => {
                  if (!formik.values.contactNumber || formik.errors.contactNumber) {
                    formik.setFieldTouched("contactNumber", true, false); // The field is touched
                    formik.setFieldError("contactNumber", "Required"); // Set the error message
                  } else {
                    setIsContactOTPSent(true);
                  }
                }}
                placeholder="Contact Number"
                icon={
                  !(formik.touched.contactNumber && Boolean(formik.errors.contactNumber)) && {
                    component: "send",
                    direction: "right",
                  }
                }
                type="tel"
                {...formik.getFieldProps("contactNumber")}
                error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
              />
              {formik.touched.contactNumber && formik.errors.contactNumber ? (
                <SoftTypography variant="caption" color="error">
                  {formik.errors.contactNumber}
                </SoftTypography>
              ) : (
                <SoftTypography variant="caption">Verify via OTP</SoftTypography>
              )}
            </SoftBox>
          </Grid>
          {isContactOTPSent && (
            <Grid item xl={12} sx={{ mx: "auto" }}>
              <SoftBox>
                <SoftInput
                  size="medium"
                  onIconClick={() => console.log("send otp")}
                  placeholder="Verify Contact Number OTP"
                  icon={
                    !(
                      formik.touched.contactNumberOTP && Boolean(formik.errors.contactNumberOTP)
                    ) && {
                      component: "security",
                      direction: "right",
                    }
                  }
                  type="text"
                  {...formik.getFieldProps("contactNumberOTP")}
                  error={formik.touched.contactNumberOTP && Boolean(formik.errors.contactNumberOTP)}
                />
                {formik.touched.contactNumberOTP && formik.errors.contactNumberOTP ? (
                  <SoftTypography variant="caption" color="error">
                    {formik.errors.contactNumberOTP}
                  </SoftTypography>
                ) : (
                  <SoftTypography variant="caption">Enter OTP sent via SMS</SoftTypography>
                )}
              </SoftBox>
            </Grid>
          )}
          <Grid item xl={12} sx={{ mx: "auto" }}>
            <SoftBox>
              <SoftInput
                size="medium"
                onIconClick={() => {
                  if (!formik.values.email || formik.errors.email) {
                    formik.setFieldTouched("email", true, false); // The field is touched
                    formik.setFieldError("email", "Required"); // Set the error message
                  } else {
                    setIsEmailOTPSent(true);
                  }
                }}
                placeholder="Email ID"
                icon={
                  !(formik.touched.email && Boolean(formik.errors.email)) && {
                    component: "send",
                    direction: "right",
                  }
                }
                type="email"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email ? (
                <SoftTypography variant="caption" color="error">
                  {formik.errors.email}
                </SoftTypography>
              ) : (
                <SoftTypography variant="caption">Verify via OTP</SoftTypography>
              )}
            </SoftBox>
          </Grid>
          {isEmailOTPSent && (
            <Grid item xl={12} sx={{ mx: "auto" }}>
              <SoftBox>
                <SoftInput
                  size="medium"
                  onIconClick={() => console.log("verify otp")}
                  placeholder="Verify Email ID OTP"
                  icon={
                    !(formik.touched.emailOTP && Boolean(formik.errors.emailOTP)) && {
                      component: "security",
                      direction: "right",
                    }
                  }
                  type="text"
                  {...formik.getFieldProps("emailOTP")}
                  error={formik.touched.emailOTP && Boolean(formik.errors.emailOTP)}
                />
                {formik.touched.emailOTP && formik.errors.emailOTP ? (
                  <SoftTypography variant="caption" color="error">
                    {formik.errors.emailOTP}
                  </SoftTypography>
                ) : (
                  <SoftTypography variant="caption">Enter OTP sent via Email</SoftTypography>
                )}
              </SoftBox>
            </Grid>
          )}
          <Grid item xl={12} sx={{ mx: "auto" }}>
            <SoftBox>
              <SoftButton color="secondary" fullWidth type="submit">
                Continue
              </SoftButton>
            </SoftBox>
          </Grid>
        </Grid>
      </form>
    </IllustrationLayout>
  );
}

export default BuyerIllustration;
