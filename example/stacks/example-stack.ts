import { App, Stack, StackProps } from '@aws-cdk/cdk'
import { AutoDeleteBucket } from '../../src/resource/auto-delete-bucket'

export class ExampleStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    /**
     * NOTE: S3 requires bucket names to be globally unique across accounts so
     * you will need to change the bucketName to something that nobody else is
     * using.
     */
    new AutoDeleteBucket(this, 'example-autobucket-1', {
      bucketName: 'autoexample-bucket1'
    })

    /**
     * NOTE: S3 requires bucket names to be globally unique across accounts so
     * you will need to change the bucketName to something that nobody else is
     * using.
     */
    const bucket = new AutoDeleteBucket(this, 'example-autobucket-2', {
      bucketName: 'autoexample-bucket2'
    })
    console.log(bucket.bucketWebsiteUrl)
  }
}
