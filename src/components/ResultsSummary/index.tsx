import ResultSection from './ResultSection';
import SummarySection from './SummarySection';

function ResultsSummary() {
  return (
    <div className="mobile:w-[375px] desktop:w-[736px] bg-white">
      <ResultSection />
      <SummarySection />
    </div>
  );
}

export default ResultsSummary;
