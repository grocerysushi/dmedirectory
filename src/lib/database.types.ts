export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          description: string | null
          address: string
          city: string
          state: string
          zip_code: string
          phone: string | null
          email: string | null
          website: string | null
          logo_url: string | null
          services: string[] | null
          certifications: string[] | null
          verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          address: string
          city: string
          state: string
          zip_code: string
          phone?: string | null
          email?: string | null
          website?: string | null
          logo_url?: string | null
          services?: string[] | null
          certifications?: string[] | null
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          address?: string
          city?: string
          state?: string
          zip_code?: string
          phone?: string | null
          email?: string | null
          website?: string | null
          logo_url?: string | null
          services?: string[] | null
          certifications?: string[] | null
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      company_categories: {
        Row: {
          company_id: string
          category_id: string
          created_at: string
        }
        Insert: {
          company_id: string
          category_id: string
          created_at?: string
        }
        Update: {
          company_id?: string
          category_id?: string
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          company_id: string
          user_id: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          user_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          name: string | null
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'user' | 'admin'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Company = Database['public']['Tables']['companies']['Row']
export type CompanyInsert = Database['public']['Tables']['companies']['Insert']
export type CompanyUpdate = Database['public']['Tables']['companies']['Update']

export type Category = Database['public']['Tables']['categories']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type Profile = Database['public']['Tables']['profiles']['Row']