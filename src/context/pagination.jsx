import { createContext, useState } from "react";

export const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const [page, setPage] = useState(1);

  return (
    <PaginationContext.Provider
      value={{ start, setStart, end, setEnd, page, setPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
