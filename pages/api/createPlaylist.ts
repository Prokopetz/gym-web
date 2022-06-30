import { NextApiRequest, NextApiResponse } from "next";
import getPrismaClient from "../../prisma/getPrismaClient";
import { Playlist } from "../../types/Playlist";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Playlist>
) {
  const prisma = getPrismaClient();
  const defaultPlaylist = { name: "New playlist", icon: "💪" };
  const newPlaylist = await prisma.playlist.create({
    data: defaultPlaylist,
    include: { exercises: true },
  });
  res.status(200).json(newPlaylist);
}
