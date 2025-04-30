'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"


export default function Home() {

const router = useRouter();

const handleClick = () => {
    router.push("/");
}


    return (
        <Button onClick={handleClick}>
            Home
        </Button>
    )
}