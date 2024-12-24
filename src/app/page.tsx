import Image from "next/image";
import ProductTab from "@/components/products/ProductTab";
import HeaderNav from "@/components/navigation/header/HeaderNav";
export default function Home() {
  return (
    <div className="p-6 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 flex-wrap items-center sm:items-start">
        <HeaderNav/>
        <ProductTab/>
        <ProductTab/>
        <ProductTab/>
        <ProductTab/>
        <ProductTab/>
        <ProductTab/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
