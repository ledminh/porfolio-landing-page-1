import { latestPublications } from "@/data";

export default function LastestPublications() {
  return (
    <div>
      <div>Lastest Publications</div>
      <ul>
        {latestPublications.map((publication) => (
          <li key={publication.id}>
            <div>{publication.image}</div>
            <div>{publication.title}</div>
            <div>{publication.date}</div>
            <div>{publication.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
