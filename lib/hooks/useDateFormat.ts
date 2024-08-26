// hooks/useDateFormat.ts
import { useCallback } from "react";

const useDateFormat = () => {
  const format = useCallback((date: Date) => {
    const newDate = new Date(date);
    const formatDate = `${newDate.getFullYear()}.${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}.${String(newDate.getDate()).padStart(2, "0")}`;
    return formatDate;
  }, []);

  return { format };
};

export default useDateFormat;
