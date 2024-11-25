import { useState, Suspense, lazy } from 'react';
import { Loading } from '@/components';

// Lazy load MarkdownPreview with a delay
const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview')));

const MarkdownEditor = () => {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('Hello, **world**!');

  return (
    <>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ width: '100%', height: '100px', marginBottom: '10px' }}
      />
      <label>
        <input
          type='checkbox'
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
};

// Add a fixed delay so you can see the loading state
const delayForDemo = <T,>(promise: Promise<T>): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

export default MarkdownEditor;
