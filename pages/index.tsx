import { Container } from 'components/common';
import { NextLink } from 'components/ui';
import Image from 'next/image';

export default function Home() {
  return (
    <Container>
      <section className="container">
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row">
          <div className="py-20 md:max-w-[33ch] space-y-5 ">
            <h1 className="capitalize">
              free CV builder make your CV online quickly in {new Date().getFullYear()}
            </h1>
            <p>
              It might be difficult to get started when you&apos;re doing it all by yourself while
              creating a curriculum vitae. Let&apos;s do better than the competitors and land you
              the ideal position.
            </p>
            <NextLink href="/generator">Generate CV</NextLink>
          </div>
          <Image
            src="/static/images/istockphoto-1166944321-612x612-transformed.webp"
            width={500}
            height={500}
            alt=""
            className="rounded-full"
          />
        </div>
      </section>
    </Container>
  );
}
