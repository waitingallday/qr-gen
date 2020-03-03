import QRCode from 'qrcode'

exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") return { statusCode: 405, body: "Method Not Allowed" }

  const { q } = event.queryStringParameters

  if (!q)  return { statusCode: 400, body: "Bad Request" }

  const image = await QRCode.toDataURL(q, { width: 300 })

  return {
    statusCode: 200,
    body: image.split(',')[1],
    isBase64Encoded: true
  }
}
