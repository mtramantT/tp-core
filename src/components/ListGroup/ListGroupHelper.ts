import React, { ReactNode, ReactElement } from "react";
import { ListGroupItemProps } from "./ListGroupItem";

export function isListGroupItem(node: ReactNode | ReactNode[]): node is ReactElement<ListGroupItemProps> {
    if (Array.isArray(node)) {
      return processNodes(node);
    }
  
    return processNode(node);
}


  const processNode = (node: ReactNode) => {
    if (!React.isValidElement(node)) {
      return false;
    }
  
    const { type } = node;
  
    if (typeof type === "string") {
      return type.toLowerCase() === "li";
    }
  
    if (typeof type === "function") {
      // Check the display name or component type
      const { name } = type;
      return name === "ListGroupItem";
    }
  
    return false;
  }

  const processNodes = (node: ReactNode[]) => {
    return node.every(processNode);
  } 