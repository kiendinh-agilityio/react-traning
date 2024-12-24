// Shared interface for the toast item
interface ToastItem {
  id: number;
  message: string;
}

interface ToastProps extends ToastItem {
  onClose: (id: number) => void;
}

interface ToastContainerProps {
  toasts: ToastItem[];
  onClose: (id: number) => void;
}

const Toast = ({ id, message, onClose }: ToastProps) => (
  <div
    style={{
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '10px 20px',
      marginBottom: '10px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <span>{message}</span>
    <button
      onClick={() => onClose(id)}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      ✖
    </button>
  </div>
);

const ToastContainer = ({ toasts, onClose }: ToastContainerProps) => (
  <div
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      maxWidth: '300px',
    }}
  >
    {toasts.map((toast) => (
      <Toast
        key={toast.id}
        id={toast.id}
        message={toast.message}
        onClose={onClose}
      />
    ))}
  </div>
);

export default ToastContainer;
