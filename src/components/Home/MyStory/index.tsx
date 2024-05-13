import { myStory } from "@/data";
export default function MyStory() {
  return (
    <div>
      <h2>My Story</h2>
      <p>{myStory.content}</p>
    </div>
  );
}
