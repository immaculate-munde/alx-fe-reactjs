import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute caching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refetch Posts
      </button>

      <ul className="mt-4 space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-3 rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
