import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 gap-12">
      <div className="max-w-md">
        <Card className="rounded-3xl shadow-lg p-6 bg-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">INTRODUCTION</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg leading-relaxed">
              In today's digital world, users expect seamless and intuitive experiences across all platforms.
              Poor UX/UI design can lead to frustration, increased bounce rates, and lost business opportunities.
              Good design isn't just about aesthetics—it's about understanding the user's needs and creating an 
              experience that feels natural and easy to navigate. In this presentation, we'll explore how UX/UI 
              design services can enhance your digital presence and engage your audience effectively.
            </p>
          </CardContent>
        </Card>    
      </div>

      {/* Image Section */}
      <div className="max-w-lg">
        <Image 
          src="/Blog_cover-109-2048x773.jpeg.webp"
          width={500}
          height={500}
          alt="Introduction Image"
          className="rounded-3xl shadow-md object-cover"
        /> 
      </div>
    </section>
  );
}
