
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
      refresh_token: '1000.c7b48b789ba3d276ae9210bc3b11fabb.b54a81ff9fc088fdcc3d397a5bb67b86',
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
  const response = await fetch('https://desk.zoho.com/api/v1/tickets', {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'orgId': "808749983",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subject: serviceInterest,
      departmentId: "851503000004644040",
      phone: phone,
      channel: "Web site",
      contact: {
        lastName: name,
        email: email,
        phone: phone,
      },
      description: `
Company: ${company}<br/><br/>
Service: ${serviceInterest}<br/><br/>
Message: ${message}
`,
    }),
  })
  console.log("📡 Response Status:", response.status)
  console.log("📡 Response OK?:", response.ok)
  const data = await response.json()
  return Response.json({ success: true, data })
}