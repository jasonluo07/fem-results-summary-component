function SummarySection() {
  return (
    <section>
      <h2>Summary</h2>
      <ul>
        <li>
          <div>
            <img src="/src/assets/images/icon-reaction.svg" alt="Reaction" />
            <h3>Reaction</h3>
          </div>
          <p>80 / 100</p>
        </li>
        <li>
          <div>
            <img src="/src/assets/images/icon-memory.svg" alt="Memory" />
            <h3>Memory</h3>
          </div>
          <p>92 / 100</p>
        </li>
        <li>
          <div>
            <img src="/src/assets/images/icon-verbal.svg" alt="Verbal" />
            <h3>Verbal</h3>
          </div>
          <p>61 / 100</p>
        </li>
        <li>
          <div>
            <img src="/src/assets/images/icon-visual.svg" alt="Visual" />
            <h3>Visual</h3>
          </div>
          <p>73 / 100</p>
        </li>
      </ul>
      <button>Continue</button>
    </section>
  );
}

export default SummarySection;
