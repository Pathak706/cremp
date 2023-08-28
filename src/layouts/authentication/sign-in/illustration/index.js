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

import { useContext, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import chat from "assets/images/illustrations/chat.png";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context";


const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid email address"),
  password: Yup.string().required("Required"),
});

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        password: values.password,
        username: values.email,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://cremp-json-server-production.up.railway.app//login", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          authContext.login({access_token: "asdsd", refresh_token: "asdsad", userDetails: result});
        })
        .catch((error) => console.log("error", error));
    },
  });

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: chat,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <SoftBox component="form" role="form" onSubmit={formik.handleSubmit}>
        <SoftBox mb={2}>
          <SoftInput
            type="email"
            placeholder="Email"
            size="large"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          {formik.touched.email && formik.errors.email ? (
            <SoftTypography variant="caption" color="error">
              {formik.errors.email}
            </SoftTypography>
          ) : null}
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput
            type="password"
            placeholder="Password"
            size="large"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
          {formik.touched.password && formik.errors.password ? (
            <SoftTypography variant="caption" color="error">
              {formik.errors.password}
            </SoftTypography>
          ) : null}
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" type="submit" color="info" size="large" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/"
              variant="button"
              color="main"
              fontWeight="medium"
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default Illustration;
