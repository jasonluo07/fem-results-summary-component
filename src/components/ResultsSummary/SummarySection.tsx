type SummaryItemProps = {
  icon: string;
  color: string;
  title: string;
  score: number;
};

function SummaryItem({ icon, color, title, score }: SummaryItemProps) {
  return (
    <li
      className="flex justify-between rounded-[12px] px-[16px] py-[18px]"
      style={{
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), ${color}`,
      }}
    >
      <div className="flex space-x-[12px]">
        <img src={icon} alt={title} />
        <h3 className={`text-[16px] font-medium text-[${color}] desktop:text-[20px]`}>{title}</h3>
      </div>
      <p className="text-[16px] font-bold text-[#303B59] desktop:text-[18px]">
        {score} <span className="opacity-50">/ 100</span>
      </p>
    </li>
  );
}

function SummarySection() {
  return (
    <section className="px-[30px] pb-[30px] pt-[24px] desktop:w-1/2 desktop:px-[40px] desktop:pb-[46px] desktop:pt-[38px]">
      <h2 className="mb-[24px] text-[18px] font-bold text-[#303B59] desktop:mb-[28px] desktop:text-[24px]">Summary</h2>
      <ul className="mb-[24px] space-y-[16px]">
        <SummaryItem icon="/src/assets/images/icon-reaction.svg" color="#F55" title="Reaction" score={80} />
        <SummaryItem icon="/src/assets/images/icon-memory.svg" color="#FFB21E" title="Memory" score={92} />
        <SummaryItem icon="/src/assets/images/icon-verbal.svg" color="#00BB8F" title="Verbal" score={61} />
        <SummaryItem icon="/src/assets/images/icon-visual.svg" color="#1125D6" title="Visual" score={73} />
      </ul>
      <button
        className="block w-full rounded-[128px] bg-[#303B59] py-[16px] text-[18px] font-bold text-white hover:bg-gradient-to-b hover:from-[#75F] hover:to-[#2F2CE9]
      "
      >
        Continue
      </button>
    </section>
  );
}

export default SummarySection;
