function ResultSection() {
  return (
    <section className="pt-6 pb-10 rounded-b-[32px] bg-gradient-to-b from-[#75F] to-[#2F2CE9] shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)] flex flex-col items-center">
      <h1 className="text-[#CAC9FF] text-[18px] font-bold mb-6 leading-normal">Your Result</h1>
      <div className="w-[140px] h-[140px] bg-gradient-to-b from-[#4D21C9] rounded-full mb-6 flex flex-col justify-center items-center">
        <p className="text-white text-[56px] font-extrabold leading-[72px]">76</p>
        <p className="text-[#CAC9FF] text-[16px] font-bold leading-normal opacity-[.5168]">of 100</p>
      </div>
      <div className="w-[260px] mx-auto text-center leading-normal">
        <p className="text-white text-[24px] font-bold mb-2">Great</p>
        <p className="text-[#CAC9FF] text-[16px] font-medium">Your performance exceed 65% of the people conducting the test here!</p>
      </div>
    </section>
  );
}

export default ResultSection;
