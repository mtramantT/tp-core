import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "../../core";

export interface ListGroupItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  active?: boolean;
  dataIndex?: number;
}
const Item = styled.li.attrs((props) => {
  return { className: props.className || "list-group-item" };
})<{ active?: boolean }>`
  user-select: none;
  padding: 0.75rem 1rem;
  ${({ theme, active }) => css`
    background-color: ${active && theme.colors.primary};
    color: ${active && theme.colors.white};
  `}
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

const ListGroupItem: React.FC<ListGroupItemProps> = (
  props: ListGroupItemProps
) => {
  const { active, dataIndex } = props;
  return <Item active={active} data-index={dataIndex} {...props} />;
};

Item.defaultProps = {
  theme: defaultTheme,
};

export default ListGroupItem;
