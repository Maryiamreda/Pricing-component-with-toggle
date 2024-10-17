import React, { createContext, useState, ReactNode, useEffect } from "react";

type Pricing = "annually" | "monthly";

type PricingContextType = {
    type: Pricing;
    togglePricing: () => void;
};

export const PricingContext = createContext<PricingContextType>({
    type: "annually",
    togglePricing: () => { }
});

interface PricingProviderProps {
    children: ReactNode;
}

export const PricingProvider: React.FC<PricingProviderProps> = ({ children }) => {
    const [type, setType] = useState<Pricing>("annually");

    const togglePricing = () => {
        setType(prevType => prevType === "annually" ? "monthly" : "annually");
    };

    useEffect(() => { }, [type]);

    return (
        <PricingContext.Provider value={{ type, togglePricing }}>
            {children}
        </PricingContext.Provider>
    );
};