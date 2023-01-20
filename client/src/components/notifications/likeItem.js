import Image from "next/image";
export const LikeItem = (props) => {
  return (
    <li className="flex gap-3.5 p-5 border-b border-main-border">
      <div className="shrink-0">
        <Image
          className="rounded-full ring-1 ring-main-border p-0.5"
          height="38"
          width="38"
          src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
          alt="discord user profile picture generated by api"
        />
      </div>
      <div className="grid gap-1.5">
        <p className="inline text-xs tracking-wide text-left text-white/70">
          <span className="inline">Jay Pacheco liked your post</span>
          <a className="inline text-green-400 text-ellipsis">
            {" "}
            Arthas Menethil
          </a>{" "}
        </p>
        <p className="inline-flex text-xs tracking-wide text-left text-white/70">
          1h Ago
        </p>
      </div>
    </li>
  );
};