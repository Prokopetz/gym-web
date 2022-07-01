import { Playlist } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import getPrismaClient from "../../prisma/getPrismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Playlist>
) {
  const prisma = getPrismaClient();
  const playlist = JSON.parse(req.body) as Playlist;
  const updatedPlaylist = await prisma.playlist.update({
    data: {name: playlist.name, icon: playlist.icon},
    where: { id: playlist.id },
  });
  res.status(200).json(updatedPlaylist);
}
