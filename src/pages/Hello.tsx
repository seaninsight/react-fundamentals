interface HelloProps {
  name: string;
}

export default function Hello({ name = "there" }: HelloProps) {
  return (
    <div className="Hello">
      <h1>Hello, {name}!</h1>
    </div>
  );
}
