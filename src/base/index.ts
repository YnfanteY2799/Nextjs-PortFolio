export * from "./Supabase";

export interface DB {
  public: {
    Tables: {
      Projects: {
        Row: {
          id: number;
          name: string;
          description: string;
          image_url: string;
          tags: string | Array<string>;
          created_at: Date;
        };
        Insert: {
          id?: number;
          name: string;
          description: string;
          image_url: string;
          tags: string | Array<string>;
        };
        Update: {
          id?: number;
          name: string;
          description: string;
          image_url: string;
          tags: string | Array<string>;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
