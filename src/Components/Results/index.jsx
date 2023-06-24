import JSONPretty from 'react-json-pretty';
import JSONPrettyMonikaiTheme from 'react-json-pretty/dist/monikai';
import './Results.scss';


function Results({ data, loading }) {
  return (
    <section>
      {
        loading ? <p>Loading...</p> :
          <pre data-testid='results-pre'>
            {
              data
                ? <JSONPretty data={data} theme={JSONPrettyMonikaiTheme}></JSONPretty>
                : null
            }
          </pre>
      }
    </section>
  );
}

export default Results;
