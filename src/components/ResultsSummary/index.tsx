import ResultSection from './ResultSection';
import SummarySection from './SummarySection';

function ResultsSummary() {
  return (
    <div className="desktop:w-[736px] desktop:flex w-[375px] bg-white desktop:rounded-[32px]">
      <ResultSection />
      <SummarySection />
    </div>
  );
}

export default ResultsSummary;
