export default function BrickOneCase({ children, className }) {
    return (
      <div className={`w-full border border-border aspect-square p-4 ${className}`}>
        {children}
      </div>
    );
}
