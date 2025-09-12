import React from 'react'
import Button from 'atoms/borderedButton'
import flowerImg from 'assets/Engage-with-us/flowerImg.svg'
interface myProps {
    children: React.ReactNode;
    bgColor: string;
}
const animatedCard: React.FC<myProps> = ({ children, bgColor }) => {
    return (
        // <div className={`  w-[350px] h-[356px] ${bgColor} relative overflow-hidden`}>
        //     {children}
        //     <div className="absolute flex right-10 bottom-0 opacity-30 transition-all duration-700 filter hue-rotate-15 grayscale-[0.6]">
        //         <img className=" absolute top-3 z-10" src="/EngageWithUs/main-leaf.svg"></img>
        //         <img className="opacity-0" src="/EngageWithUs/main-leaf.svg"></img>
        //         <img className="absolute top-5 left-4 -rotate-[7deg] origin-bottom group-hover:rotate-[30deg] transition-all duration-700" src="/EngageWithUs/secondary-leaf.svg"></img>
        //         <img className="absolute top-5 right-4 rotate-[7deg] origin-bottom group-hover:-rotate-[30deg] transition-all duration-700" src="/EngageWithUs/secondary-leaf.svg"></img>
        //         <img className="absolute top-3 -z-10 origin-bottom group-hover:-rotate-[60deg] transition-all duration-700" src="/EngageWithUs/bottom-leaf.svg"></img>
        //         <img className="absolute top-3 -z-10 origin-bottom group-hover:rotate-[60deg] transition-all duration-700" src="/EngageWithUs/bottom-leaf.svg"></img>
        //         <img className="absolute -bottom-8 z-10 group-hover:-bottom-2 transition-all duration-700" src="/EngageWithUs/sun.svg"></img>
        //     </div>
        // </div >
        <div className={` w-[350px] h-[350px] ${bgColor} relative overflow-hidden`}>
        {children}
        <div className="absolute  -bottom-4 -right-12 filter grayscale-[0.9]  opacity-[45%] mix-blend-luminosity">
            <img src={flowerImg} className="  top-3 z-10 w-[190px] h-[120px] " ></img>
        </div>
    </div >
    )
}

export default animatedCard;