"use server";

import { redirect } from "next/navigation";

export async function submitContactForm(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !message || !isEmailValid) {
    redirect("/contact?error=Please provide a valid name, email, and message.");
  }

  redirect("/contact?message=Thanks! Your message has been received.");
}
