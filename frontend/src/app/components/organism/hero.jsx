import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function HeroPage() {
  return (
    <section className="flex items-center justify-center min-h-screen p-8 gap-12 ">
      <Image 
        src="/UI-UX-designer.webp"
        width={500}
        height={500}
        alt="UI/UX Designer"
        className="rounded-2xl shadow-lg object-cover"
      />
      
      <Card className="w-[400px] rounded-3xl shadow-xl p-6 bg-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">UI/UX</CardTitle>
          <CardDescription className="text-lg text-gray-600">Design Services</CardDescription>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-700 mb-6">UI/UX design focuses on creating intuitive and visually appealing digital experiences that enhance user satisfaction. UI (User Interface) refers to the design of the layout, buttons, and interactive elements that users interact with, while UX (User Experience) deals with the overall journey a user takes, ensuring it is seamless and enjoyable.</p>
          <Button className="w-full bg-black hover:bg-[#a0d2eb] text-white">Learn More</Button>
        </CardContent>
      </Card>
    </section>
  );
}
