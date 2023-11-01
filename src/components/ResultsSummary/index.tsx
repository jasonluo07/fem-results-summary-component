import ResultSection from './ResultSection';
import SummarySection from './SummarySection';

function ResultsSummary() {
  return (
    <div className="w-[375px] bg-white desktop:flex desktop:w-[736px] desktop:rounded-[32px]">
      <ResultSection />
      <SummarySection />
    </div>
  );
}

export default ResultsSummary;
