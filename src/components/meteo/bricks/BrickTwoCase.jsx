export default function BrickTwoCase({ children, className }) {
    return (
      <div className={`w-full  border border-border p-4 ${className}`}>
        {children}
      </div>
    );
}
