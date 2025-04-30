"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Auth() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth"); // ✅ navigates to /signin in the same tab
  };

  return (
    <Button onClick={handleClick}>
      Sign in
    </Button>
  );
}
