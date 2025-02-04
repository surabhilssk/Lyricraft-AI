import { Link, useNavigate } from "react-router-dom";
import { BackgroundGradient } from "./ui/background-gradient";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useState } from "react";
import { SignupInput } from "@surabhilssk/project-lyricraft";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BACKEND_URL } from "../../config";

export const SignupAuthForm = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  const [loading, setLoading] = useState(false);

  const userCreate = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signupData
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
      console.error(e);
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
              <div className="font-medium text-3xl mt-6">Sign Up</div>
              <div>
                <div className="text-slate-400">
                  Already have an account?{" "}
                  <Link to="/signin" className="underline font-normal">
                    Sign in
                  </Link>
                </div>
              </div>
              <div className="text-start mt-4">
                <Form
                  label="Name"
                  placeholder="Enter your name"
                  type="name"
                  onChange={(e) => {
                    setSignupData({
                      ...signupData,
                      name: e.target.value,
                    });
                  }}
                />
                <Form
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => {
                    setSignupData({
                      ...signupData,
                      email: e.target.value.toLowerCase(),
                    });
                  }}
                />
                <Form
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={(e) => {
                    setSignupData({
                      ...signupData,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-[22px]">
              <InteractiveHoverButton onClick={userCreate}>
                {loading === false ? "Sign up" : "Signing you up..."}
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
  onChange,
}: {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mt-2">
      <div>
        <Label className="font-light text-xs text-slate-300">{label}</Label>
        <Input type={type} placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
};
