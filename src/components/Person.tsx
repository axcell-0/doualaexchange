import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

interface PersonProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Person({
  title,
  description,
  image,
  link,
}: PersonProps) {
  return (
    <div className="bg-white rounded-2xl mb-4 shadow-lg transition duration-300 hover:scale-105 h-48 p-3 ring ring-[#e8e5e5]">
      <Link href={link}>
        <div className="flex gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaUser color="green" />
              <p className="text-[#0d1c12] text-lg font-bold leading-tight">
                {title}
              </p>
            </div>

            <p className="text-[#4b5563] text-[12px] font-normal leading-4">
              {description}
            </p>

            <Link
              href={link}
              className="text-green-400 flex items-center gap-3 text-[12px]"
            >
              Select profile <FaLongArrowAltRight color="green" />
            </Link>
          </div>

          <div className="h-40 w-full bg-center bg-no-repeat rounded-lg">
            <img
              className="h-full max-w-[130px] lg:w-full object-contain rounded-sm"
              src={image}
              alt={title}
            />
          </div>
        </div>
      
      </Link>
    </div>
  );
}
