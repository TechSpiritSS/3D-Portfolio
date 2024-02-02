'use client';

import Loader from '@/components/Loader';
import Home from './Home';

export default function Page() {
  if (typeof window !== 'undefined') {
    return (
      <main>
        <Home />
      </main>
    );
  }

  return (
    <main>
      <Loader />
      Loading...
    </main>
  );
}

