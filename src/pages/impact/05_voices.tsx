


import VoiceSubComp from './06_voiceSubcomp';
import CardsData from './CardsData';

const Voices = () => {
  return (
    <section className="bg-[#FAF9F5] blade-bottom-padding-lg">
      <div className="w-container-xl blade-top-padding-lg ">
        <h1 className="text-[#07393C] font-lato-bold border-b pb-2 border-[#84848480]">Voices of resilience, <span className="text-green font-lato-bold">testimonies of growth</span></h1>
      </div>  
        <CardsData />
        <div className="w-container-xl ">
          <VoiceSubComp />
        </div>
      
    </section>
  )
}

export default Voices
