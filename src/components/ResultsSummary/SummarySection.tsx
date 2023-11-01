function SummarySection() {
  return (
    <section className="desktop:w-1/2 desktop:px-10 desktop:pb-11.5 desktop:pt-9.5 px-7.5 pb-7.5 pt-6">
      <h2 className="desktop:text-[24px] desktop:mb-7 mb-6 text-[18px] font-bold leading-normal text-[#303B59]">
        Summary
      </h2>
      <ul className="mb-6 space-y-4">
        <li
          className="flex justify-between rounded-xl px-4 py-4.5"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #F55',
          }}
        >
          <div className="flex space-x-3">
            <img className="h-[20px]" src="/src/assets/images/icon-reaction.svg" alt="Reaction" />
            <h3 className="desktop:text-[20px] text-[16px] font-medium leading-normal text-[#F55]">Reaction</h3>
          </div>
          <div className="flex space-x-2"></div>
          <p className="desktop:text-[18px] text-[16px] font-bold leading-normal text-[#303B59]">
            80 <span className="opacity-50">/ 100</span>
          </p>
        </li>
        <li
          className="flex justify-between rounded-xl px-4 py-4.5"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #FFB21E',
          }}
        >
          <div className="flex space-x-3">
            <img className="h-[20px]" src="/src/assets/images/icon-memory.svg" alt="Memory" />
            <h3 className="desktop:text-[18px] text-[16px] font-medium leading-normal text-[#FFB21E]">Memory</h3>
          </div>
          <div className="flex space-x-2"></div>
          <p className="desktop:text-[18px] text-[16px] font-bold leading-normal text-[#303B59]">
            92 <span className="opacity-50">/ 100</span>
          </p>
        </li>
        <li
          className="flex justify-between rounded-xl px-4 py-4.5"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #00BB8F',
          }}
        >
          <div className="flex space-x-3">
            <img className="h-[20px]" src="/src/assets/images/icon-verbal.svg" alt="Verbal" />
            <h3 className="desktop:text-[18px] text-[16px] font-medium leading-normal text-[#00BB8F]">Verbal</h3>
          </div>
          <div className="flex space-x-2"></div>
          <p className="desktop:text-[18px] text-[16px] font-bold leading-normal text-[#303B59]">
            61 <span className="opacity-50">/ 100</span>
          </p>
        </li>
        <li
          className="flex justify-between rounded-xl px-4 py-4.5"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #1125D6',
          }}
        >
          <div className="flex space-x-3">
            <img className="h-[20px]" src="/src/assets/images/icon-visual.svg" alt="Visual" />
            <h3 className="desktop:text-[18px] text-[16px] font-medium leading-normal text-[#1125D6]">Visual</h3>
          </div>
          <div className="flex space-x-2"></div>
          <p className="desktop:text-[18px] text-[16px] font-bold leading-normal text-[#303B59]">
            73 <span className="opacity-50">/ 100</span>
          </p>
        </li>
      </ul>
      <button className="block w-full rounded-[128px] bg-[#303B59] py-4 text-[18px] font-bold leading-normal text-white">
        Continue
      </button>
    </section>
  );
}

export default SummarySection;
