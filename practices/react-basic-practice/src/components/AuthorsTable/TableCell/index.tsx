interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableCell = ({ children, className = '' }: TableCellProps) => (
  <div className={`flex-1 py-[11px] ${className}`}>{children}</div>
);

export default TableCell;
