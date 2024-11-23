import { BlogCard } from '@/Components/Blog/BlogCard';
import StandardLayout from '@/Layouts/StandardLayout';
import { Grid, SimpleGrid } from '@mantine/core';
import * as React from 'react';
export interface IListBlogsProps {
  blogs: [{id: number, title: string, readable_created_at: string}];
}

export default function ListBlogs(props: IListBlogsProps) {
  return (
    <StandardLayout>
      <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3,  lg: 4 }}
      >
        {props.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
        ))}
      </SimpleGrid>
    </StandardLayout>
  );
}

