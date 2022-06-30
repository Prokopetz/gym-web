import { NextApiRequest, NextApiResponse } from "next";
import getPrismaClient from "../../prisma/getPrismaClient";
import { Playlist } from "../../types/Playlist";

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Playlist[]>
  ) {
    const prisma = getPrismaClient();
    const playlists = await prisma.playlist.findMany({include: { exercises: true  }})
    res.status(200).json(playlists);
  }
  