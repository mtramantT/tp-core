import { defaultTheme } from "@/core";
import { isColorPallette } from "@/core/theme/colors";
import React from "react";
import styled from "styled-components";

type ButtonColor = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // label?: string;
  // children?: string;
  // primary?: boolean;
  // backgroundColor?: string;
  schema?: ButtonColor;
}

const StyleWrapper = styled.button<{ schema: ButtonColor }>`
  background-color: ${({ schema, theme }) => theme.colorSchema[schema].default};
  color: ${({ schema, theme }) => theme.colorSchema[schema].text};
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { schema, ...buttonProps } = props;
  return <StyleWrapper {...buttonProps} schema={schema || "primary"} />;
};

StyleWrapper.defaultProps = {
  theme: defaultTheme,
};

// const StyledButton = styled.button<{
//   isPrimary?: boolean;
// }>`
//   border: 0;
//   border-radius: 0.25em;
//   font-weight: 700;
//   line-height: 1;
//   display: inline-block;
//   background-color: ${({ isPrimary }) =>
//     isPrimary ? "rgb(43, 71, 92)" : "rgb(187, 174, 157)"};
//   color: #ddd;
//   padding: 0.5em 1em;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
//   const { label, children, primary, backgroundColor } = props;

//   return (
//     <StyledButton
//       isPrimary={primary}
//       style={{ backgroundColor: backgroundColor }}
//     >
//       {label || children || ""}
//     </StyledButton>
//   );
// };

export default Button;
