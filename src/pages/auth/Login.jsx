import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import useForm from "../../hooks/useForm";
import { validateEmail, validateRequired } from "../../utils/validation";

const initialValues = { email: "", password: "", remember: false };

function validate(v) {
  const errors = {};
  const email = validateEmail(v.email);
  const password = validateRequired(v.password, "Password");
  if (email) errors.email = email;
  if (password) errors.password = password;
  return errors;
}

export default function Login() {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(initialValues, validate);
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [showResetNotice, setShowResetNotice] = useState(false);

  // MOCK behaviour only: no API call. Real authentication comes with the backend phase.
  const onValid = () => {
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 600);
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Log in to your ServEase account.">
      <form onSubmit={handleSubmit(onValid)} noValidate className="space-y-5">
        <TextField
          id="email"
          name="email"
          label="Email address"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          required
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          required
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input
              type="checkbox"
              name="remember"
              checked={values.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-line accent-brand-600"
            />
            Remember me
          </label>
          <button
            type="button"
            onClick={() => setShowResetNotice(true)}
            className="text-sm font-semibold text-brand-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {showResetNotice && (
          <p role="status" className="rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-900">
            Password reset isn't available yet. It will be added in a later phase.
          </p>
        )}

        <Button type="submit" className="w-full py-3 disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in…" : "Login"}
        </Button>

        {status === "success" && (
          <p role="status" className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            Form validated successfully. This is a demo: real login will be connected to the backend later.
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Don’t have an account?{" "}
        <Link to="/register" className="font-semibold text-brand-600 hover:underline">Register</Link>
      </p>
    </AuthLayout>
  );
}
