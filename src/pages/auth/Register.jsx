import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import useForm from "../../hooks/useForm";
import { categories } from "../../features/services/categories";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateNewPassword,
  validateRequired,
  validateDescription,
} from "../../utils/validation";

const DESCRIPTION_MAX = 300;

const roles = [
  { value: "customer", title: "Customer", text: "Find and book local services." },
  { value: "provider", title: "Service Provider", text: "Offer your services to customers." },
];

const initialValues = {
  role: "customer",
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  category: "",
  location: "",
  description: "",
};

function validate(v) {
  const errors = {};
  const set = (name, message) => {
    if (message) errors[name] = message;
  };

  set("fullName", validateName(v.fullName));
  set("email", validateEmail(v.email));
  set("phone", validatePhone(v.phone));
  set("password", validateNewPassword(v.password));
  set(
    "confirmPassword",
    !v.confirmPassword
      ? "Please confirm your password."
      : v.confirmPassword !== v.password
        ? "Passwords do not match."
        : ""
  );

  if (v.role === "provider") {
    set("category", v.category ? "" : "Select a service category.");
    set("location", validateRequired(v.location, "Location"));
    set("description", validateDescription(v.description, 20, DESCRIPTION_MAX));
  }
  return errors;
}

export default function Register() {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(initialValues, validate);
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const isProvider = values.role === "provider";
  const roleLabel = isProvider ? "Service Provider" : "Customer";

  // MOCK behaviour only: no API call. Real registration comes with the backend phase.
  const onValid = () => {
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 600);
  };

  if (status === "success") {
    return (
      <AuthLayout title="Registration complete" subtitle="This is a frontend demo.">
        <div role="status" className="rounded-lg border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-800">
          Your {roleLabel} registration form was validated successfully. No account was created
          yet: real registration will be connected to the backend later.
        </div>
        <Button to="/login" className="mt-6 w-full py-3">Go to Login</Button>
      </AuthLayout>
    );
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: errors[name],
  });

  return (
    <AuthLayout
      wide
      title="Create your account"
      subtitle="Join ServEase to book trusted local services or offer your own."
    >
      <form onSubmit={handleSubmit(onValid)} noValidate className="space-y-6">
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-ink">I want to register as</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {roles.map((r) => (
              <label
                key={r.value}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-line bg-white p-4 has-checked:border-brand-600 has-checked:bg-brand-50 has-focus-visible:outline-2 has-focus-visible:outline-brand-600"
              >
                <input
                  type="radio"
                  name="role"
                  value={r.value}
                  checked={values.role === r.value}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-brand-600"
                />
                <span>
                  <span className="block text-sm font-semibold text-ink">{r.title}</span>
                  <span className="block text-sm text-muted">{r.text}</span>
                </span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">
            Administrator accounts are created by the ServEase team and cannot be registered here.
          </p>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <TextField {...fieldProps("fullName")} label="Full name" autoComplete="name" placeholder="Your full name" required className="sm:col-span-2" />
          <TextField {...fieldProps("email")} label="Email address" type="email" autoComplete="email" placeholder="name@example.com" required />
          <TextField {...fieldProps("phone")} label="Phone number" type="tel" autoComplete="tel" placeholder="e.g. +91 98765 43210" required />
          <TextField
            {...fieldProps("password")}
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            hint="At least 8 characters, with a letter and a number."
            required
          />
          <TextField
            {...fieldProps("confirmPassword")}
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            placeholder="Re-enter your password"
            required
          />
        </div>

        {isProvider && (
          <div className="space-y-5 border-t border-line pt-6">
            <h2 className="text-base font-semibold text-ink">Service details</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField {...fieldProps("category")} as="select" label="Service category" required>
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </TextField>
              <TextField {...fieldProps("location")} label="Location" autoComplete="address-level2" placeholder="City or area you serve" required />
              <TextField
                {...fieldProps("description")}
                as="textarea"
                rows={4}
                label="Short description of services offered"
                placeholder="Briefly describe the services you provide and your experience."
                hint={`${values.description.trim().length}/${DESCRIPTION_MAX} characters`}
                required
                className="sm:col-span-2"
              />
            </div>
          </div>
        )}

        <Button type="submit" className="w-full py-3 disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "submitting"}>
          {status === "submitting" ? "Creating account…" : `Register as ${roleLabel}`}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-brand-600 hover:underline">Login</Link>
      </p>
    </AuthLayout>
  );
}
