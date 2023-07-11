import { Link } from "react-router-dom";

import { SIGNUP, FORGOT_PASSWORD } from "../../../routes/CONSTANTS";
import { Button, FormInput, Loader } from "../../../components";

const LoginView = ({ isLoading, formik }) => {
  return (
    <div className="w-full m-auto max-w-[1000px]">
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div>
          <FormInput
            size="lg"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errors={formik.errors.email}
            touched={formik.touched.email}
            className="w-full"
            label="Email or Phone Number"
          />
        </div>
        <div>
          <FormInput
            size="lg"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errors={formik.errors.password}
            touched={formik.touched.password}
            className="w-full"
            label="Enter Password"
          />
        </div>
        <div className="flex items-center justify-center pt-4 pb-10">
          <Button
            type="submit"
            variant="full"
            size="lg"
            className="text-[12px]"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Log In"}
          </Button>
        </div>
      </form>
      <p className="font-['Montserrat'] text-[14px] text-[#666666] text-center font-bold mb-6">
        Don't have an account?{" "}
        <Link to={SIGNUP}>
          <span className="text-secondary">Sign Up</span>
        </Link>
      </p>
      <p className="font-['Montserrat'] text-[14px] text-secondary text-center font-bold">
        <Link to={FORGOT_PASSWORD}>
          <span>Forgot Password?</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
