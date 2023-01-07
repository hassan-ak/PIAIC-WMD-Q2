'use client';

import { useRouter } from 'next/navigation';

export default function Name() {
  const router = useRouter();
  return (
    <div>
      <h1>Linking in NextJS 13</h1>
      <h3>Route - Link Element - Client Component</h3>
      <p>My name is Hassan Ali Khan</p>
      <br />
      <button type='button' onClick={() => router.push('/name/address')}>
        Get Address
      </button>
    </div>
  );
}
