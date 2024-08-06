// inquiryTypes.ts
export interface Writer {
  image: string;
  nickname: string;
}

export interface Inquiry {
  id: number;
  content: string;
  writer: Writer;
  createdAt: string;
}

export type InqueryResponse = Inquiry[];

export interface UseInqueryReturn {
  inquiries: Inquiry[];
  isLoading: boolean;
  error: Error | null;
}
