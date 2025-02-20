import { useEffect, useState } from 'react';
import { supabase } from "../../backend/supabaseClient";

export function useRealtimeData(table, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const subscription = supabase
      .channel(`public:${table}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table },
        (payload) => {
          // Update state with payload.new (you can customize merge logic as needed)
          setData(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [table]);

  return data;
}
