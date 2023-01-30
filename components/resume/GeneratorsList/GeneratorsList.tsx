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

  const handleOnBlur = (e: { target: { innerHTML: string } }) => {
    setTitles((prev: { [x: string]: string }) => ({ ...prev, [title]: e.target.innerHTML }));
  };

  return Array.isArray(data[title]) && data[title].length ? (
    <section className={title}>
      <h2
        onBlur={handleOnBlur}
        contentEditable
        suppressContentEditableWarning
        spellCheck
        role="presentation"
        tabIndex={0}
      >
        {titles[title]}
      </h2>
      <ul role="list">
        {data[title].map((items: { [x: string]: string }) => (
          <li key={items['id']} className="item">
            {Object.keys(items).map((key) => {
              return key !== 'id' ? (
                key === 'start_time' ? (
                  <Text check={items['start_time']}>
                    <span className="time">
                      {items['end_time']
                        ? `${items['start_time']} - ${items['end_time']}`
                        : items['start_time']}
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
                ) : null
              ) : null;
            })}
          </li>
        ))}
      </ul>
    </section>
  ) : null;
};

export default GeneratorsList;
