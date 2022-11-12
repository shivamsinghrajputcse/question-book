const { S3 } = require('aws-sdk');
const uuid = require("uuid").v4;

const s3Upload = async (file, body) => {
    const s3 = new S3();
    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `questionsPDF/${body.instituteId}_${body.session}_${body.branch}_${uuid()}.pdf`,
        Body: file.buffer
    }

    return await s3.upload(param).promise();
}

module.exports = s3Upload;