import * as React from "react";

export function Tabs({ children, value, defaultValue, onValueChange, className }) {
  const [current, setCurrent] = React.useState(defaultValue || "");

  const handleChange = (val) => {
    setCurrent(val);
    onValueChange?.(val);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          current,
          onValueChange: handleChange,
        });
      })}
    </div>
  );
}

export function TabsList({ children, current, onValueChange }) {
  return (
    <div className="inline-flex space-x-2 rounded-md bg-gray-700 p-1">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          isActive: child.props.value === current,
          onClick: () => onValueChange(child.props.value),
        });
      })}
    </div>
  );
}

export function TabsTrigger({ value, children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-white text-black shadow"
          : "text-white hover:bg-gray-600 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, current, children }) {
  if (value !== current) return null;
  return <div>{children}</div>;
}
