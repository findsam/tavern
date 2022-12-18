import { DUMMY_DATA_POSTS } from "../static/dummydata";
import Row from "./row";

export default function Posts() {
  return (
    <div className="py-4">
      <h2 className="font-medium text-lg tracking-wide flex gap-3 block">
        Popular Threads
      </h2>

      <div className="overflow-x-auto relative mt-4 bg-neutral-800 rounded-md">
        <table className="w-full text-sm text-left tracking-wide text-white/70 font-normal">
          <thead className="text-sm font-semibold tracking-wide">
            <tr>
              <th scope="col" className="py-3 px-6 font-semibold">
                Title
              </th>
              <th scope="col" className="py-3 px-6  font-semibold">
                Genre
              </th>
              <th scope="col" className="py-3 px-6  font-semibold">
                Posted By
              </th>
              <th scope="col" className="py-3 px-6  font-semibold">
                Comments
              </th>
              <th scope="col" className="py-3 px-6  font-semibold">
                Contributions
              </th>
            </tr>
          </thead>
          <tbody className="bg-black/50 text-white">
            {DUMMY_DATA_POSTS.map((post, index) => (
              <Row post={post} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
