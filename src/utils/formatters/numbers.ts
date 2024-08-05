export function formatNumberWithCommas(value: number): string {
    return new Intl.NumberFormat('en-US').format(value);
  }
  
  export function formatPercentage(value: number): string {
    return `${value.toFixed(2)}%`;
  }
  