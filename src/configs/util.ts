export const openNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow?.focus();
  } else {
    alert("연결된 사이트가 없습니다.");
  }
};
