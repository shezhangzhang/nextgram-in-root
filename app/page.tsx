import Link from "next/link";

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`/${id}`}>
          home page rendered: {id}
        </Link>
      ))}
    </section>
  );
}
