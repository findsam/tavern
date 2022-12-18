export default ({ post }) => {
  return (
    <tr className="">
      <th scope="row" className="py-3 px-6 font-normal">
        {post.title}
      </th>
      <td className="py-4 px-6">{post.genre}</td>
      <td className="py-4 px-6">{post.author}</td>
      <td className="py-4 px-6">
        {post.comments ? `${post.comments} comments` : "Discuss"}
      </td>
      <td className="py-4 px-6">
        <div className="flex -space-x-3">
          {post.contributors.slice(0, 3).map((contributor, index) => (
            <img
              className="w-8 h-8 rounded-full border-2 border-neutral-800"
              src={contributor.img}
            />
          ))}
          {post.contributors.length > 3 && (
            <a
              className="flex justify-center items-center rounded-full bg-neutral-800 border-2 border-neutral-800 w-8 h-8 text-xs font-medium text-white"
              href="#"
            >
              ...
            </a>
          )}
        </div>
      </td>
    </tr>
  );
};
