// 创建更好的散列函数
function djb2HashCode(key) {
  const hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013;
}