import ResultsSummary from '@/components/ResultsSummary';
import ViewportWidthIndicator from '@/components/ViewportSizeIndicator';

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#ECF2FF]">
      <ViewportWidthIndicator />
      <ResultsSummary />
    </div>
  );
};

export default App;
