function ResultSection() {
  return (
    <section className="flex flex-col items-center rounded-b-[32px] bg-gradient-to-b from-[#75F] to-[#2F2CE9] pb-[40px] pt-[24px] shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)] desktop:w-1/2 desktop:rounded-[32px]">
      <h1 className="mb-[24px] text-[18px] font-bold text-[#CAC9FF] desktop:mb-[36px] desktop:text-[24px]">
        Your Result
      </h1>
      <div className="mb-[24px] flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4D21C9] desktop:mb-[28px] desktop:h-[200px] desktop:w-[200px]">
        <p className="text-[56px] font-extrabold leading-[72px] text-white desktop:text-[72px]">76</p>
        <p className="text-[16px] font-bold text-[#CAC9FF] opacity-[.5168] desktop:text-[18px]">of 100</p>
      </div>
      <div className="mx-auto w-[260px] text-center">
        <p className="mb-[8px] text-[24px] font-bold text-white desktop:mb-[14px] desktop:text-[32px]">Great</p>
        <p className="text-[16px] font-medium text-[#CAC9FF] desktop:text-[18px]">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </section>
  );
}

export default ResultSection;
