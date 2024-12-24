import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri";

export default function SearchAndCart() {
    return (
      <div className="flex items-center justify-center gap-2 ">
        <div className="relative w-full flex items-center justify-center gap-2">
            <span className="h-8 w-8 right-1 flex absolute rounded-full bg-white items-center justify-center">
              <FiSearch />
            </span>
          
          <Input className="rounded-full bg-gray-200 px-2" placeholder="Search" type="text"/>
        </div>
        <span className="w-14 h-10 bg-blue-500 flex items-center justify-center text-white rounded-full">
       
          <RiShoppingBag3Line className="text-xl" />
        </span>
      </div>
    );
}
