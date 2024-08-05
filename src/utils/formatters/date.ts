export function parseDate(dateString: string): Date {
    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date string");
    }
    return parsedDate;
  }
  
export function formatDate_MonthDayYear(date: Date): string {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  }
  
export function formatDate_DayMonthDay(date: Date): string {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(date);
  }
  
export function formatDate_MonthYear(date: Date): string {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
  }
  
export function formatDate_MMYYYY(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${month}/${year}`;
  }
  
export function formatDate_DDMMYYYY(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
  
export function formatDate_MonthDayYearNoComma(date: Date): string {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      .format(date)
      .replace(',', '');
  }
  
export function formatDate_FullDayMonthDay(date: Date): string {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(date);
  }
  