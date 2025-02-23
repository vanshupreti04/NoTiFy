import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export function useRealtimeData(table, initialData = []) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const channel = supabase
      .channel(`public:${table}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table },
        (payload) => {
          setData((prevData) => {
            if (payload.eventType === "INSERT") {
              return [...prevData, payload.new];
            }
            if (payload.eventType === "UPDATE") {
              return prevData.map((item) =>
                item.id === payload.new.id ? payload.new : item
              );
            }
            if (payload.eventType === "DELETE") {
              return prevData.filter((item) => item.id !== payload.old.id);
            }
            return prevData;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table]);

  return data;
}
