export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("--- setup");

  /*   if (to.path === "/login") {
    throw createError({
      statusCode: 405,
      message: "Ops something wrong ! ",
    });
  } */

  /*   abortNavigation({
    statusCode: 405,
    message: "Ops something wrong ! ",
  }); */

  /*  try {
    const data = await fetch("/api/user");
    return navigateTo(`/profile/${data}`);
  } catch (error) {
    if (error instanceof Error || typeof error === "string") {
      abortNavigation(error);
    } else {
      abortNavigation("Ops something when loading user data");
    }
  } */
});
