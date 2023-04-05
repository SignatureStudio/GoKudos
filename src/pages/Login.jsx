import { Button, Input } from "@arco-design/web-react";

const Login = (props) => {
  return (
    <div className="bg-slate-50 p-5 md:p-10 h-screen">
      <div className="container max-w-md mx-auto shadow-xl bg-white p-10">
        <div>
          <img src="/logotype.png" alt="" className="h-16 mx-auto" />
        </div>
        <div className="text-center text-2xl my-6">Welcome</div>
        <div className="text-center mb-8 text-base">
          Log in to KLMC to continue.
        </div>
        <div className="mb-4">
          <Input
            placeholder="Email address"
            size="large"
            height={56}
            className="rounded border border-gray-200 bg-white text-base"
          />
        </div>
        <div className="mb-4">
          <Input.Password
            placeholder="Password"
            size="large"
            height={56}
            className="rounded border border-gray-200 [&>.arco-input-group>.arco-input-inner-wrapper]:bg-white"
          />
        </div>
        <div className="mb-8 text-base">
          <a
            href="/"
            className="font-bold text-brand-500"
          >
            Forgot password?
          </a>
        </div>
        <div className="mb-4">
          <Button
            type="primary"
            size="large"
            long
            className="h-14 text-base rounded"
            href="/"
          >
            Continue
          </Button>
        </div>
        <div className="text-base">
          Don't have an account?{" "}
          <a href="/" className="font-bold text-brand-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
