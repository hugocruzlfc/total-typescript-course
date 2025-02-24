function validateUsername(username: string | null): boolean {
  // Why isn't this working?
  //const isUsernameOK = Boolean(username);

  // Works as Expected!
  const isUsernameOK = !!username;

  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}
