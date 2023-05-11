'use client';

import { SetStateAction, useState } from 'react';

export default function Component1() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState();
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That&#39;s right!</h1>;
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err: any) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {error !== null && <p className='Error'>error</p>}
      </form>
    </>
  );
}

function submitForm(answer: string) {
  // Pretend it's hitting the network.
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
