import HeaderMenu from "./HeaderMenu";
import SearchAndCart from "./SearchAndCart";
import Logo from "../Logo";
export default function HeaderNav () {
    
    return (
       <div className="flex w-full items-center justify-between ">
        <Logo/>
        <HeaderMenu/>
        <SearchAndCart/>
       </div>    
       )
}