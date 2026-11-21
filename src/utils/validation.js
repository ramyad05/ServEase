// Small, dependency-free validators. Each returns an error message, or "" when valid.

export function validateRequired(value, label) {
  return String(value ?? "").trim() ? "" : `${label} is required.`;
}

export function validateName(value) {
  const v = String(value ?? "").trim();
  if (!v) return "Full name is required.";
  if (v.length < 2) return "Full name must be at least 2 characters.";
  return "";
}

export function validateEmail(value) {
  const v = String(value ?? "").trim();
  if (!v) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
    return "Enter a valid email address, e.g. name@example.com.";
  }
  return "";
}

export function validatePhone(value) {
  const v = String(value ?? "").trim();
  if (!v) return "Phone number is required.";
  const digits = v.replace(/[\s-]/g, "");
  if (!/^\+?\d{10,14}$/.test(digits)) {
    return "Enter a valid phone number (10 to 14 digits, optional + prefix).";
  }
  return "";
}

export function validateNewPassword(value) {
  const v = String(value ?? "");
  if (!v) return "Password is required.";
  if (v.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Za-z]/.test(v) || !/\d/.test(v)) {
    return "Password must include at least one letter and one number.";
  }
  return "";
}

export function validateDescription(value, min = 20, max = 300) {
  const v = String(value ?? "").trim();
  if (!v) return "Please describe the services you offer.";
  if (v.length < min) return `Description must be at least ${min} characters.`;
  if (v.length > max) return `Description must be ${max} characters or fewer.`;
  return "";
}
