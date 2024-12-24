import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export default function HeaderMenu() {
    return (
      <Menubar className="border-none w-full flex gap-2 items-center justify-center">
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Products</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Our Offers</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Track Order</MenubarTrigger>
          
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
         
        </MenubarMenu>
      </Menubar>
    )
  }
  