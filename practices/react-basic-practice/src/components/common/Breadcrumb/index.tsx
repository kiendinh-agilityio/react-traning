interface BreadcrumbProps {
  currentPage: string;
  label: string;
}

const Breadcrumb = ({ currentPage, label }: BreadcrumbProps) => (
  <p className="text-base mb-1.5 text-xs">
    {label} / <span className="text-dark">{currentPage}</span>
  </p>
);

export default Breadcrumb;
