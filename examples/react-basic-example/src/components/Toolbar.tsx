interface AlertButtonProps {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const AlertButton = ({
  message,
  children,
  variant = "primary",
}: AlertButtonProps) => {
  const className =
    variant === "primary" ? "btn btn-primary" : "btn btn-secondary";

  return (
    <button onClick={() => alert(message)} className={className}>
      {children}
    </button>
  );
};

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <AlertButton message="Playing!" variant="primary">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!" variant="secondary">
        Upload Image
      </AlertButton>
    </div>
  );
};
