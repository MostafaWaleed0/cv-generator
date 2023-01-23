import { Text } from 'components/ui';
import useLocalStorage from 'lib/hooks/useLocalStorage';
import dompurify from 'dompurify';

type Props = {
  data: any;
  title: string;
};

const GeneratorsList: React.FC<Props> = ({ data, title }) => {
  const sanitizer = dompurify.sanitize;

  const [titles, setTitles] = useLocalStorage<{ [x: string]: string }>(
    'titles',
    Object.assign(
      ...(Object.keys(data).map((key) => ({
        [key]: key
      })) as []),
      {}
    )
  );

  return Array.isArray(data[title]) && data[title].length ? (
    <section className={title}>
      <h2
        onBlur={(e) =>
          setTitles((prev: { [x: string]: string }) => ({ ...prev, [title]: e.target.innerHTML }))
        }
        contentEditable={true}
        suppressContentEditableWarning={true}
        spellCheck={true}
      >
        {titles[title]}
      </h2>
      <ul role="list">
        {data[title].map((items: { [x: string]: string }) => (
          <li key={items['id']} className="item">
            {Object.keys(items).map((key) => {
              if (key !== 'id')
                return key === 'start_time' ? (
                  <Text check={items['start_time']}>
                    <span className="time">
                      {items['start_time']} {' - '}
                      {items['end_time']}
                    </span>
                  </Text>
                ) : key !== 'end_time' ? (
                  <Text check={items[key]}>
                    <span
                      className={key.replaceAll('_', '-')}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(items[key].replace(/\n/i, '<br />'))
                      }}
                    ></span>
                  </Text>
                ) : null;
            })}
          </li>
        ))}
      </ul>
    </section>
  ) : null;
};

export default GeneratorsList;
