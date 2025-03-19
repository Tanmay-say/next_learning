interface UserPageProps {
  params: { id: string }; // `params.id` will be the dynamic value from the URL
}

export default function UserPage({ params }: UserPageProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="mt-2 text-lg">User ID: {params.id}</p>
    </div>
  );
}
