interface LinkItemProps {
  name: string;
}

export function LinkItem({ name }: LinkItemProps) {
  return (
    <li>
      <a href="#" className="hover:text-accent-default transition-all">
        {name}
      </a>
    </li>
  );
}
