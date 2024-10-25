interface BreadcrumbProps {
  currentPage: string;
}

const Breadcrumb = ({ currentPage }: BreadcrumbProps) => (
  <p className="text-base mb-1.5 text-xs">
    Pages / <span className="text-dark">{currentPage}</span>
  </p>
);

export default Breadcrumb;
