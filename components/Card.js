import { useState } from "react";

const Card = ({
  className,
  children,
  style,
  onClick,
  title,
  content,
  clickable,
  dataid,
}) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div
      className={
        clickable
          ? hoverState
            ? `shadow border pe-auto clickable rounded p-3 ${className}`
            : `shadow-sm border pe-auto clickable rounded p-3 ${className}`
          : `shadow-sm border pe-auto rounded p-3 ${className}`
      }
      style={style || {}}
      onClick={onClick ? onClick : () => {}}
      onMouseEnter={() => {
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
      dataid={dataid || "none"}
    >
      <h5 className={!content ? "my-0" : ""}>{title || ""}</h5>
      {content ? <p>{content || ""}</p> : ""}
      {children}
    </div>
  );
};

export default Card;
