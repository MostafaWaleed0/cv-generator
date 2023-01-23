import { DataType } from 'lib/types';

type Props = {
  summary: DataType['summary'];
};

const Summary: React.FC<Props> = ({ summary: { summary } }) => (
  <>
    {summary?.length ? (
      <section className="summary">
        <h2>Summary</h2>
        <p>{summary}</p>
      </section>
    ) : null}
  </>
);

export default Summary;
