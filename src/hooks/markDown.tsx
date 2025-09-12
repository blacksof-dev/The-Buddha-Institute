import { createContext, useContext, useState } from "react";

const MarkDownContext = createContext<any>(null);



const MarkDownProvider = ({ children }: { children: any }) => {

    const [caseStudy, setCaseStudy] = useState<string>('');
    return (
        <MarkDownContext.Provider value={{ caseStudy, setCaseStudy }}>
            {children}
        </MarkDownContext.Provider>
    )
}

export { MarkDownProvider };

export const useMakrDown = () => {
    return useContext(MarkDownContext);
};
