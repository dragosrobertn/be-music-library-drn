const AWS = require('aws-sdk')

const s3 = new AWS.S3()

module.exports = (file) => new Promise((resolve, reject) => {
  console.log(file)
  if (file == undefined) {
    return resolve("https://www.theatromarrakech.com/wp-content/plugins/urvenue-plugin/images/placeholder.artist.jpg")
  } else {
    const { BUCKET_NAME, BUCKET_URL } = process.env
    const fileKey = Date.now().toString()
  
    const params = {
      Body: file.buffer,
      Bucket: BUCKET_NAME,
      Key: fileKey,
    }
  
    s3.putObject(params, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(`${BUCKET_URL}/${fileKey}`)
      }
    })
  }
})