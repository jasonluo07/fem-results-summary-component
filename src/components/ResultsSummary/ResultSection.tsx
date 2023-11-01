function ResultSection() {
  return (
    <section className="desktop:rounded-[32px] desktop:w-1/2 flex flex-col items-center rounded-b-[32px] bg-gradient-to-b from-[#75F] to-[#2F2CE9] pb-[40px] pt-[24px] shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)]">
      <h1 className="desktop:text-[24px] desktop:mb-[36px] mb-[24px] text-[18px] font-bold leading-normal text-[#CAC9FF]">
        Your Result
      </h1>
      <div className="desktop:h-[200px] desktop:w-[200px] desktop:mb-[28px] mb-[24px] flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4D21C9]">
        <p className="desktop:text-[72px] text-[56px] font-extrabold leading-[72px] text-white">76</p>
        <p className="desktop:text-[18px] text-[16px] font-bold leading-normal text-[#CAC9FF] opacity-[.5168]">
          of 100
        </p>
      </div>
      <div className="mx-auto w-[260px] text-center leading-normal">
        <p className="desktop:text-[32px] desktop:mb-[14px] mb-[8px] text-[24px] font-bold text-white">Great</p>
        <p className="desktop:text-[18px] text-[16px] font-medium text-[#CAC9FF]">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </section>
  );
}

export default ResultSection;
