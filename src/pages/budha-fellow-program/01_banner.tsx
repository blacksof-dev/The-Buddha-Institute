import Banner from "./bannerbfp";


const BudhhaFellowBanner = () => {



 

  return (
    
    <div>
      <Banner
        bannerImage="/BudhaFellowProgram/bfp-banner-updated.jpg"
        mainHeading="The Buddha Fellowship Program"
        subHeading="A dedicated platform of entrepreneurism, mentorship and support for socio-economic change."
        customClass="sm:max-w-[70%]"
        overlayVideo="bg-gradient-to-t from-teal to-transparent absolute inset-x-0 h-[50%] bottom-0 sm:block hidden"
        buttonText="Enroll now"
        buttonLink="https://application.thebuddhainstitute.org/signin"
        buttonIcon="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
        buttonOnClick={() => console.log("Button Clicked!")}
      />
    </div>
  );
};

export default BudhhaFellowBanner;
