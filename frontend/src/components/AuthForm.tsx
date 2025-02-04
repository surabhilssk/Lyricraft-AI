import { Link } from "react-router-dom";
import { BackgroundGradient } from "./ui/background-gradient";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

interface AuthFormProps {
  headingText: string;
}

export const AuthForm = ({ headingText }: AuthFormProps) => {
  return (
    <div>
      <BackgroundGradient
        children={
          <div className="bg-gray-900 min-h-[25rem] min-w-fit max-w-sm border rounded-3xl">
            <div className="px-6 text-gray-100 text-center">
              <div className="font-medium text-3xl mt-6">
                {headingText === "signup" ? "Sign Up" : "Sign in"}
              </div>
              <div>
                {headingText === "signup" ? (
                  <div className="text-slate-400">
                    Already have an account?{" "}
                    <Link to="/signin" className="underline font-normal">
                      Sign in
                    </Link>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    Don't have an account?{" "}
                    <Link to="/signup" className="underline font-normal">
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
              <div className="text-start mt-4">
                <Form label="Name" placeholder="Enter your name" type="name" />
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
              </div>
            </div>
            <div className="text-center mt-[22px]">
              <InteractiveHoverButton>
                {headingText === "signup" ? "Sign Up" : "Sign in"}
              </InteractiveHoverButton>
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
    <div className="mt-2">
      <div>
        <Label className="font-light text-sm">{label}</Label>
        <Input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};
