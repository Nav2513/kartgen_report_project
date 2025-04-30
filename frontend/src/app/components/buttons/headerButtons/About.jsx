"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function About() {
    const router = useRouter();
    
    const handleClick = () => {
        router.push("/navigation/about");
    }
    return (
        <Button onClick={handleClick}>
         About
        </Button>
    )
}