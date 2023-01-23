import { Container } from 'components/common';
import { Loading } from 'components/ui';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ResumeView = dynamic(() => import('components/resume/ResumeView'), {
  loading: () => <Loading />,
  ssr: false
});

export default function Generator() {
  return (
    <Container>
      <Suspense fallback={null}>
        <ResumeView />
      </Suspense>
    </Container>
  );
}
