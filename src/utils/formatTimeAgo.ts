export const formatTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast.toString()) + "s ago";
  }

  if (secondsPast < 3600) {
    return parseInt((secondsPast / 60).toString()) + "m ago";
  }

  if (secondsPast <= 86400) {
    return parseInt((secondsPast / 3600).toString()) + "h ago";
  }
  if (secondsPast > 86400) {
    const day = Math.floor(secondsPast / 86400);
    return day === 1 ? day + " day ago" : day + " days ago";
  }

  return "";
};
