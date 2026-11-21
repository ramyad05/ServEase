import { useState } from "react";

/**
 * Minimal form state + validation hook.
 * - validate(values) must return an object of { fieldName: "error message" } (empty when valid).
 * - Errors are only exposed for fields the user has left (blur) or after a submit attempt.
 * - Field ids in the markup must match field names so the first invalid field can be focused.
 */
export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  const allErrors = validate(values);
  const errors = Object.fromEntries(
    Object.entries(allErrors).filter(([name]) => touched[name])
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (onValid) => (e) => {
    e.preventDefault();
    setTouched(Object.fromEntries(Object.keys(values).map((name) => [name, true])));
    const names = Object.keys(allErrors);
    if (names.length === 0) {
      onValid(values);
    } else {
      document.getElementById(names[0])?.focus();
    }
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
  };

  return { values, errors, handleChange, handleBlur, handleSubmit, reset };
}
