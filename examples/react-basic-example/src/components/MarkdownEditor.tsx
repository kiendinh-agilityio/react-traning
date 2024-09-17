import { useState, Suspense, lazy } from "react";
import { Loading } from "./index";

const MarkdownPreview = lazy(() => delayForDemo(import("./MarkdownPreview")));

export const MarkdownEditor = () => {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>("Hello, **world**!");

  return (
    <>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
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

const delayForDemo = <T,>(promise: Promise<T>): Promise<T> => {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(promise), 2000);
  });
};
