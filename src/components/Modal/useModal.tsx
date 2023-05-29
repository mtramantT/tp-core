import { useState, useEffect } from "react";

const useModal = (/* arguments here */) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, toggle };
};

export default useModal;
