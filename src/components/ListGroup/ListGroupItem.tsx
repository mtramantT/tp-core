import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ListGroupItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  active?: boolean;
  dataIndex?: number;
}

interface StyleProps {
  active?: boolean;
}

const Item = styled.li.attrs<{}>({ className: "list-group-item" })`
  user-select: none;
  padding: 0.75rem 1rem;
  ${({ active }: StyleProps) => (active ? "background-color: #007bff;" : "")}
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

const ListGroupItem: React.FC<ListGroupItemProps> = (
  props: ListGroupItemProps
) => {
  const { active, dataIndex } = props;
  return <Item active={active} data-index={dataIndex} {...props} />;
};

export default ListGroupItem;
