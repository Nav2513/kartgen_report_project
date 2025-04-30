'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function MyAccount() {

    const router = useRouter();

    const handleClick = () => {
        router.push("/navigation/MyAccount");
    }

    return(
        <Button onClick={handleClick}>
            MyAccount
        </Button>
    )

}