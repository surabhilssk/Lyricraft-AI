import { Link, useNavigate } from "react-router-dom";
import { BackgroundGradient } from "./ui/background-gradient";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { SigininInput } from "@surabhilssk/project-lyricraft";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import toast from "react-hot-toast";

export const SigninAuthForm = () => {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState<SigininInput>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const userSignin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signinData
      );
      const jwt = response.data.jwt;
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/poem");
      } else {
        throw new Error("No JWT token found");
      }
    } catch (e: any) {
      setLoading(false);
      if (e.response) {
        toast(e.response.data.error || "Error while signing up!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast("Network error! Please try again later.", {
          icon: "🛜",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };
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
                    onChange={(e) => {
                      setSigninData({
                        ...signinData,
                        email: e.target.value.toLowerCase(),
                      });
                    }}
                  />
                  <Form
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(e) => {
                      setSigninData({
                        ...signinData,
                        password: e.target.value,
                      });
                    }}
                  />
                  <div className="text-center mt-[25px]">
                    <InteractiveHoverButton
                      className="text-black"
                      onClick={userSignin}
                    >
                      {loading === false ? "Sign in" : "Signing you in..."}
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
  onChange,
}: {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mt-3">
      <div>
        <Label className="font-light text-xs text-slate-300">{label}</Label>
        <Input type={type} placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
};
