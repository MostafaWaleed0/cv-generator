import { Cloud, Email, Linkedin, Location, Phone } from 'components/icons';
import { Text } from 'components/ui';
import { DataType } from 'lib/types';
import Image from 'next/image';

type Props = {
  contact: DataType['contact'];
};

const ContactList: React.FC<Props> = ({
  contact: { name, job, email, phone, linkedin, city, state, country, website, image }
}) => {
  const address = (): string => [city, state, country].filter((x) => x).join(', ');

  return (
    <div>
      {image && <Image src={image} width={170} height={170} alt={name || ''} />}
      {name ? (
        <section className="contact">
          <h1>{name}</h1>
          <h2>{job}</h2>
          <h3>Contact</h3>
          <ul role="list" className="contact__list">
            <Text check={address()}>
              <li className="flex items-center gap-2">
                <Location width="1em" height="1em" viewBox="0 0 24 24" />
                {address()}
              </li>
            </Text>
            <li className="flex items-center gap-2">
              <Email width="1em" height="1em" viewBox="0 0 24 24" />
              {email}
            </li>
            <li className="flex items-center gap-2">
              <Phone width="1em" height="1em" viewBox="0 0 24 24" />
              {phone}
            </li>
            <Text check={linkedin!}>
              <li className="flex items-center gap-2">
                <Linkedin width="1em" height="1em" viewBox="0 0 24 24" />
                {linkedin}
              </li>
            </Text>
            <Text check={website!}>
              <li className="flex items-center gap-2">
                <Cloud width="1em" height="1em" viewBox="0 0 24 24" />
                {website?.endsWith('/') ? website.slice(0, -1) : website}
              </li>
            </Text>
          </ul>
        </section>
      ) : null}
    </div>
  );
};

export default ContactList;
