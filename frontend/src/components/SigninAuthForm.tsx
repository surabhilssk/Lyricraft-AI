import { Link } from "react-router-dom";
import { BackgroundGradient } from "./ui/background-gradient";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export const SigninAuthForm = () => {
  return (
    <div>
      <BackgroundGradient
        children={
          <div className="bg-gray-900 min-h-[25rem] min-w-[19rem] max-w-sm border rounded-3xl">
            <div className="px-6 text-gray-100 text-center">
              <div className="font-medium text-3xl mt-6">Sign In</div>
              <div>
                <div className="text-slate-400 mt-2">
                  Don't have an account?{" "}
                  <Link to="/signup" className="underline font-normal">
                    Sign up
                  </Link>
                </div>
              </div>
              <div className="text-start mt-10">
                <div>
                  <Form
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Form
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="text-center mt-[25px]">
                    <InteractiveHoverButton className="text-black">
                      Sign in
                    </InteractiveHoverButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

const Form = ({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) => {
  return (
    <div className="mt-3">
      <div>
        <Label className="font-light text-sm">{label}</Label>
        <Input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};
