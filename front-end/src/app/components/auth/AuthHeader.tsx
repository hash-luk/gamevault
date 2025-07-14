interface AuthHeaderProps {
  title: string;
  description: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="text-gray-500">{description}</span>
    </div>
  );
}
