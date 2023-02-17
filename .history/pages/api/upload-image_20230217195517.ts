import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import runMiddleware from "@/lib/runMiddleware";
import uploadS3 from "@/lib/awsUpload";

interface RequestWithFile extends NextApiRequest {
  file?: any;
}

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: RequestWithFile, res: NextApiResponse) => {
  try {
    console.log(req.file);

    // if (req.method === "POST") {
    //   await runMiddleware(req, res, upload.single("coverImage"));

    //   if (!req.file) return res.status(400).json({ error: "File empty" });

    //   const { fileName } = req.body;

    //   if (!fileName) return res.status(400).json({ error: "FileName empty" });

    //   const uploadResult = (await uploadS3(
    //     process.env.BUCKET_NAME!,
    //     fileName,
    //     req.file.buffer,
    //   )) as { Location: string };

    //   return res.json({ src: uploadResult.Location, error: "" });
    // }

    // return res.status(404).json({ error: "404 not found" });
  } catch (error: any) {
    // return res.status(500).json({ error: error.name, message: error.message });
  }
};

export default handler;
