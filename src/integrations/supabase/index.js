import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

### activity

| name       | type        | format | required |
|------------|-------------|--------|----------|
| id         | uuid        | string | true     |
| created_at | timestamptz | string | true     |
| type       | text        | string | true     |
| started_at | timestamptz | string | true     |
| ended_at   | timestamptz | string | true     |
| distance   | int8        | number | true     |

### users

| name       | type        | format | required |
|------------|-------------|--------|----------|
| id         | uuid        | string | true     |
| created_at | timestamptz | string | true     |

*/

export const useActivity = () => useQuery({
    queryKey: ['activity'],
    queryFn: () => fromSupabase(supabase.from('activity').select('*')),
});

export const useAddActivity = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newActivity) => fromSupabase(supabase.from('activity').insert([newActivity])),
        onSuccess: () => {
            queryClient.invalidateQueries('activity');
        },
    });
};

export const useUpdateActivity = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedActivity) => fromSupabase(supabase.from('activity').update(updatedActivity).eq('id', updatedActivity.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('activity');
        },
    });
};

export const useDeleteActivity = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('activity').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('activity');
        },
    });
};

export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: () => fromSupabase(supabase.from('users').select('*')),
});

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => fromSupabase(supabase.from('users').insert([newUser])),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUser) => fromSupabase(supabase.from('users').update(updatedUser).eq('id', updatedUser.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('users').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};