export function useToast() {
    return {
      success: (message) => alert(`Success: ${message}`),
      error: (message) => alert(`Error: ${message}`),
      info: (message) => alert(`Info: ${message}`),
    };
  }
  