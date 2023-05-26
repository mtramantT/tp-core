import React, { CSSProperties, ReactElement, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { isListGroupItem } from "./ListGroupHelper";
import { ListGroupItemProps } from "./ListGroupItem";

import * as Theme from "@/core/Theme.json";

interface ListGroupProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode | React.ReactNode[];
  showActive?: boolean;
  hover?: boolean;
  theme?: string;
}

const List = styled.ul.attrs<{}>({ className: "list-group" })<{
  hover?: boolean;
}>`
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: rgb(187, 174, 157);
  border-radius: 0.4rem;
  color: #ddd;

  ${({ hover }) =>
    hover &&
    css`
      li:hover {
        background-color: rgb(43, 71, 92);
        color: #ddd;
      }
    `}
`;

const ListGroup: React.FC<ListGroupProps> = (props: ListGroupProps) => {
  const { children, showActive, hover } = props;
  const activeIndex = useRef<number>(-1);
  const [listItems, setListItems] = React.useState<
    ReactElement<ListGroupItemProps>[]
  >([]);

  if (!isListGroupItem(children)) {
    throw new Error("List group must contain <ListGroupItem /> components.");
  }

  useEffect(() => {
    let newItems: ReactElement<ListGroupItemProps>[] = Array.isArray(children)
      ? [...children]
      : [children];
    newItems = newItems.map((item, index) => {
      let customStyle: CSSProperties =
        index === 0
          ? { borderRadius: "0.4rem 0.4rem 0 0" }
          : index === newItems.length - 1
          ? { borderRadius: "0 0 0.4rem 0.4rem" }
          : {};
      return React.cloneElement(item, {
        key: `li-${index}`,
        dataIndex: index,
        style: { ...customStyle, ...item.props.style },
      });
    });
    setListItems(newItems);
  }, [children]);

  const handleSetActive = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const dataIndexElement = target.closest("[data-index]") as HTMLElement;
    if (dataIndexElement && dataIndexElement.dataset.index) {
      const index = parseInt(dataIndexElement.dataset.index);
      const newItems = [...listItems];
      if (activeIndex.current !== -1) {
        newItems[activeIndex.current] = React.cloneElement(
          newItems[activeIndex.current],
          {
            active: false,
          }
        );
      }
      if (index !== activeIndex.current) {
        newItems[index] = React.cloneElement(newItems[index], {
          active: true,
        });
        activeIndex.current = index;
      } else {
        activeIndex.current = -1;
      }

      setListItems(newItems);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    event.preventDefault();
    if (showActive) {
      handleSetActive(event);
    }
    props.onClick && props.onClick(event);
  };

  return (
    <List {...props} hover={hover} onClick={handleClick}>
      {listItems}
    </List>
  );
};

export default ListGroup;
