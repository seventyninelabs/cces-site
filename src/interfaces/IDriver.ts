export default interface IDriver {
    _id?: string;
    name: string;
    full_name: string;
    active?: boolean;
    enrollment: string;
    updated_at?: string | null;
    created_at?: string;
  }