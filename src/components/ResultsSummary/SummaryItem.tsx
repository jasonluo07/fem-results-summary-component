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
        <h3
          className="text-[16px] font-medium desktop:text-[20px]"
          style={{
            color,
          }}
        >
          {title}
        </h3>
      </div>
      <p className="text-[16px] font-bold text-[#303B59] desktop:text-[18px]">
        {score} <span className="opacity-50">/ 100</span>
      </p>
    </li>
  );
}

export default SummaryItem;
