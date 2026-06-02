
async function getZohoAccessToken() {
  console.log("🔥 CONTACT API HIT")
  const res = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: '1000.75C8MF0TZ7O7R1GKKJGHMGFC9PKCML',
      client_secret: '225e827d97e13a022428dec3c07180b72abda708a0',
      refresh_token: '1000.96ae969fda2d3bf7163710231dd61ac5.29590a546035b7b2ba0eddf4e2e21f6f',
      grant_type: 'refresh_token',
    }),
  })
  const data = await res.json()
  console.log('Zoho Response:', data)
  if (!data.access_token) {
    console.error('Zoho Token Error:', data)
    throw new Error('Failed to generate access token')
  }
  return data.access_token
}
export async function POST(req: Request) {
  const accessToken = await getZohoAccessToken()
  console.log("🔥 ACCESS TOKEN:", accessToken)
  console.log("🔥 CONTACT API HIT again")
  const body = await req.json()
  const { name, email, phone, company, serviceInterest, message } = body
  console.log("📦 Request Body:", body)
  const response = await fetch('https://www.zohoapis.com/crm/v8/Leads', {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [{
        Layout: "624322000233168008",
        Last_Name: name,
        Email: email,
        Phone:phone,
        Company:company,
        Description:message,
        Message:serviceInterest


      }]
    }),
  })
  console.log("📡 Response Status:", response.status)
  console.log("📡 Response OK?:", response.ok)
  const data = await response.json()
  return Response.json({ success: true, data })
}