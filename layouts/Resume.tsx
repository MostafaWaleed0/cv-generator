import { FormInput } from 'components/form';
import ContactList from 'components/resume/ContactList';
import GeneratorsList from 'components/resume/GeneratorsList';
import Summary from 'components/resume/Summary';
import useLocalStorage from 'lib/hooks/useLocalStorage';
import { DataType } from 'lib/types';
import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

type Props = {
  data: DataType;
};

const Resume: React.FC<Props> = ({ data }) => {
  const cvRef = useRef<any>();
  const [isIcons, setIcons] = useLocalStorage('icons', true);
  const handlePrint = useReactToPrint({
    content: () => cvRef.current
  });
  const [range, setRange] = useLocalStorage<{ size: number; line_height: number }>('ranges', {
    size: 8.5,
    line_height: 1
  });

  const handleRange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setRange((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const svgs = document.querySelectorAll('.cv svg');
    svgs.forEach((svg: any) =>
      isIcons ? (svg.style.display = 'block') : (svg.style.display = 'none')
    );
  }, [isIcons]);

  const styles = {
    fontSize: `${range.size}pt`,
    lineHeight: `${range.line_height}em`
  };

  return (
    <div className="text-xs md:text-base">
      <header className="grid grid-cols-3 gap-3 p-5 md:p-10 rounded relative z-50 text-center">
        <FormInput
          id="icons"
          type="checkbox"
          checked={isIcons}
          onChange={() => setIcons((x) => !x)}
          label="show icons?"
          className="accent-pink-500 w-5 h-5 mx-auto mt-2"
        />
        <FormInput
          id="size"
          type="range"
          min="6"
          max="14"
          step="0.5"
          value={range.size}
          onChange={handleRange}
          label={`${range.size}pt`}
          className="accent-pink-500 w-full mt-2"
        />
        <FormInput
          id="line_height"
          type="range"
          min="1"
          max="3"
          step="0.05"
          value={range.line_height}
          onChange={handleRange}
          label={`${range.line_height}em`}
          className="accent-pink-500 w-full mt-2"
        />
      </header>
      <div className="flex justify-center w-full min-w-auto max-w-[1069px] mx-auto origin-[center_top] mb-[5.4rem] rounded-md scale-[.4] md:scale-[.7] lg:scale-100">
        <div className="w-[calc(26cm+4rem)] border-[2rem] w-base-0">
          <div className="min-h-[3.2in]  rounded-md">
            <div>
              <div className="cv" ref={cvRef} style={styles}>
                <section className="header">
                  <ContactList contact={data.contact} />
                </section>
                <div className="main">
                  <Summary summary={data.summary} />
                  {Object.keys(data).map((key) => (
                    <GeneratorsList key={key} data={data} title={key} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Resume;
