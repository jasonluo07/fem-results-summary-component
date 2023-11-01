import SummaryItem from './SummaryItem';
import { ISummaryItem } from '@/types';

const COLORS = ['#F55', '#FFB21E', '#00BB8F', '#1125D6'];

type SummarySectionProps = {
  summaryData: ISummaryItem[];
};

function SummarySection({ summaryData }: SummarySectionProps) {
  return (
    <section className="px-[30px] pb-[30px] pt-[24px] desktop:w-1/2 desktop:px-[40px] desktop:pb-[46px] desktop:pt-[38px]">
      <h2 className="mb-[24px] text-[18px] font-bold text-[#303B59] desktop:mb-[28px] desktop:text-[24px]">Summary</h2>
      <ul className="mb-[24px] space-y-[16px]">
        {summaryData.map((item, index) => (
          <SummaryItem
            key={item.category}
            icon={item.icon.replace('./assets', '/src/assets')}
            color={COLORS[index]}
            title={item.category}
            score={item.score}
          />
        ))}
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
