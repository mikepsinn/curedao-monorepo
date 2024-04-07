import { db } from "@/lib/db"

async function getYourUser(yourUserId: any) {
  let user = await db.user.findUnique({
    where: {
      id: yourUserId
    }
  })
  if(user) {
    return user;
  }
  return db.user.create({
    data: {
      id: yourUserId
    }
  });
}

// Function to get or create a user
export async function getOrCreateFdaiUser(yourUserId: any) {
  let your_user = await getYourUser(yourUserId)
  if (your_user && your_user.fdai_user_id) {
    return your_user;
  }

  let response = await fetch(`https://safe.fdai.earth/api/v1/user`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'X-Client-ID': process.env.FDAI_CLIENT_ID!,
      'X-Client-Secret': process.env.FDAI_CLIENT_SECRET!
    },
    body: JSON.stringify({
      clientUserId: yourUserId
    })
  });
  let jsonResponse = await response.json();
  const fdaiUser = jsonResponse.user;
  // Update your user with the fdai_user_id
  await db.user.update({
    where: { id: yourUserId },
    data: {
      fdai_user_id: fdaiUser.id,
      fdai_scope: fdaiUser.scope,
      fdai_access_token: fdaiUser.accessToken,
      fdai_refresh_token: fdaiUser.refreshToken,
      fdai_access_token_expires_at: new Date(fdaiUser.accessTokenExpires).toISOString()
    }
  });
  return jsonResponse.user;
}

export async function getOrCreateFdaiAccessToken(yourUserId: any) {
  let your_user = await getYourUser(yourUserId)
  if (your_user && your_user.fdai_access_token) {
    return your_user.fdai_access_token;
  }

  let response = await fetch(`https://safe.fdai.earth/api/v1/user`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'X-Client-ID': process.env.FDAI_CLIENT_ID!,
      'X-Client-Secret': process.env.FDAI_CLIENT_SECRET!
    },
    body: JSON.stringify({
      clientUserId: yourUserId
    })
  });
  let jsonResponse = await response.json();
  const fdaiUser = jsonResponse.user;
  // Update your user with the fdai_user_id
  await db.user.update({
    where: { id: yourUserId },
    data: {
      fdai_user_id: fdaiUser.id,
      fdai_scope: fdaiUser.scope,
      fdai_access_token: fdaiUser.accessToken,
      fdai_refresh_token: fdaiUser.refreshToken,
      fdai_access_token_expires_at: new Date(fdaiUser.accessTokenExpires).toISOString()
    }
  });
  return jsonResponse.user.accessToken;
}
