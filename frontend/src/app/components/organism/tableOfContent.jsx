import { Button } from "@/components/ui/button";

export default function TableOfContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Heading */}
      <h6 className="text-2xl font-semibold text-gray-800 mb-8 tracking-wider">
        TABLE OF CONTENT
      </h6>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Button 01 */}
        <div className="text-center">
          <Button className="w-16 h-16 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
            01
          </Button>
          <p className="text-gray-600 mt-2">Sustainability Reporting</p>
        </div>

        {/* Button 02 */}
        <div className="text-center">
          <Button className="w-16 h-16 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
            02
          </Button>
          <p className="text-gray-600 mt-2">GRI</p>
        </div>

        {/* Button 03 */}
        <div className="text-center">
          <Button className="w-16 h-16 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
            03
          </Button>
          <p className="text-gray-600 mt-2">BRSR</p>
        </div>

        {/* Button 04 */}
        <div className="text-center">
          <Button className="w-16 h-16 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
            04
          </Button>
          <p className="text-gray-600 mt-2">CSRD</p>
        </div>

        {/* Button 05 */}
        <div className="text-center">
          <Button className="w-16 h-16 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
            05
          </Button>
          <p className="text-gray-600 mt-2">TCFD</p>
        </div>

        {/* Button 06 */}
        <div className="text-center">
          <Button className="w-16 h-16 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
            06
          </Button>
          <p className="text-gray-600 mt-2">Green Audit</p>
        </div>
      </div>
    </div>
  );
}
