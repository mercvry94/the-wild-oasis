import { useSearchParams } from "react-router-dom";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last") ? 7 : searchParams.get("last");
}
