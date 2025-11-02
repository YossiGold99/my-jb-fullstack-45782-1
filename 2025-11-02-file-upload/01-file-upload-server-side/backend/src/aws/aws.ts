import { CreateBucketCommand, S3Client } from '@aws-sdk/client-s3';
import config from 'config';

const s3Connection = config.get('s3.connection');

const s3Client = new S3Client(s3Connection);

export async function createAppBuketIfNotExists() {
    try {
        await s3Client.send(
            new CreateBucketCommand({
                Bucket: config.get<string>('s3.bucket'),
            })
        )
    } catch (e) {
        console.log('Error creating bucket:', e);
    }
}