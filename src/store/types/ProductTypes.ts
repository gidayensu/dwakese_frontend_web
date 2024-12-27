export interface Product {
    id: string;
    name: string; 
    description: string; 
    thumbnail: string; 
    galleries: string[]; 
    category: string;
    stockCount: number;
    pricingTiers: Array<PricingTier>;
    additionalDetails: Record<string, string>; 
}

export interface PricingTier {
    minimumOrder: number;
    price: number; 
}