import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: Props) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-black/80">
      <div className="bg-white p-2">
        <div className="flex justify-end">
          <Link href="/movies">close modal</Link>
        </div>
        <div>modal id={id}</div>
      </div>
    </div>
  );
};

export default Page;
