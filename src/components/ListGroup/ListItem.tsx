import React from "react";
import styled from "styled-components";

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  text?: string;
}

const Item = styled.li``;

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const { text } = props;
  return <Item>{text}</Item>;
};

export default ListItem;
