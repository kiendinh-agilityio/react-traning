import { Remarkable } from 'remarkable';

const md = new Remarkable();

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => (
  <div
    className='content'
    dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
  />
);

export default MarkdownPreview;
