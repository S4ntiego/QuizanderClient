import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
//configure client
const s3 = new S3Client({
  credentials: {
    accessKeyId: "AKIAT7UTU5AF545TEOGN",
    secretAccessKey: "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",
  },
  region: "eu-central-1",
});

const upload = async (
  bucket: string,
  fileName: string,
  buffer: Buffer,
  mimetype: any,
) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: bucket,
      Key: fileName,
      Body: buffer,
      ContentType: mimetype,
    };

    const putCommand = new PutObjectCommand(params);

    s3.send(putCommand, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

export default upload;
