import React, { useState } from 'react'

import { AiOutlinePlusCircle } from "react-icons/ai";


import GovtInstitutions from "./govtInstitutions";
import LogoFormComponent from "./LogoForm";
import FoundationsPartners from "./foundations-partners";
import CsoNework from "./csoNework";
import { Icon } from 'organisms/iconCommonent';


interface userDataPropes {
    _id: string;
    fullName: string;
    contactNumber: string;
    email: string;
    industry: string;
    howDidYouGetToKnowUs: string;
    queryRelatedTo: string;
    query: string;
}

export default function PartnersAndSupporters({ section }: { section: string }) {
    const [formOpen, setFormOpen] = useState(false);
    const [activeBtn, setActivebtn] = useState<string>("Government and institutions");
    const [type, setType] = useState<string>('');

    const formClickOpens = () => {
        setFormOpen(true);
    };

    const handleFromOpen = () => {
        setFormOpen(false);
    };

    const handleActivebtn = (btn: string) => {
        setActivebtn(btn);
    };
    const handleFrom = () => {
        if (activeBtn === "Government and institutions") {
            setType('institution')
        }
        else if (activeBtn === "Foundations and CSR Partners") {
            setType("Foundations")
        }
        else {
            setType("CSO")
        }
        setFormOpen(true);
    }

    return (
        <div className='blade-top-padding'>
            <h2 className='font-lato-regular '>Section - {section}</h2>
            <hr />
            <h3 className='font-lato-regular mt-4'>Partners and supporters</h3>
            <h6 className='font-lato-regular text-red-500'>Note: Changes made to this section will be reflected across all pages where this section is used.</h6>
            <div className="flex border-b-[1px]  justify-between py-4">
                <div className="flex gap-6 2xl:gap-8">
                    <button
                        onClick={() => {
                            handleActivebtn("Government and institutions");
                        }}
                        className={`font-lato-regular ${activeBtn === "Government and institutions"
                            ? "bg-darkCyan text-white"
                            : " bg-transparent border-[1px] border-pear text-black "
                            } rounded-md xl:px-1 2xl:px-4 py-2 text-lg  `}
                    >
                        Government and institutions
                    </button>
                    <button
                        onClick={() => {
                            handleActivebtn("Foundations and CSR Partners");
                        }}
                        className={`font-lato-regular ${activeBtn === "Foundations and CSR Partners"
                            ? "bg-darkCyan text-white"
                            : " bg-transparent border-[1px] border-pear text-black "
                            } rounded-md xl:px-1 2xl:px-4 py-2 text-lg `}
                    >
                        Foundations and CSR Partners
                    </button>
                    <button
                        onClick={() => {
                            handleActivebtn("CSO and CSO Networks");
                        }}
                        className={`font-lato-regular ${activeBtn === "CSO and CSO Networks"
                            ? "bg-darkCyan text-white"
                            : " bg-transparent border-[1px] border-pear text-black "
                            } rounded-md xl:px-1 2xl:px-4 py-2 text-lg `}
                    >
                        CSO and CSO Networks
                    </button>
                </div>
                <div>
                    <button
                        onClick={handleFrom}
                        className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2">

                        <span className="text-2xl pr-2 relative top-0.5">
                            <Icon icon={AiOutlinePlusCircle} />
                        </span>{" "}
                        <h4 className="text-nowrap"> Add new card</h4>
                    </button>

                </div>
            </div>
            <div className="flex gap-8 flex-wrap">
                {
                    activeBtn === "Government and institutions" &&
                    <GovtInstitutions />
                }
                {
                    activeBtn === "Foundations and CSR Partners" &&
                    <FoundationsPartners />
                }
                {
                    activeBtn === "CSO and CSO Networks" &&
                    <CsoNework />
                }
            </div>
            {formOpen &&
                <LogoFormComponent type={type} handleFromOpen={handleFromOpen} />
            }

            {/* {formOpen && type==='institution' &&
      <LogoFormComponent type={type} handleFromOpen={handleFromOpen} />
    } */}
        </div>
    )
}
