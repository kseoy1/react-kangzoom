export const getFullTimeStamp = (value) => {
  const dateTime = new Date(value);
  const years = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  const hours = dateTime.getHours();
  const min =
    dateTime.getMinutes() < 10
      ? "0" + dateTime.getMinutes()
      : dateTime.getMinutes();
  const AMOrPM = hours < 12 ? "오전" : "오후";
  return `${years}.${month}.${day} ${AMOrPM} ${hours}:${min}`;
};

export const formatBytes = (byte, decimal = 2) => {
  if (byte === 0) return "0 Byte";

  const k = 1024;
  const dm = decimal < 0 ? 0 : decimal;
  const sizes = ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(byte) / Math.log(k));

  return parseFloat((byte / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

/**
 * @param {object} 데이터(글제목:title, 글내용: content)
 * @returns 글쓰기
 */
export const write = (data) => {
  const tmp = localStorage.getItem("kangzoom-post");
  const prev = tmp ? JSON.parse(tmp) : [];
  const next = {
    id: new Date().getTime(),
    ...data,
    like: 0,
    view: 0,
    createDate: getFullTimeStamp(new Date()),
    // TODO 이미지 로컬 스토리지에 올릴 방법?
    image: "./image/1.jpg",
  };
  const result = JSON.stringify([...prev, next]);

  console.log(prev);
  localStorage.removeItem("kangzoom-post");
  localStorage.setItem("kangzoom-post", result);

  return { result };
};

/**
 * @returns 전체 글
 */
export const getList = () => {
  const _items = localStorage.getItem("kangzoom-post");
  return JSON.parse(_items);
};

/**
 * @param {number} id
 * @returns 좋아요
 */
export const likeIt = (id) => {
  const _items = JSON.parse(localStorage.getItem("kangzoom-post"));
  const target = _items.filter(x => x.id === id)[0]
  target.like = target.like + 1;

  const result = [
    ..._items.filter(x => x.id !== id),
    target
  ]

  localStorage.removeItem("kangzoom-post");
  localStorage.setItem("kangzoom-post", JSON.stringify(result));
  return false;
};
