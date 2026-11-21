import { useState } from "react";

function EyeIcon({ off }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      {off && <path d="M4 4l16 16" />}
    </svg>
  );
}

/**
 * Labelled form control with error/hint text.
 * as: "input" (default) | "textarea" | "select". type="password" adds a show/hide toggle.
 * `id` must equal the field's `name` (useForm focuses the first invalid field by id).
 */
export default function TextField({
  id,
  label,
  error,
  hint,
  required = false,
  as: Tag = "input",
  type = "text",
  className = "",
  children,
  ...props
}) {
  const [visible, setVisible] = useState(false);
  const isPassword = Tag === "input" && type === "password";

  const hintId = hint && !error ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const state = error
    ? "border-red-500 focus:border-red-500 focus:outline-red-100"
    : "border-line focus:border-brand-600 focus:outline-brand-100";
  const control = `block w-full rounded-lg border bg-white px-4 py-3 text-base text-ink shadow-sm placeholder:text-slate-400 focus:outline-2 sm:text-sm ${state} ${isPassword ? "pr-12" : ""}`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-red-600" aria-hidden="true"> *</span>}
      </label>

      <div className="relative">
        <Tag
          id={id}
          type={Tag === "input" ? (isPassword && visible ? "text" : type) : undefined}
          aria-required={required || undefined}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={describedBy}
          className={control}
          {...props}
        >
          {Tag === "select" ? children : undefined}
        </Tag>

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
            className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-lg text-slate-500 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-brand-600"
          >
            <EyeIcon off={visible} />
          </button>
        )}
      </div>

      {hintId && <p id={hintId} className="mt-1.5 text-xs text-muted">{hint}</p>}
      {errorId && <p id={errorId} className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
