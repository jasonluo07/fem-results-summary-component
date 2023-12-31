import DATA from '@/assets/DATA.json';
import type { ISummaryItem } from '@/types';
import { useEffect, useState } from 'react';

import ResultSection from './ResultSection';
import SummarySection from './SummarySection';

const ResultsSummary = () => {
  const [summaryData, setSummaryData] = useState<ISummaryItem[]>([]);
  const [averageScore, setAverageScore] = useState<number | null>(null);

  useEffect(() => {
    setSummaryData(DATA);
    const totalScore = DATA.reduce((acc, item) => acc + item.score, 0);
    const averageScore = Math.floor(totalScore / DATA.length);
    setAverageScore(averageScore);
  }, []);

  return (
    <div className="w-[375px] bg-white lg:flex lg:w-[736px] lg:rounded-[32px]">
      <ResultSection averageScore={averageScore} />
      <SummarySection summaryData={summaryData} />
    </div>
  );
};

export default ResultsSummary;
