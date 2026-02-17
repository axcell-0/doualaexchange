// src/app/exchanger/register/page.tsx
import { PhoneFrame } from "@/components/PhoneFrame";
import { RegistrationForm } from "@/components/RegistrationForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-[#f5f8f6] dark:bg-[#102216] p-0 sm:p-4">
      <PhoneFrame>
        <RegistrationForm />
      </PhoneFrame>
    </main>
  );
}
