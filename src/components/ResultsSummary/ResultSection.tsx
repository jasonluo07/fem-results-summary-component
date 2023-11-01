function ResultSection() {
  return (
    <section className="flex flex-col items-center rounded-b-[32px] bg-gradient-to-b from-[#75F] to-[#2F2CE9] pb-10 pt-6 shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)]">
      <h1 className="mb-6 text-[18px] font-bold leading-normal text-[#CAC9FF]">Your Result</h1>
      <div className="mb-6 flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4D21C9]">
        <p className="text-[56px] font-extrabold leading-[72px] text-white">76</p>
        <p className="text-[16px] font-bold leading-normal text-[#CAC9FF] opacity-[.5168]">of 100</p>
      </div>
      <div className="mx-auto w-[260px] text-center leading-normal">
        <p className="mb-2 text-[24px] font-bold text-white">Great</p>
        <p className="text-[16px] font-medium text-[#CAC9FF]">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </section>
  );
}

export default ResultSection;
