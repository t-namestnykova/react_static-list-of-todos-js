export const UserInfo = ({ user }) => {
  if (user === null) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailo:${user.email}`}>
      {user.name}
    </a>
  );
};
