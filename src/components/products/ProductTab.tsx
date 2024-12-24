'use client'
import Image from "next/image";
import productImage from "@/assets/furniture.webp";
import {
  Card
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function ProductTab() {
  const router = useRouter();

  return (
    <Card className="w-72 p-2 rounded-2xl h-[23rem] flex flex-col justify-between cursor-pointer" onClick={()=>router.push('/')}>
      <div className="grid w-full items-center h-60 rounded-2xl overflow-hidden object-contain ">
        <Image
          src={productImage}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="mt-2">
        <p className=" font-medium">Furniture with four well structured</p>
      </div>
      {/* 
        Prices and Partner Tags Minimum Order Details
      */}
      <div>
        <p className="font-bold text-dwakese-blue">GHS 1000 - 4000</p>
        <p className="text-[12px]">Minimum order: 12 pieces</p>
      </div>
      <div></div>
    </Card>
  );
}
