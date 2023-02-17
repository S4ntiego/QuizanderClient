import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
//configure client
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.APP_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.APP_AWS_SECRET_KEY!,
  },
  region: process.env.APP_AWS_REGION,
});

const upload = async (bucket: string, fileName: string, body: Buffer) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: bucket,
      Key: fileName,
      Body: body,
      ACL: "public-read",
    };

    const putCommand = new PutObjectCommand(params);
    s3.send(putCommand);

    s3.send(putCommand, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

export default upload;
