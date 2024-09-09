import { ReactNode } from "react";

interface PanelProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
}

export const Panel = ({ title, children, isActive, onShow }: PanelProps) => {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="btn btn-primary" onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
};
