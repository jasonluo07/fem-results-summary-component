import memoryIcon from '@/assets/images/icon-memory.svg';
import reactionIcon from '@/assets/images/icon-reaction.svg';
import verbalIcon from '@/assets/images/icon-verbal.svg';
import visualIcon from '@/assets/images/icon-visual.svg';
import { ISummaryItem } from '@/types';

import SummaryItem from './SummaryItem';

const ICONS = [reactionIcon, memoryIcon, verbalIcon, visualIcon];
const COLORS = ['#F55', '#FFB21E', '#00BB8F', '#1125D6'];

type SummarySectionProps = {
  summaryData: ISummaryItem[];
};

const SummarySection = ({ summaryData }: SummarySectionProps) => {
  return (
    <section className="px-[30px] pb-[30px] pt-[24px] lg:w-1/2 lg:px-[40px] lg:pb-[46px] lg:pt-[38px]">
      <h2 className="mb-[24px] text-[18px] font-bold text-[#303B59] lg:mb-[28px] lg:text-[24px]">Summary</h2>
      <ul className="mb-[24px] space-y-[16px]">
        {summaryData.map((item, index) => (
          <SummaryItem
            title={item.category}
            key={item.category}
            score={item.score}
            icon={ICONS[index]}
            color={COLORS[index]}
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
};

export default SummarySection;
