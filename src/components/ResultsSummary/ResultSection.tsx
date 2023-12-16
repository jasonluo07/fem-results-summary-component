type ResultSectionProps = {
  averageScore: number | null;
};

const ResultSection = ({ averageScore }: ResultSectionProps) => {
  return (
    <section className="flex flex-col items-center rounded-b-[32px] bg-gradient-to-b from-[#75F] to-[#2F2CE9] pb-[40px] pt-[24px] shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)] lg:w-1/2 lg:rounded-[32px]">
      <h1 className="mb-[24px] text-[18px] font-bold text-[#CAC9FF] lg:mb-[36px] lg:text-[24px]">Your Result</h1>
      <div className="mb-[24px] flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4D21C9] lg:mb-[28px] lg:h-[200px] lg:w-[200px]">
        <p className="text-[56px] font-extrabold leading-[72px] text-white lg:text-[72px]">{averageScore}</p>
        <p className="text-[16px] font-bold text-[#CAC9FF] opacity-[.5168] lg:text-[18px]">of 100</p>
      </div>
      <div className="mx-auto w-[260px] text-center">
        <p className="mb-[8px] text-[24px] font-bold text-white lg:mb-[14px] lg:text-[32px]">Great</p>
        <p className="text-[16px] font-medium text-[#CAC9FF] lg:text-[18px]">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </section>
  );
};

export default ResultSection;
