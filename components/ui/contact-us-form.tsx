"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TextArea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

export function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    status: 'success' | 'error' | null;
    message: string;
  }>({ status: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ status: null, message: '' });

    const form = e.currentTarget;

    try {
      const result = await emailjs.sendForm(
        'service_1bd0o8j', // Replace with your EmailJS service ID
        'template_fo3b45o', // Replace with your EmailJS template ID
        form,
        'L-JawK3LgxAAA7Plp' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus({
          status: 'success',
          message: 'Message sent successfully!'
        });
        form.reset();
      }
    } catch {
      setSubmitStatus({
        status: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border contact-us-form">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MG Photography
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        We&apos;d love to hear from you!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fromName">First name</Label>
            <Input
              id="fromName"
              name="fromName" // Ensure this matches the template variable
              placeholder="Shanmuga"
              type="text"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname" // Ensure this matches the template variable
              placeholder="Sundar"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email" // Ensure this matches the template variable
            placeholder="company@mail.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <TextArea
            name="message" // Ensure this matches the template variable
            id="message"
            placeholder="Feel free to write an inquiry message!"
            required
          />
        </LabelInputContainer>

        {submitStatus.status && (
          <div
            className={`mb-4 p-3 rounded-md ${
              submitStatus.status === 'success'
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          className={cn(
            "bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
            loading && "opacity-50 cursor-not-allowed"
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Enquire Now"} {!loading && "→"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
