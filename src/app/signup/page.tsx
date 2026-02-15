import { PhoneFrame } from "@/components/PhoneFrame";
import { RegistrationForm } from "@/components/RegistrationForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-background-light dark:bg-[#102216] p-0 sm:p-4">
      <PhoneFrame>
        <RegistrationForm />
      </PhoneFrame>
    </main>
  );
}
